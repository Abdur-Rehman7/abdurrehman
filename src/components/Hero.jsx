// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import hero from "../assets/hero-img.png"
import mypic from "../assets/my-pic.png"
import newpic from "../assets/new-pic.png"

const roles = ["UI/UX Designer", "SEO Writer", "React Developer"];

// Premium: Multiple background videos for scroll
const scrollVideos = [
  { start: 0, src: "https://youtu.be/pF4CZfNRqZQ" },
  { start: 500, src: "https://youtu.be/pF4CZfNRqZQ" },
  { start: 1000, src: "https://youtu.be/pF4CZfNRqZQ" },
];

const Hero = React.forwardRef(({ onPrimaryClick }, ref) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]); // background parallax

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Typing effect
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText((prev) => prev + roles[roleIndex][charIndex]);
      if (charIndex < roles[roleIndex].length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          let deleteIndex = roles[roleIndex].length - 1;
          const deleteInterval = setInterval(() => {
            setText((prev) => prev.slice(0, -1));
            deleteIndex--;
            if (deleteIndex < 0) {
              clearInterval(deleteInterval);
              setRoleIndex((roleIndex + 1) % roles.length);
              setCharIndex(0);
            }
          }, 50);
        }, 1000);
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  // Scroll-based video
  const [videoSrc, setVideoSrc] = useState(scrollVideos[0].src);
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      let currentVideo = scrollVideos[0].src;
      for (let i = scrollVideos.length - 1; i >= 0; i--) {
        if (value >= scrollVideos[i].start) {
          currentVideo = scrollVideos[i].src;
          break;
        }
      }
      setVideoSrc(currentVideo);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouseMove}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scroll-based Background Video */}
      <Box
        component="video"
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        src={videoSrc}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.3)",
          zIndex: -1,
          transition: "background 0.3s ease",
        }}
      />

      {/* Content */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{
                transform: `translate(${mousePos.x / 2}px, ${mousePos.y / 2}px)`,
              }}
            >
              <Typography variant="h3" fontWeight={700} gutterBottom color="common.white">
                Hi, I’m Abdur Rehman 👋
              </Typography>
              <Typography variant="h5" color="rgba(255,255,255,0.8)" gutterBottom>
                {text}
                <span style={{ borderRight: "2px solid white", marginLeft: 2 }}></span>
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
                onClick={onPrimaryClick}
              >
                Explore My Work
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <motion.img
              src= {newpic}
              alt="Abdur Rehman Portfolio"
              style={{
                maxWidth: "100%",
                borderRadius: "20px",
                position: "relative",
                zIndex: 2,
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default Hero;
