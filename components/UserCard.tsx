import React from "react";
import { CardHeader, CardContent } from "./ui/card";
import { GradientAvatar } from "./Avatar";
interface UserCardProps {
  handle: string;
  username: string;
  response: string;
}
export const UserCard = ({ handle, username, response }: UserCardProps) => {
  return (
    <>
      <CardHeader className="flex gap-2 items-center">
        <GradientAvatar
          name={handle}
          size={50}
          className="shadow-xl rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span>{username}</span>
          <span>{handle}</span>
        </div>
      </CardHeader>
      <CardContent>{response}</CardContent>
    </>
  );
};
