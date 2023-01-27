import React from "react";
// import components
import About from "../components/About";
import GallerySection from "../components/GallerySection";
import Skills from "../components/Skills";
import Interview from "../components/Interview";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
    </>
  );
};

export default Home;
