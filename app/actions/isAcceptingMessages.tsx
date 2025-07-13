"use server";

import { connectToDatabase } from "@/lib/database";
import User from "@/model/user";

export async function isAcceptingMessagesAction({
  checked,
  username,
}: {
  checked: boolean;
  username: string;
}) {
  try {
    console.log("called action");
    await connectToDatabase();

    const user = await User.findOne({ username });

    if (!user) {
      return {
        status: "error",
        message: "No user found",
      };
    }

    user.isAccepting = checked;
    await user.save();

    return {
      status: "success",
      message: `Updated isAccepting to ${checked}`,
    };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      status: "error",
      message: "Internal server error",
    };
  }
}
