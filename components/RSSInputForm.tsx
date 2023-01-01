import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface RssInputFormProps {
  textValue: string;
  textInputLabel?: string;
  textInputId?: string;
}

export default function RssInputForm(props: RssInputFormProps): JSX.Element {
  const { textValue, textInputLabel, textInputId } = { ...props };

  return (
    <form>
      <TextField
        label={textInputLabel ? textInputLabel : "Rss Input Form"}
        id={textInputId ? textInputId : "rss-input-form-text"}
        value={textValue}
      />
      <Button variant="contained">Submit</Button>
    </form>
  );
}
