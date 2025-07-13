"use server";

import { connectToDatabase } from "@/lib/database";
import Message from "@/model/message";
import User from "@/model/user";

interface SendMessageProps {
  username: string;
  message: string;
}

export async function sendMessageAction({
  username,
  message,
}: SendMessageProps) {
  try {
    const trimmedUsername = username?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedUsername || !trimmedMessage) {
      return {
        status: "error",
        message: "Username and message are required.",
      };
    }

    await connectToDatabase();

    const user = await User.findOne({ username: trimmedUsername });

    if (!user) {
      return {
        status: "error",
        message: "No user found with the given username.",
      };
    }

    if (!user.isAccepting) {
      return {
        status: "error",
        message: "User is not accepting messages.",
      };
    }

    await Message.create({
      receiverId: user._id,
      message: trimmedMessage,
    });

    return {
      status: "success",
      message: "Your message has been sent.",
    };
  } catch (error) {
    console.error("sendMessage error:", error);
    return {
      status: "error",
      message: "An unexpected error occurred while sending the message.",
    };
  }
}
