import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler<T>(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: "256x256",
    });
    const result = response.data.data[0].url;

    res.status(200).json({ success: true, result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: "Image could not be generated",
    });
  }
}
