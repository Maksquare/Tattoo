import React from "react";
import About from "../components/About";
// import framer motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transition1";
const AboutMe = () => {
  return (
    <motion.div
      className=""
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{ scale: 0 }}
      transition={transition1}
    >
      <About />
    </motion.div>
  );
};

export default AboutMe;
