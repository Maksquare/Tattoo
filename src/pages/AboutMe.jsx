import React from "react";
import About from "../components/About";
// import framer motion
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <motion.div
      className=""
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}

      transition={{
        delay: '1s'
      }}
    >
      <About />
    </motion.div>
  );
};

export default AboutMe;
