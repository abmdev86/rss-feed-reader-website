import { Alert } from "@mui/material";
import { Stack } from "@mui/system";
import React, { ErrorInfo } from "react";
import { ErrorDisplay } from "./ErrorDisplay";

type ErrorProps = {
  children: JSX.Element;
};

type ErrorState = {
  hasErrors: false;
  actualError: null;
};
export default class ErrorBoundary extends React.Component<
  ErrorProps,
  ErrorState
> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasErrors: false, actualError: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, actualError: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasErrors) {
      // You can render any custom fallback UI
      return (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <ErrorDisplay message="An Error Has Occured" />
        </Stack>
      );
    }

    return this.props.children;
  }
}
