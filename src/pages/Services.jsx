import React from "react";
import Skills from "../components/Skills";
// import framer motion

import { motion } from "framer-motion";
// import transition value
import { transition1 } from "../transition1";
const Services = () => {
  return (
    <motion.div
      className="xs:mt-20 sm:mt-20 md:mt-20 lg:mt-0"
      initial={{ zoom: 0 }}
      animate={{ zoom: 1 }}
      transition={transition1}
    >
      <Skills />
    </motion.div>
  );
};

export default Services;
