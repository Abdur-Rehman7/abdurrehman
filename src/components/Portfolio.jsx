// src/components/Portfolio.jsx
import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, revealVariants } from "../animations";

const projects = [
  {
    title: "Landing Page",
    desc: "Responsive landing page built with React & MUI.",
    img: "https://via.placeholder.com/400x250.png?text=Landing+Page",
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "SEO friendly blog site with dynamic content.",
    img: "https://via.placeholder.com/400x250.png?text=Blog+Platform",
    link: "#",
  },
  {
    title: "E-commerce App",
    desc: "Full responsive online shop with React.",
    img: "https://via.placeholder.com/400x250.png?text=E-commerce+App",
    link: "#",
  },
];

const Portfolio = React.forwardRef((props, ref) => {
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
          My Portfolio
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {projects.map((p, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants}>
                  <Card
                    component={motion.div}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    {/* Image Reveal Effect */}
                    <motion.div
                      variants={revealVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <CardMedia
                        component={motion.img}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        height="220"
                        image={p.img}
                        alt={p.title}
                        sx={{ objectFit: "cover" }}
                      />
                    </motion.div>

                    {/* Content */}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" fontWeight={700}>
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {p.desc}
                      </Typography>
                    </CardContent>

                    {/* Button */}
                    <CardActions>
                      <Button
                        size="small"
                        href={p.link}
                        target="_blank"
                        sx={{
                          textTransform: "none",
                          fontWeight: 500,
                        }}
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
});

export default Portfolio;
