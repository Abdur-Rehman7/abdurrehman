// src/components/HireMeButton.jsx
import React from "react";
import { Fab } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const HireMeButton = ({ onClick }) => {
  return (
    <Fab
      color="primary"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        boxShadow: 4,
      }}
    >
      <WorkIcon />
    </Fab>
  );
};

export default HireMeButton;
