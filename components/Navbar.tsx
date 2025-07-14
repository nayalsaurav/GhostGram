"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    console.log("called here");
    router.push("/signin");
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="flex justify-between py-3 max-w-7xl mx-auto px-5">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
        GhostGram
      </h1>
      <div className="flex gap-4 items-center">
        <ModeToggle />
        {session && session.user.id ? (
          <Button
            className="rounded-full px-4 sm:px-10 py-1 text-[10px] sm:text-sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="rounded-full px-4 sm:px-10 py-1 text-[10px] sm:text-sm"
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};
