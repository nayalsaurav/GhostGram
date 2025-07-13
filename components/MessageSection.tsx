"use client";
import React, { useState } from "react";
import { MessageForm } from "./MessageForm";
import { SuggestMessage } from "./SuggestMessage";
export const MessageSection = ({ username }: { username: string }) => {
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <MessageForm
        message={message}
        username={username}
        setMessage={setMessage}
      />
      <SuggestMessage setMessage={setMessage} />
    </>
  );
};
