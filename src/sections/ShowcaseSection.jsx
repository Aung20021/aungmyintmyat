import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const ShowcaseSection = () => {
  const cardRefs = useRef([]);
  const glowRefs = useRef([]);
  const [glowColor, setGlowColor] = useState("#666bfa"); // Default red

  const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const updateGlow = (x, y, index) => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (!card || !glow) return;

    glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${hexToRgba(
      glowColor,
      0.6
    )}, transparent 80%)`;
    card.style.border = `3px solid ${hexToRgba(glowColor, 0.8)}`;
  };

  const handleMouseMove = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    updateGlow(x, y, index);
  };
  const handleTouchStart = (e, index) => {
    const card = cardRefs.current[index];
    const touch = e.touches[0];
    if (card && touch) {
      const rect = card.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      updateGlow(x, y, index); // Create initial glow effect
    }
  };

  const handleTouchMove = (e, index) => {
    const touch = e.touches[0];
    if (!touch) return;

    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    updateGlow(x, y, index);
  };

  const handleTouchEnd = (index) => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (card && glow) {
      card.style.border = "3px solid transparent";
      glow.style.background = "transparent";
    }
  };

  const handleMouseEnter = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.border = `3px solid ${hexToRgba(glowColor, 0.8)}`;
    }
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (card && glow) {
      card.style.border = "3px solid transparent";
      glow.style.background = "transparent";
    }
  };

  return (
    <div id="work" className="mt-20 px-4 sm:px-6 lg:px-20">
      {/* Section Title */}
      <motion.h1
        whileHover={{ scale: 1.05, color: "#60A5FA" }}
        className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center cursor-pointer"
      >
        My Recent Projects
      </motion.h1>
      {/* Color Picker */}
      <div className="flex justify-center mb-6">
        <label className="text-white font-semibold mr-4">
          Select Glow Color:
        </label>
        <input
          type="color"
          value={glowColor}
          onChange={(e) => setGlowColor(e.target.value)}
          className="w-10 h-10 border-none rounded-full cursor-pointer"
        />
      </div>
      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onTouchStart={(e) => handleTouchStart(e, index)}
            onTouchMove={(e) => handleTouchMove(e, index)}
            onTouchEnd={() => handleTouchEnd(index)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 group cursor-pointer"
            style={{
              border: "3px solid transparent",
              transition: "border-color 0.2s ease-in-out",
              maxWidth: "24rem",
              width: "100%",
              flex: "1 1 300px",
            }}
          >
            {/* Glow Effect */}
            <div
              ref={(el) => (glowRefs.current[index] = el)}
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
              style={{ background: "transparent" }}
            />

            {/* Project Image */}
            <motion.img
              src={project.image}
              alt="Project Image"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 z-10 relative"
              whileHover={{ scale: 1.05 }}
            />

            {/* Card Content */}
            <div className="p-6 relative z-10">
              <motion.h2
                whileHover={{ color: glowColor, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl font-bold mb-2 transition-colors duration-300"
              >
                {project.title}
              </motion.h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Technologies */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border-2 border-transparent text-white hover:border-red-500 hover:text-red-500 transition-all duration-300 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:backdrop-blur-md"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* Links */}
              <div className="flex items-center justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z"
                    />
                  </svg>

                  <span className="text-sm font-semibold">GitHub</span>
                </a>
                <a
                  href={project.liveLink}
                  className="text-red-400 hover:text-red-300 font-semibold text-sm transition-colors duration-300"
                >
                  View Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSection;
