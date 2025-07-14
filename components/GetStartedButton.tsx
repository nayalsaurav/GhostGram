"use client";

import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useSession } from "next-auth/react";

export const GetStartedButton = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleClick = () => {
    if (session?.user) {
      router.push("/dashboard");
    } else {
      router.push("/signup");
    }
  };

  return (
    <div className="m-6 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black dark:bg-white text-white dark:text-black flex items-center space-x-2 cursor-pointer"
        onClick={handleClick}
      >
        <span>Get Started</span>
      </HoverBorderGradient>
    </div>
  );
};
