import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Container maxWidth="sm">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://blog.csdn.net/weixin_51882166?spm=1000.2115.3001.5343"
        >
          Rkun18的博客
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Copyright />
    </Box>
  );
}
