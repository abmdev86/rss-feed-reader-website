import Container from "@mui/material/Container";

export default function Layout(props: { children: JSX.Element }) {
  return <Container maxWidth="sm">{props.children}</Container>;
}
