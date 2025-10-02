// src/components/TrustedLogosMarquee.jsx
import React from "react";
import { Box, Container } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
];

const TrustedLogosMarquee = React.forwardRef((props, ref) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 20]); // subtle vertical parallax

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient Overlay Left */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 80,
          height: "100%",
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.background.paper} 0%, transparent 100%)`,
          zIndex: 2,
        }}
      />
      {/* Gradient Overlay Right */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 80,
          height: "100%",
          background: (theme) =>
            `linear-gradient(to left, ${theme.palette.background.paper} 0%, transparent 100%)`,
          zIndex: 2,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div style={{ y }}> {/* Parallax container */}
          <Box sx={{ display: "flex", gap: 8, width: "max-content" }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
              style={{ display: "flex", gap: "64px" }}
            >
              {logos.map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt={`Company Logo ${i + 1}`}
                    sx={{
                      maxWidth: 120,
                      maxHeight: 60,
                      objectFit: "contain",
                      filter: (theme) =>
                        theme.palette.mode === "dark"
                          ? "brightness(0) invert(1)"
                          : "none",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
});

export default TrustedLogosMarquee;
