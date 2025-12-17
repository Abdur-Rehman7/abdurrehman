// src/components/Experience.jsx
import React, { useRef } from "react";
import { Box, Typography, Container, Avatar, Tooltip } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import softpulse from "../assets/softpulse.jpg";
import gop from "../assets/gop.svg";
import hds from "../assets/hadi-digital-solution.jpg";
import ibs from "../assets/infinti-bussiness-solution.jpg";
import wrhub from "../assets/wr-hub.png";
import harwage from "../assets/Harwage.avif";
import im from "../assets/inventory-managment-icon.png";
import shopify from "../assets/shopify.png";
import customercare from "../assets/customer-care.png";

const getDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  if (endDate < startDate) return "Invalid date range";

  const diffMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  let result = "";
  if (years > 0) result += `${years} yr${years > 1 ? "s" : ""} `;
  if (months > 0) result += `${months} mo${months > 1 ? "s" : ""}`;
  return result || "Less than a month";
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString(undefined, options);
};

const experiences = [
  {
    company: "Harwage pvt.Ltd",
    position: "Inventory Managment & Customer Care Representative ",
    start: "2025-08-26",
    end: null,
    desc: "Completed a WordPress Developer internship, gaining hands-on experience building and customizing responsive websites with themes, plugins, HTML, CSS, and PHP, while optimizing performance and integrating APIs at Web Rank Hub.",
    logo: harwage,
    tech: [
      {
        name: "INventory Control & Customer Care Representative",
        img: im,
      },
      {
        name: "Shopify",
        img: shopify,
      },
      {
        name: "Customer Care",
        img: customercare,
      },
    ],
  },
  {
    company: "Web Rank Hub Inc.",
    position: "WordPress Developer",
    start: "2025-08-26",
    end: "2025-09-29",
    desc: "Completed a WordPress Developer internship, gaining hands-on experience building and customizing responsive websites with themes, plugins, HTML, CSS, and PHP, while optimizing performance and integrating APIs at Web Rank Hub.",
    logo: wrhub,
    tech: [
      {
        name: "Gutenberg",
        img: "",
      },
      {
        name: "Elementor",
        img: "",
      },
      {
        name: "Divi",
        img: "",
      },
      {
        name: "php",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "JQuery",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      },
      {
        name: "WordPress",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      },
    ],
  },
  {
    company: "Infinti Bussiness Solutions Inc.",
    position: "Recat JS Frontend Developer",
    start: "2024-09-01",
    end: "2024-11-22",
    desc: "Gained experience developing responsive, high-performance CRM and ERP web interfaces using HTML, CSS, Tailwind, MUI, JavaScript (ES6+), and React/Angular while collaborating in agile teams to enhance usability and cross-browser compatibility at Infiniti Business Solutions.",
    logo: ibs,
    tech: [
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      { name: "MUI", img: "https://mui.com/static/logo.png" },
      {
        name: "Tailwind CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    company: "Hadi Digital Solutions Inc.",
    position: "React JS Frontend Developer",
    start: "2024-09-01",
    end: "2024-11-22",
    desc: "Gained hands-on experience in building responsive React-based web interfaces, integrating RESTful APIs, performing unit testing, and contributing to code reviews to enhance overall application quality at Hadi Digital Solution.",
    logo: hds,
    tech: [
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      { name: "MUI", img: "https://mui.com/static/logo.png" },
      {
        name: "Tailwind CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    company: "Goverment Of Pakistan",
    position: "Full Stack Developer",
    start: "2024-08-12",
    end: "2024-10-31",
    desc: "Gained hands-on experience in HTML, CSS, jQuery, and WordPress under a training program supported by the Government of Pakistan.",
    logo: gop,
    tech: [
      {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JQUERY",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      },
      {
        name: "Wordpress",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      },
    ],
  },
  {
    company: "Soft Pulse Inc.",
    position: "React Js Front End Developer ",
    start: "2024-01-01",
    end: "2024-07-11",
    desc: "Successfully completed training with practical experience in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js development.",
    logo: softpulse,
    tech: [
      {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScripit",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      },
      {
        name: "Tailwind CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
];

const Experience = React.forwardRef((props, ref) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
        >
          Experience Timeline
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          mb={6}
        >
          Professional journey and achievements
        </Typography>

        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            overflowX: { xs: "auto", md: "visible" },
            position: "relative",
            "&::-webkit-scrollbar": { height: 8 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              borderRadius: 4,
            },
          }}
        >
          {/* Animated line (vertical on desktop, horizontal on mobile) */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 40,
              top: 0,
              width: 4,
              height: "100%",
              bgcolor: "grey.300",
              borderRadius: 2,
              zIndex: 1,
            }}
          >
            <motion.div
              style={{
                background: "#1976d2",
                width: "100%",
                height: lineHeight,
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              bottom: -8,
              left: 0,
              width: "100%",
              height: 4,
              bgcolor: "grey.300",
              borderRadius: 2,
            }}
          >
            <motion.div
              style={{
                background: "#1976d2",
                height: "100%",
                width: lineWidth,
                borderRadius: "4px",
              }}
            />
          </Box>

          {experiences.map((exp, index) => {
            const endLabel = exp.end ? formatDate(exp.end) : "Present";
            const startLabel = formatDate(exp.start);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Box
                  sx={{
                    minWidth: { xs: 300, md: "auto" },
                    mb: { xs: 0, md: 6 },
                    mr: { xs: 4, md: 0 },
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                  }}
                >
                  {/* Timeline dot */}
                  <Tooltip title={exp.tech.map((t) => t.name).join(", ")} arrow>
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: 10, md: 38 },
                        top: 8,
                        width: 16,
                        height: 16,
                        bgcolor: "primary.main",
                        borderRadius: "50%",
                        border: "4px solid white",
                        zIndex: 2,
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>

                  <Box
                    sx={{
                      ml: { xs: 0, md: 8 },
                      pl: { xs: 0, md: 2 },
                      pb: 2,
                      mb: 2,
                      borderBottom:
                        index !== experiences.length - 1 ? "1px solid" : "none", // ✅ no border on last card
                      borderColor: "divider",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={1} gap={2}>
                      <Avatar
                        src={exp.logo}
                        alt={exp.company}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          {exp.position}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {exp.company} • {startLabel} – {endLabel} •{" "}
                          {getDuration(exp.start, exp.end)}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ ml: { xs: 0, md: 8 }, mb: 1 }}
                    >
                      {exp.desc}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        ml: { xs: 0, md: 8 },
                        flexWrap: "wrap",
                      }}
                    >
                      {exp.tech.map((t, i) => (
                        <Tooltip key={i} title={t.name} arrow>
                          <Avatar
                            src={t.img}
                            alt={t.name}
                            sx={{ width: 32, height: 32 }}
                          />
                        </Tooltip>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
});

export default Experience;
