// src/components/Services.jsx
import React from "react";
import { Grid, Paper, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";

const services = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "UI/UX Design",
    desc: "Modern, user-friendly, and clean designs for web & mobile apps.",
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "SEO Writing",
    desc: "Optimized, engaging, and high-quality articles for better ranking.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "React Development",
    desc: "Responsive, fast, and scalable websites using React & modern tools.",
  },
];

const Services = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          My Services
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {services.map((s, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    {s.icon}
                    <Typography variant="h6" fontWeight={700} mt={2}>
                      {s.title}
                    </Typography>
                    <Typography color="text.secondary" mt={1}>
                      {s.desc}
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

export default Services;
