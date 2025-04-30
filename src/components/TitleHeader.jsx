"use client";

import { motion } from "framer-motion";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col-reverse items-center gap-5">
      {/* Animated badge */}
      <motion.div className="hero-badge" whileHover={{ scale: 1.2 }}>
        <p>{sub}</p>
      </motion.div>

      {/* Animated title */}
      <motion.div
        whileHover={{ scale: 1.05, color: "#6366f1" }} // Example: scale + color change
        transition={{ duration: 0.3 }}
      >
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </motion.div>
    </div>
  );
};

export default TitleHeader;
