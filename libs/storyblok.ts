import axios from "axios";
import StoryBlokClient, { Richtext } from "storyblok-js-client";
import parser from "react-html-parser";
const token = "4Sl5OG2kesCX0K97UTd0Wwtt";
const endpoint = `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=${token}`;
export const getTexts = async () => {
  return await axios.get(endpoint);
};

export const richText = (data: Richtext) => {
  const story = new StoryBlokClient({
    accessToken: token,
  });
  return parser(story.richTextResolver.render(data));
};

export const convert = (data: string) => {
  return parser(data);
};
