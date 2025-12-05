// src/components/VideoSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const VideoSection = React.forwardRef(({ videoUrl, title, subtitle }, ref) => {
  // Extract YouTube embed ID from URL
  const getEmbedUrl = (url) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  if (!embedUrl) return null; // Invalid URL

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {title && (
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subtitle1" color="text.secondary" mb={6}>
            {subtitle}
          </Typography>
        )}

        <Box
          sx={{
            position: "relative",
            width: "100%",
            pt: "56.25%", // 16:9 aspect ratio
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <iframe
            src={embedUrl}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
});

export default VideoSection;
