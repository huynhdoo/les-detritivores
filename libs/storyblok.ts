import axios from "axios";
import StoryBlokClient, { Richtext } from "storyblok-js-client";
import Parser from "react-html-parser";
const token = "4Sl5OG2kesCX0K97UTd0Wwtt";
const endpoint = `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=${token}`;
export const getTexts = async () => {
  return await axios.get(endpoint);
};

export const useRichText = (data: Richtext) => {
  const story = new StoryBlokClient({
    accessToken: token,
  });
  return Parser(story.richTextResolver.render(data));
};
