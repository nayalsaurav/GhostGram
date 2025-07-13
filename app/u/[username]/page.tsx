import React from "react";
import { MessageSection } from "@/components/MessageSection";
import { TryNow } from "@/components/TryNow";
import { Spotlight } from "@/components/ui/spotlight-new";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  return (
    <section className="w-[95%] mx-auto px-5 py-20 relative z-99">
      <h1 className=" text-center text-4xl font-bold tracking-tight text-balance mb-10">
        Public Profile Link
      </h1>
      <MessageSection username={username} />
      <TryNow />
      <Spotlight />
    </section>
  );
};

export default page;
