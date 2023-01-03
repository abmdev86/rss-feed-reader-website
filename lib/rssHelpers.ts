import Parser, { Enclosure } from "rss-parser";

const parser = new Parser<RssElementData>({
  customFields: {
    item: [
      "title",
      "guid",
      "content",
      "contentEncoded",
      "enclosure",
      "itunes",
      "pubDate",
    ],
  },
});

export type RssElementData = {
  title?: string;
  guid?: string;
  content?: string;
  contentEncoded?: string;
  enclosure?: Enclosure;
  itunes?: {
    summary?: string;
    explicit?: boolean;
    duration?: string;
    image?: string;
    keywords?: string;
  };
  pubDate?: string;
  link?: string;
};

export default async function getFeed(url: string) {
  let feedItems: RssElementData[] = [];
  try {
    const feed = await parser.parseURL(url);

    feed.items.forEach((item) => {
      let newItem = { ...item };
      if (newItem) {
        feedItems.push(newItem);
      }
    });

    return feedItems;
  } catch (error) {
    console.error(error);
    return null;
  }
}
