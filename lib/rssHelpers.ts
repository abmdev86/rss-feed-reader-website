import Parser from "rss-parser";

const parser = new Parser();

export type RssElementData = {
  title: string;
  guid: string
  content: string;
  contentEncoded: string;
  enclosure?: {
    length?: string;
    type?: string;
    url: string;
  }
  itunes?: {
    summary?: string;
    explicit?: boolean;
    duration?: string;
    image?: string;
    keywords?: string

  };
  pubDate: string;
};

export default async function getFeed(url: string) {
  let feedItems: any[] = [];
  try {
    const feed = await parser.parseURL(url);

    feed.items.forEach((item) => {
      feedItems.push(item);
    });

    console.log("array i should get", feedItems);
    return feedItems;
  } catch (error) {
    console.error(error);
  }
}
