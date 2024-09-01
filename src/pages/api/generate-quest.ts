// src/pages/api/generate-quest.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Create a quest for a game where players learn about TypeScript.",
      max_tokens: 100,
    });
    res.status(200).json(response.data.choices[0].text);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate quest" });
  }
}
