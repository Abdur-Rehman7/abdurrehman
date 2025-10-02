// src/components/AnimatedBox.jsx
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import React from "react";

const AnimatedBox = ({ children, delay = 0 }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;
