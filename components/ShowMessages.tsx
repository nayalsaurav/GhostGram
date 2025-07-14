"use client";

import React from "react";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";
import { MessageCard } from "./MessageCard";
import MessageCardSkeleton from "./MessageCardSkeleton";
import { getAllMessageAction, MessageType } from "@/app/actions/getAllMessages";
import { toast } from "sonner";

export const ShowMessages = () => {
  const [data, setData] = React.useState<MessageType[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    const response = await getAllMessageAction();
    if (response.status === "success" && response.data) {
      setData(response.data);
    }
    toast(response.message);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchMessages();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchMessages();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <div className="flex justify-end mb-3">
        <Button
          variant="secondary"
          className="cursor-pointer"
          onClick={fetchMessages}
          disabled={loading}
        >
          <RefreshCcw size={16} strokeWidth={0.5} />
        </Button>
      </div>
      <div className="flex flex-wrap gap-5 mx-auto">
        {loading ? (
          <MessageCardSkeleton />
        ) : data.length > 0 ? (
          data.map((d) => (
            <MessageCard
              key={d._id}
              id={d._id}
              message={d.message}
              time={d.createdAt}
              setData={setData}
            />
          ))
        ) : (
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            No Messages
          </h3>
        )}
      </div>
    </>
  );
};
