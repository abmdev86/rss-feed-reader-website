import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function ProgressLoad() {
  return (
    <>
      <Box sx={{ display: "block", margin: "auto", textAlign: "center" }}>
        <CircularProgress />
      </Box>
    </>
  );
}
