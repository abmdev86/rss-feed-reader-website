import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/rssInputForm.module.css";
import { useState } from "react";
import getFeed from "../lib/rssHelpers";

interface RssInputFormProps {
  textInputLabel?: string;
  handleSubmit: Function;
}

export default function RssInputForm(props: RssInputFormProps): JSX.Element {
  const { textInputLabel, handleSubmit } = { ...props };
  const [value, setValue] = useState("");

  const handleOnChange = (event: React.BaseSyntheticEvent) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handleOnSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    handleSubmit(value);
  };

  return (
    <form id="rss-form" className={styles.rssForm} onSubmit={handleOnSubmit}>
      <TextField
        type="url"
        label={textInputLabel ? textInputLabel : "Rss Input Form"}
        id="rss-form-input-text"
        value={value}
        onChange={handleOnChange}
        name="rssUrl"
        required
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
