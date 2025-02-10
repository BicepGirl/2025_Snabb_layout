import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <AppBar
      position="relative" // Ensures it stays inside the normal flow
      sx={{ mt: "auto", bottom: 0 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Box>
            {/* Contact Info */}
            <Typography variant="h6">Contact Info</Typography>
            <Typography variant="body2">Email: contact@myapp.com</Typography>
            <Typography variant="body2">Phone: +46 123 456 789</Typography>
          </Box>{" "}
          <Box sx={{ mt: 2 }}>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, display: "flex" }}>
            © {new Date().getFullYear()} Brum Brum. All rights reserved.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
