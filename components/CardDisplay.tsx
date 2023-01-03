import { RssElementData } from "../lib/rssHelpers";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export const CardDisplay = (props: { rssDisplayData: RssElementData }) => {
  const displayData = { ...props.rssDisplayData };
  console.log("display props", props.rssDisplayData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <Link href={displayData.enclosure?.url}>{displayData.title}</Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {displayData.itunes?.summary
                ? displayData.itunes.summary
                : "No Summary"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
