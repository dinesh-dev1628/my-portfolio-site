import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MagneticButton = ({ children, onClick, className = "", style = {}, strength = 0.35 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const handleMouseMove = (e) => {
    if (reduce || (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={reduce ? undefined : { x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
      className={`magnetic-wrap ${className}`}
      onClick={onClick}
      style={{ display: "inline-block", ...style }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
