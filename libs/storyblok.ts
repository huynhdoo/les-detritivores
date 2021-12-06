import axios from "axios";
import StoryBlokClient, { Richtext } from "storyblok-js-client";
import parser from "react-html-parser";
import { Client } from "./client";
const client = new Client();
const endpoint = `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=${client.token()}`;
export const texts = async () => {
  return await axios.get(endpoint);
};

export const richText = (data: Richtext) => {
  const story = new StoryBlokClient({
    accessToken: client.token(),
  });
  return parser(story.richTextResolver.render(data));
};

export const convert = (data: string) => {
  return parser(data);
};
