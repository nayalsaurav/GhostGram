import React from "react";
import SignInForm from "@/components/SignInForm";

export const metadata = {
  title: "Sign In",
  description:
    "Sign in to your GhostGram account to receive anonymous messages and connect authentically.",
};

const Page = () => {
  return <SignInForm />;
};

export default Page;
