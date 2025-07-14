"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { deleteMessageAction } from "@/app/actions/deleteMessage";
import { X } from "lucide-react";
import { toast } from "sonner";
interface MessageCardProps {
  id: string;
  message: string;
  time: string;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

export const MessageCard = ({
  id,
  message,
  time,
  setData,
}: MessageCardProps) => {
  const handleClick = async () => {
    const response = await deleteMessageAction(id);

    if (response.status === "success") {
      toast.success(response.message);
      setData((prev) => prev.filter((data) => data._id !== id));
    } else {
      toast.error(response.message || "Failed to delete message");
    }
  };
  return (
    <Card className="relative w-full md:w-[45%]">
      <CardHeader>
        <CardTitle>{message}</CardTitle>
        <p className="text-sm">{time}</p>
      </CardHeader>
      <X
        size={20}
        strokeWidth={1}
        className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-700"
        onClick={handleClick}
      />
    </Card>
  );
};
