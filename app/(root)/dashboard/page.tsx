import { AcceptMessages } from "@/components/AcceptMessages";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ShowMessages } from "@/components/ShowMessages";
import User from "@/model/user";
import { connectToDatabase } from "@/lib/database";
import { CopyLinkBox } from "@/components/CopyLinkBox";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user.id) {
    redirect("/");
  }
  const username = session.user.username;
  let isAccepting = false;

  try {
    await connectToDatabase();
    const user = await User.findById(session.user.id);
    if (user) {
      isAccepting = user.isAccepting;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  const uniqueLink = `${BASE_URL}/u/${username}`;
  return (
    <section className="w-full min-h-[100vh] mx-auto px-5 py-20 z-99">
      <h1 className=" text-center text-4xl font-bold tracking-tight text-balance mb-10">
        Welcome Back {username}
      </h1>
      <div className="w-full">
        <CopyLinkBox uniqueLink={uniqueLink} />
        <AcceptMessages username={username} isAccepting={isAccepting} />
      </div>
      <ShowMessages />
    </section>
  );
};

export default page;
