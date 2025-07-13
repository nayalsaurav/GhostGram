"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "What's a skill you're secretly proud of mastering?",
    description: "GhostGram",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "What kind of positive impact do you hope to make on the world in the future?",
    description: "GhostGram",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "If your code could talk, what would it say about you?",
    description: "GhostGram",
    time: "12m ago",
    icon: "💻",
    color: "#6C63FF",
  },
  {
    name: "Describe your perfect productivity setup.",
    description: "GhostGram",
    time: "15m ago",
    icon: "🖥️",
    color: "#00C9A7",
  },
  {
    name: "What’s the weirdest bug you’ve ever encountered?",
    description: "GhostGram",
    time: "20m ago",
    icon: "🐞",
    color: "#FF3E00",
  },
  {
    name: "What does your dream open-source project look like?",
    description: "GhostGram",
    time: "25m ago",
    icon: "🚀",
    color: "#1E86FF",
  },
  {
    name: "What’s a tech tool you can't live without?",
    description: "GhostGram",
    time: "30m ago",
    icon: "🛠️",
    color: "#FF6F91",
  },
  {
    name: "Which developer superpower do you wish you had?",
    description: "GhostGram",
    time: "35m ago",
    icon: "🧠",
    color: "#7B61FF",
  },
  {
    name: "How do you overcome creative blocks when coding?",
    description: "GhostGram",
    time: "40m ago",
    icon: "🧩",
    color: "#00BFA6",
  },
  {
    name: "Share a proud moment from your dev journey.",
    description: "GhostGram",
    time: "45m ago",
    icon: "🏆",
    color: "#FFD700",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col w-full">
          <figcaption className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1 text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg break-words whitespace-normal w-full">
              {name}
            </span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 break-words whitespace-normal">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListEffect({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
