import React from "react";
import GallerySection from "../components/GallerySection";
// import framer-mation
import { motion } from "framer-motion";
// import transition value
import { transition1 } from "../transition1";

const Gallery = () => {
  return (
    <motion.div
    className="xs:mt-20 sm:mt-20 md:mt-20 lg:mt-0"
 
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={transition1}
    >
      <GallerySection />
    </motion.div>
  );
};

export default Gallery;
