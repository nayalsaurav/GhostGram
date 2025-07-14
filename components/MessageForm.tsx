"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendMessageAction } from "@/app/actions/sendMessage";
import { Loader2Icon } from "lucide-react";
interface MessageFormProps {
  username: string;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageForm = ({
  username,
  message,
  setMessage,
}: MessageFormProps) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      const response = await sendMessageAction({ username, message });
      if (response.status === "success") {
        toast.success(response.message);
        setMessage("");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Label className="scroll-m-5 text-md font-semibold tracking-tight mb-3">
        Send Anonymous Message to @{username}
      </Label>
      <Textarea
        className="py-2 px-3 rounded-md min-h-[100px]"
        placeholder="Write your anonymous message here"
        value={message}
        onChange={(e) => {
          if (e.target.value.length <= 100) {
            setMessage(e.target.value);
          }
        }}
      />
      <Button onClick={handleClick} className="mt-5 w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2Icon className="animate-spin" />
            sending
          </>
        ) : (
          "send message"
        )}
      </Button>
    </div>
  );
};
