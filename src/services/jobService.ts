// src/services/jobService.ts
import OpenAIApi from "openai";
import Configuration from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function recommendJob(userBehavior: string) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Based on the user's activity of ${userBehavior}, recommend a suitable job role.`,
    max_tokens: 50,
  });

  return response.data.choices[0].text.trim();
}
