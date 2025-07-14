"use client";
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export const CopyLinkBox = ({ uniqueLink }: { uniqueLink: string }) => {
  const handleClick = async () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(uniqueLink);
        toast.success("Link copied! Share it with your friends.");
      } catch (err) {
        toast.error("Failed to copy the link.");
        console.error("Clipboard write failed:", err);
      }
    } else {
      toast.error("Clipboard not supported in this environment.");
    }
  };

  return (
    <>
      <h4 className="scroll-m-5 text-md font-semibold tracking-tight mb-3">
        Copy Your Unique Link
      </h4>
      <div className="relative flex items-center leading-7 py-2 px-3 rounded-md w-full border-3 ">
        {uniqueLink}
        <Copy
          className="absolute right-2 z-10 bottom-2 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </>
  );
};
