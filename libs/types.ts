import { Richtext } from "storyblok-js-client";

export type Content = {
  content: {
    mail: string;
    Title: string;
    adress: string;
    number: string;
    mapsLink: string;
    MoneyText: {
      content: [
        {
          text: object;
        }
      ];
    };
    introText: Richtext | undefined;
    MoneyTitle: string;
    introTitle: string;
    linkadress: string;
    offerTitle: string;
    socialText: {
      content: [
        {
          content: object;
        }
      ];
    };
    youtubeVideoLink: string;
    youtubeTitle: string;
    socialTitle: string;
    usagesTitle: string;
    collectTitle: string;
    compostTitle: string;
    contactTitle: string;
    restaurantTitle: string;
    restaurantCollective: string;
    collectives: string;
    particular: string;
  };
};
