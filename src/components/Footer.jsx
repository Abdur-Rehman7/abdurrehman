// src/components/Footer.jsx
import React from "react";
import { Box, Container, Typography, Link, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: "background.paper",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        {/* Top Links */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h6" fontWeight={700}>
            Abdur Rehman
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#hero" underline="hover">
              Home
            </Link>
            <Link href="#services" underline="hover">
              Services
            </Link>
            <Link href="#portfolio" underline="hover">
              Portfolio
            </Link>
            <Link href="#contact" underline="hover">
              Contact
            </Link>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              color="primary"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              color="primary"
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              color="primary"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com"
              target="_blank"
              color="primary"
            >
              <GitHub />
            </IconButton>
          </Stack>
        </Stack>

        {/* Bottom Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          © {new Date().getFullYear()} Ali. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
});

export default Footer;
