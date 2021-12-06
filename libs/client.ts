import StoryBlokClient from "storyblok-js-client";
const token = "4Sl5OG2kesCX0K97UTd0Wwtt";
export class Client {
  private client: StoryBlokClient | undefined;
  public async getStory(slug: string) {
    const story = await new StoryBlokClient({
      accessToken: token,
    }).get(slug);
    return story;
  }
  token() {
    return token || undefined;
  }
  constructor() {
    this.client?.accessToken == this.token() || undefined;
  }
  accessToken() {
    this.client?.accessToken == this.token() || undefined;
  }
}
