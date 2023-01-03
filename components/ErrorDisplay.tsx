import { Box } from "@mui/system";
import ErrorIcon from "@mui/icons-material/Error";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

export const ErrorDisplay = (props: { message: string }) => {
  const { message } = { ...props };
  const router = useRouter();
  const handleRefresh = (
    event: React.MouseEventHandler | React.SyntheticEvent
  ) => {
    router.reload();
  };
  return (
    <Box sx={{ margin: "auto", width: "100%", textAlign: "center" }}>
      <Typography>
        <small>
          <ErrorIcon />
        </small>
        {message}
      </Typography>
      <Button onClick={handleRefresh}>Refresh</Button>
      <Button href="mailto:amwebdev@outlook.com">Report</Button>
    </Box>
  );
};
