"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
const theme = [
  "hobbies",
  "personal growth",
  "entertainment",
  "coding",
  "programming",
  "future goals",
  "books",
  "relationships",
  "cricket",
  "personal questions",
];
export async function getSuggestedMessagesAction(): Promise<string[]> {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Give exactly 4 short, unique, fun questions about ${theme}.
    Respond only with a valid **JSON array of 4 strings**, no other text.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let output = await response.text();

    // Strip markdown code block markers like ```json ... ```
    output = output.trim();
    if (output.startsWith("```")) {
      output = output
        .replace(/```(?:json)?/gi, "")
        .replace(/```$/, "")
        .trim();
    }

    const res = JSON.parse(output);

    // Optional: validate it's a string array of length 4
    if (
      Array.isArray(res) &&
      res.length === 4 &&
      res.every((item) => typeof item === "string")
    ) {
      return res;
    } else {
      console.warn("Unexpected response format:", res);
    }
  } catch (err) {
    console.warn("Generation failed:", err);
  }

  console.error("Fallback to default messages.");
  return [
    "What's the most unexpectedly fun thing you've done lately?",
    "If you could swap lives with a fictional character for a day, who would it be?",
    "What's a hobby you'd love to pick up if you had more time?",
    "What's your favorite tech meme right now?",
  ];
}
