import Contact from "../components/Contact";
// import framer motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transition1";
const ContactMe = () => {
  return (
    <motion.div
    className="xs:mt-20 sm:mt-20 md:mt-20 lg:mt-0"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit = {{ opacity: 0 }}
      transition={transition1}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactMe;
