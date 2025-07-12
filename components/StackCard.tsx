"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
const CARDS = [
  {
    id: 9,
    name: "GhostGram",
    designation: "1h ago",
    content: (
      <p>
        If you had to teach a class on something unexpected, what would it be?
      </p>
    ),
  },
  {
    id: 8,
    name: "GhostGram",
    designation: "53m ago",
    content: <p>What’s one belief or mindset shift that changed your life?</p>,
  },
  {
    id: 7,
    name: "GhostGram",
    designation: "42m ago",
    content: (
      <p>If you could write a letter to your future self, what would it say?</p>
    ),
  },
  {
    id: 6,
    name: "GhostGram",
    designation: "25m ago",
    content: (
      <p>
        Who is someone that inspires you, and what have you learned from them?
      </p>
    ),
  },
  {
    id: 5,
    name: "GhostGram",
    designation: "18m ago",
    content: (
      <p>What’s a childhood hobby you wish you’d never stopped doing?</p>
    ),
  },
  {
    id: 4,
    name: "GhostGram",
    designation: "8m ago",
    content: (
      <p>
        If time and money weren't an issue, what project would you start
        tomorrow?
      </p>
    ),
  },
  {
    id: 3,
    name: "GhostGram",
    designation: "10m ago",
    content: (
      <p>
        What kind of positive impact do you hope to make on the world in the
        future?
      </p>
    ),
  },
  {
    id: 2,
    name: "GhostGram",
    designation: "5m ago",
    content: <p>What's a skill you're secretly proud of mastering?</p>,
  },
  {
    id: 1,
    name: "GhostGram",
    designation: "2m ago",
    content: (
      <p>
        If you could instantly learn any new language, which would you choose
        and why?
      </p>
    ),
  },
  {
    id: 0,
    name: "GhostGram",
    designation: "0m ago",
    content: (
      <p>What's one small thing you do daily that brings you consistent joy?</p>
    ),
  },
];

export function CardStack() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount < CARDS.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 1000); // Delay between each card (in ms)
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <div className="w-full flex flex-col items-center gap-4 py-8">
      <AnimatePresence>
        {CARDS.slice(0, visibleCount)
          .reverse()
          .map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl rounded-xl bg-muted p-6 shadow-lg"
            >
              <div className="text-sm text-muted-foreground mb-2">
                {card.name}
              </div>
              <div className="text-base font-medium mb-4">
                {card.designation}
              </div>
              <div className="text-sm">{card.content}</div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}
