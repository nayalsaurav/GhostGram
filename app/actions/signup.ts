"use server";
import { connectToDatabase } from "@/lib/database";
import User from "@/model/user";
import bcrypt from "bcryptjs";

export const signupAction = async (formData: FormData) => {
  const username = formData.get("username")?.toString().trim().toLowerCase();
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString();

  if (!username || !email || !password) {
    return {
      status: "error",
      message: "All fields are required",
    };
  }

  try {
    await connectToDatabase();

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return {
        status: "error",
        message: "Email already in use",
      };
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return {
        status: "error",
        message: "Username is already taken",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return {
      status: "success",
      message: "User created successfully. Sign in to your account.",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      status: "error",
      message: "Internal server error",
    };
  }
};
