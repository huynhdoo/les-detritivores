import { NextApiResponse } from "next";
import { texts } from "../../libs/storyblok";

export default async (_, res: NextApiResponse) => {
  const response = await texts();

  const content = response.data.story.content;

  return res.status(200).json({ content });
};
