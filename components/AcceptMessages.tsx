"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { isAcceptingMessagesAction } from "@/app/actions/isAcceptingMessages";
import { toast } from "sonner";
interface AcceptMessagesProps {
  username: string;
}

export const AcceptMessages = ({ username }: AcceptMessagesProps) => {
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleChange = async (newValue: boolean) => {
    console.log("called: ", newValue);
    setChecked(newValue);

    setLoading(true);
    console.log("here");
    try {
      const res = await isAcceptingMessagesAction({
        checked: newValue,
        username,
      });

      if (res.status === "success") {
        toast.success(res.message);
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3 justify-start my-3">
      <p className="leading-7 text-sm">Do you want to accept messages?</p>
      <Switch
        checked={checked}
        onCheckedChange={handleChange}
        disabled={loading}
      />
    </div>
  );
};
