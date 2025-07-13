import { MessageCard } from "@/components/MessageCard";
import { MessageCardSkeleton } from "@/components/MessageCardSkeleton";
import { Button } from "@/components/ui/button";
import { AcceptMessages } from "@/components/AcceptMessages";
import { RefreshCcw } from "lucide-react";
import React from "react";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const page = () => {
  const username = "nayalsaurav";
  const uniqueLink = `${BASE_URL}/u/${username}`;
  return (
    <section className="w-full mx-auto px-5 py-20 z-99">
      <h1 className=" text-center text-4xl font-bold tracking-tight text-balance mb-10">
        Welcome Back {username}
      </h1>
      <div className="w-full">
        <h4 className="scroll-m-5 text-md font-semibold tracking-tight mb-3">
          Copy Your Unique Link
        </h4>
        <div className="leading-7 py-2 px-3 rounded-md w-full border-3 ">
          {uniqueLink}
        </div>
        <AcceptMessages username={username} />
        <div className="flex justify-end mb-3">
          <Button variant="secondary" className="cursor-pointer">
            <RefreshCcw size={16} strokeWidth={0.5} />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mx-auto">
        <MessageCard />
        <MessageCard />
        <MessageCardSkeleton />
      </div>
    </section>
  );
};

export default page;
