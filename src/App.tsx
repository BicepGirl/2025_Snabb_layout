import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; // Import the theme
import Header from "./Assets/Components/Header";
import Calendar from "./Assets/Components/Calendar";
import Footer from "./Assets/Components/Footer";
import { Box, Container } from "@mui/material";
import React from "react";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Container sx={{ flexGrow: 1, py: 2 }}>
          <Calendar />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
