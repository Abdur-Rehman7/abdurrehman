// src/components/Testimonials.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    feedback:
      "Working with Abdur Rehman was a fantastic experience! He transformed our website with a clean, modern design and optimized it for SEO. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "Marketing Manager",
    feedback:
      "Abdur Rehman’s attention to detail is incredible. The UI/UX he designed for our platform increased engagement and user satisfaction.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Blogger & Content Creator",
    feedback:
      "Amazing SEO articles! My blog traffic grew by 200% in just 3 months thanks to Abdur Rehman’s writing and strategy.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          What My Clients Say
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          mb={6}
        >
          Trusted by professionals, entrepreneurs, and content creators
        </Typography>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar
                        src={t.avatar}
                        alt={t.name}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          {t.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" mb={2}>
                      "{t.feedback}"
                    </Typography>

                    <Rating value={t.rating} readOnly />
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
});

export default Testimonials;
