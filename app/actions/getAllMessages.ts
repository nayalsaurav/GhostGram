"use server";

import { authOptions } from "@/lib/auth";
import Message from "@/model/message";
import { getServerSession } from "next-auth";

export type MessageType = {
  _id: string;
  message: string;
  createdAt: string;
};

export const getAllMessageAction = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return {
      status: "error",
      message: "Unauthorized access",
      data: null,
    };
  }

  try {
    const id = session.user.id;
    const messages = await Message.find(
      { receiverId: id },
      "_id createdAt message"
    )
      .sort({ createdAt: -1 })
      .lean();

    const safeMessages: MessageType[] = messages.map((msg) => ({
      _id: String(msg._id),
      message: msg.message,
      createdAt: msg.createdAt?.toLocaleString() ?? "",
    }));

    return {
      status: "success",
      message: "Messages retrieved successfully",
      data: safeMessages,
    };
  } catch (error) {
    console.error("Error in getAllMessageAction:", error);

    return {
      status: "error",
      message: "Failed to fetch messages",
      data: null,
    };
  }
};
