import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import RssInputForm from "../components/RSSInputForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [rssURL, setRssURL] = useState("");
  return (
    <>
      <Head>
        <title>Rss Reader Home</title>
      </Head>
      <main>
        <h2>RSS Reader</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            <RssInputForm
              textValue={rssURL}
              textInputId="rss-form-input"
              textInputLabel="Enter RSS URL"
            />
          </Grid>
        </Grid>
      </main>
    </>
  );
}
