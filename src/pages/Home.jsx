import React from "react";
// import components
import About from "../components/About";
import GallerySection from "../components/GallerySection";
import Skills from "../components/Skills";
import Interview from "../components/Interview";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
// import framer motion
import { motion } from "framer-motion";
// import transition value
import { transition1 } from "../transition1";
const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    transition = { transition1}
    >
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
    </motion.div>
  );
};

export default Home;
