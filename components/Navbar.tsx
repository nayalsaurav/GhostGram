import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
export const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 max-w-7xl mx-auto px-5">
      <h1 className="scroll-m-20 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-balance">
        GhostGram
      </h1>
      <div className="flex gap-4 items-center">
        <ModeToggle />
        <Button className="rounded-full px-4 sm:px-10 py-1 text-[10px] sm:text-sm">
          Login
        </Button>
      </div>
    </nav>
  );
};
