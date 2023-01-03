import { RssElementData } from "../lib/rssHelpers";
import { CardDisplay } from "./CardDisplay";

export default function RssFeedItemsDisplay(props: {
  currentData: RssElementData[];
}) {
  const data = [...props.currentData];

  return (
    <ul>
      {Object.values(data).map((item, index) => (
        <li key={index}>
          <CardDisplay rssDisplayData={item} />
        </li>
      ))}
    </ul>
  );
}
