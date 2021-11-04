import { NextApiResponse } from "next";
import { getTexts } from "../../libs/storyblok";

export default async (_, res: NextApiResponse) => {
  const response = await getTexts();

  const content = response.data.story.content;

  return res.status(200).json({ content });
};
