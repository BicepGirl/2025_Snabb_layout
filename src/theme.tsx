import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#ff4081", // Pink color
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8, // Default border radius for components
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "2px solid #1976d2", // Default border for all cards
        },
      },
    },
  },
});

export default theme;
