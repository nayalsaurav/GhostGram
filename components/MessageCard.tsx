import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import CloseButton from "./CloseButton";

interface MessageCardProps {
  message?: string;
  time?: string;
}

export const MessageCard = ({
  message = "What is one thing you’ve never told anyone but wish you could?",
  time = "Jul 12, 2025 11:03 AM",
}: MessageCardProps) => {
  return (
    <Card className="relative w-full md:w-[45%]">
      <CardHeader>
        <CardTitle>{message}</CardTitle>
        <p className="text-sm">{time}</p>
      </CardHeader>
      <CloseButton />
    </Card>
  );
};
