import { Card, CardContent, Typography } from "@mui/material";
import { RssElementData } from "../lib/rssHelpers";

export default function RssFeedItemsDisplay(props: {
  currentData: RssElementData[];
}) {
  console.log("feedItemProps: ", props);
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

const CardDisplay = (props: { rssDisplayData: RssElementData }) => {
  const displayData = { ...props.rssDisplayData };

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {displayData.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {displayData.itunes?.summary
            ? displayData.itunes.summary
            : "No Summary"}
        </Typography>
      </CardContent>
    </Card>
  );
};
