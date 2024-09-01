// services/questService.ts
// import { db } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import OpenAIApi from "openai";
import Configuration from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// const openai = new OpenAIApi({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });
const db = getFirestore();

export async function generateQuest() {
  // const response = await openai.completions.create({
  //   model: "gpt-3.5-turbo-instruct",
  //   prompt: "Create a quest for a game where players learn about TypeScript.",
  //   max_tokens: 100,
  // });
  // const res = await fetch("/api/generate", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ text: "Hello world" }),
  // });

  const newQuest = {
    title: "test",
    description: "res" || "Complete the task to earn rewards!",
    completed: false,
    reward: Math.floor(Math.random() * 100) + 50, // Random reward between 50 and 150
  };

  // const questText = response.data.choices[0].text.trim().split("\n");
  // const newQuest = {
  //   title: questText[0],
  //   description: questText[1] || "Complete the task to earn rewards!",
  //   completed: false,
  //   reward: Math.floor(Math.random() * 100) + 50, // Random reward between 50 and 150
  // };

  const docRef = await addDoc(collection(db, "quests"), newQuest);
  return { id: docRef.id, ...newQuest };
}
