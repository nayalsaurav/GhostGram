"use server";

import { authOptions } from "@/lib/auth";
import Message from "@/model/message";
import { getServerSession } from "next-auth";

export const deleteMessageAction = async (id: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.username) {
      return {
        status: "error",
        message: "Unauthorized",
      };
    }

    const userId = session.user.id;
    console.log("data : ", { id, userId });
    const result = await Message.deleteOne({
      _id: id,
      receiverId: userId,
    });

    if (result.deletedCount === 0) {
      return {
        status: "error",
        message: "Message not found or not owned by user",
      };
    }
    return {
      status: "success",
      message: "Message deleted successfully",
    };
  } catch (error) {
    console.error("Delete failed:", error);
    return {
      status: "error",
      message: "Server error during delete",
    };
  }
};
