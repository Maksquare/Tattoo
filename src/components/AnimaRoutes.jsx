import React from "react";

//Import pages
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

// Importing Routes Route and useLocation from react-router-dom
import { Route, Routes, useLocation } from "react-router-dom";
// import Animate Presence from framer motion
import { AnimatePresence } from "framer-motion";

const AnimaRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimaRoutes;
