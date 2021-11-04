import axios from "axios";
import StoryBlokClient, { Richtext } from "storyblok-js-client";
import Parser from "react-html-parser";
export const getTexts = async () => {
  return await axios.get(
    `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt`
  );
};

export const useRichText = (data: Richtext) => {
  const TOKEN = "4Sl5OG2kesCX0K97UTd0Wwtt";
  const story = new StoryBlokClient({
    accessToken: TOKEN,
  });
  return Parser(story.richTextResolver.render(data));
};
