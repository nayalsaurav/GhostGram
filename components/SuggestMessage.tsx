"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { getSuggestedMessagesAction } from "@/app/actions/getSuggestedMessages";
import { Card, CardContent } from "./ui/card";
import { Loader2Icon } from "lucide-react";
interface SuggestMessageProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
export const SuggestMessage = ({ setMessage }: SuggestMessageProps) => {
  const [messages, setMessages] = useState<string[]>([
    "What's the most unexpectedly fun thing you've done lately?",
    "If you could swap lives with a fictional character for a day, who would it be?",
    "What's a hobby you'd love to pick up if you had more time?",
    "What's the most creative way you've used a debugging tool?",
  ]);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await getSuggestedMessagesAction();
      setMessages(res);
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
        Click on any message below to select it.
      </h3>

      <div className="space-y-3 w-full">
        {messages.map((msg, index) => (
          <Card
            key={index}
            className="w-full text-center font-semibold text-balance py-3 cursor-pointer"
            onClick={() => setMessage(msg)}
          >
            <CardContent>{msg}</CardContent>
          </Card>
        ))}
      </div>

      <Button
        onClick={handleClick}
        variant="secondary"
        className="mt-4 w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2Icon className="animate-spin" />
            Please wait
          </>
        ) : (
          "Suggest Messages"
        )}
      </Button>
    </div>
  );
};
