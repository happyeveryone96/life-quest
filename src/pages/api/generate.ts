// pages/api/generate.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { pipeline } from "@huggingface/transformers";
// import { GPT2LMHeadModel, GPT2Tokenizer } from "@huggingface/transformers";

// // const model = pipeline("text-generation", "gpt2");
// const model = GPT2LMHeadModel.from_pretrained("gpt2");

// interface GenerationOutput {
//   generated_text: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const text = req.body.text || "Once upon a time";
//   const output = await (await model)(text, { max_length: 50 });
//   console.log(text);
//   res.status(200).json({
//     generated_text: (output as unknown as GenerationOutput[])[0].generated_text,
//   });
// }

interface GenerationOutput {
  generated_text: string;
}

import { NextApiRequest, NextApiResponse } from "next";
import { pipeline } from "@huggingface/transformers";

const generateText = pipeline("text-generation", "gpt2");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const text = req.body.text || "Once upon a time";
  const output = await (await generateText)(text, { max_length: 50 });

  res.status(200).json({
    generated_text: (output as unknown as GenerationOutput[])[0].generated_text,
  });
}
