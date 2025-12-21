// src/components/Technologies.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";

const technologies = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Sass", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg" },
  { name: "Adobe Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
];

const Technologies = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
          Technologies I Use
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          mb={6}
        >
          Tools and technologies I work with to build modern websites and design stunning UI/UX
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="center">
            {technologies.map((tech, i) => (
              <Grid key={i} item xs={6} sm={4} md={2}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      p: { xs: 2, md: 3 },
                      borderRadius: 3,
                      height: { xs: 110, sm: 120 },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      style={{ width: 50, height: 50, objectFit: "contain" }}
                    />
                    <Typography variant="subtitle1" mt={1} fontWeight={600} textAlign="center">
                      {tech.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
});

export default Technologies;
