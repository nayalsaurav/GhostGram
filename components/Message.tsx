import React from "react";
import { Card, CardContent } from "./ui/card";

type MessageProps = {
  children: React.ReactNode;
};

export const Message = ({ children }: MessageProps) => {
  return (
    <Card className="w-full text-center font-semibold text-balance py-3 cursor-pointer">
      <CardContent>{children}</CardContent>
    </Card>
  );
};
