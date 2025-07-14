"use client";

import { deleteMessageAction } from "@/app/actions/deleteMessage";
import { X } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "sonner";

const CloseButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleClick = async () => {
    const response = await deleteMessageAction(id);

    if (response.status === "success") {
      toast.success(response.message);
      router.reload();
    } else {
      toast.error(response.message || "Failed to delete message");
    }
  };

  return (
    <X
      size={20}
      strokeWidth={1}
      className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-700"
      onClick={handleClick}
    />
  );
};

export default CloseButton;
