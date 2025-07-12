import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import React from "react";
import { Message } from "@/components/Message";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const page = ({ params: { username } }: { params: { username: string } }) => {
  return (
    <section className="w-[95%] mx-auto px-5 py-20">
      <h1 className=" text-center text-4xl font-bold tracking-tight text-balance mb-10">
        Public Profile Link
      </h1>
      <div className="w-full">
        <Label className="scroll-m-5 text-md font-semibold tracking-tight mb-3">
          Send Anonymous Message to @{username}
        </Label>
        <Textarea
          className=" py-2 px-3 rounded-md min-h-[100px]"
          placeholder="Write your anonymous message here"
        />
        <Button className="w-full mt-5">Send</Button>
      </div>
      <div className="flex flex-col items-center mt-20">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
          Click on any message below to select it.
        </h3>
        <div className="space-y-3 w-full">
          <Message>
            What's the most unexpectedly fun thing you've done lately?
          </Message>
          <Message>
            What's the most unexpectedly fun thing you've done lately?
          </Message>
          <Message>
            What's the most unexpectedly fun thing you've done lately?
          </Message>
        </div>
        <Button variant="secondary" className="mt-4 w-full">
          Suggest Messages
        </Button>
      </div>
      <div className="text-center text-balance mt-20">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Do you also want to Receive Messages?
        </h4>
        <Button className="w-full mt-5">Try Now!</Button>
      </div>
    </section>
  );
};

export default page;
