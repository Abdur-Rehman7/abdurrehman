// src/components/Experience.jsx
import React, { useRef } from "react";
import { Box, Typography, Container, Avatar, Tooltip } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const getDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
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
    company: "Tech Solutions Inc.",
    position: "Frontend Developer",
    start: "2022-01-01",
    end: null,
    desc: "Developed responsive web apps using React, MUI, and Tailwind. Improved UX and optimized performance.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
    company: "Creative Agency",
    position: "UI/UX Designer",
    start: "2020-03-01",
    end: "2021-12-31",
    desc: "Designed user interfaces and prototypes using Figma and Adobe XD. Worked with developers for smooth handoff.",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    tech: [
      {
        name: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Adobe XD",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adobe_XD_CC_icon.svg",
      },
      {
        name: "Photoshop",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
      },
    ],
  },
  {
    company: "SEO Hub",
    position: "SEO Content Writer",
    start: "2019-01-01",
    end: "2020-02-28",
    desc: "Produced SEO content that boosted site traffic by 150%. Optimized blogs with researched keywords.",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
    tech: [
      {
        name: "SEO",
        img: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
      },
      {
        name: "WordPress",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      },
      {
        name: "Content Writing",
        img: "https://cdn-icons-png.flaticon.com/512/3022/3022126.png",
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
