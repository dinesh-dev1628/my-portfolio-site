import { motion } from "framer-motion";

export const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Moves to final position when seen
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of element is visible
      transition={{ 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] // High-end "cubic-bezier" ease
      }}
    >
      {children}
    </motion.div>
  );
};