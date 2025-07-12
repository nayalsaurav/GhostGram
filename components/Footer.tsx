import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto flex flex-col gap-2 sm:flex-row justify-between items-center py-4 px-5">
      <h3 className="text-2xl font-semibold tracking-tight">GhostGram</h3>
      <p className="leading-7">
        Saurav &copy; {new Date().getFullYear()} - All rights reserved
      </p>
      <div className="flex items-center gap-4 text-xl">
        <a
          href="https://github.com/nayalsaurav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/nayalsaurav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};
