// src/App.jsx
import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import TrustedLogosMarquee from "./components/TrustedLogosMarquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HireMeButton from "./components/HireMeButton";
import BackToTopButton from "./components/BackToTopButton";
import Technologies from "./components/Technologies";
import VideoSection from "./components/VideoSection";
import Experience from "./components/Experience";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const videoRef = useRef(null); // ← new ref for VideoSection
  const footerRef = useRef(null);

  const refs = {
    hero: heroRef,
    services: servicesRef,
    portfolio: portfolioRef,
    videos: videoRef, // ← register here
    contact: contactRef,
    footer: footerRef,
  };

  const navigateTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        refs[key].current.id = key;
        observer.observe(refs[key].current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box>
      <Navbar onNav={navigateTo} activeSection={activeSection} />
      <Hero ref={heroRef} onPrimaryClick={() => navigateTo("services")} />
      <Services ref={servicesRef} />
      <Technologies />
      <Experience />
      <Portfolio ref={portfolioRef} />
      <VideoSection
        ref={videoRef}
        videoUrl="https://youtu.be/LZyiWCX_9mc?si=coaWPXO3VFLPJv7I"
        title="My Work in Action"
        subtitle="Check out a live demo of my latest project"
      />
      <Testimonials />
      <TrustedLogosMarquee />
      <Contact ref={contactRef} />
      <Footer ref={footerRef} />
      <HireMeButton onClick={() => navigateTo("contact")} />
      <BackToTopButton onClick={() => navigateTo("hero")} />
    </Box>
  );
}

export default App;
