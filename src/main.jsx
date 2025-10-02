// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ThemeContextProvider from "./ThemeContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Blue
    secondary: { main: "#ff4081" }, // Pink
    background: { default: "#ffffff", paper: "#f9f9f9" },
    text: { primary: "#111", secondary: "#555" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
