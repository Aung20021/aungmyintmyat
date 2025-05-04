import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const ShowcaseSection = () => {
  const cardRefs = useRef([]);
  const glowRefs = useRef([]);
  const [glowColor, setGlowColor] = useState("#666bfa");

  const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // ✅ Throttle function to run every ~50ms
  const throttle = (func, limit = 50) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const updateGlow = (x, y, index) => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (!card || !glow) return;

    glow.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${hexToRgba(
      glowColor,
      0.4
    )}, transparent 60%)`;

    card.style.borderColor = hexToRgba(glowColor, 0.6);
  };

  const throttledMouseMove = throttle((e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    updateGlow(x, y, index);
  });

  const resetGlow = (index) => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    if (card && glow) {
      card.style.borderColor = "transparent";
      glow.style.background = "transparent";
    }
  };

  return (
    <div id="work" className=" px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center">
        My Recent Projects
      </h1>

      <div className="flex justify-center mb-6">
        <label className="text-white font-semibold mr-4">
          Select Glow Color:
        </label>
        <input
          type="color"
          value={glowColor}
          onChange={(e) => setGlowColor(e.target.value)}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => throttledMouseMove(e, index)}
            onMouseEnter={() => updateGlow(150, 75, index)}
            onMouseLeave={() => resetGlow(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gray-900 text-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
            style={{
              border: "2px solid transparent",
              maxWidth: "24rem",
              width: "100%",
              flex: "1 1 300px",
            }}
          >
            <div
              ref={(el) => (glowRefs.current[index] = el)}
              className="absolute inset-0 rounded-2xl pointer-events-none z-0"
              style={{ background: "transparent" }}
            />

            <img
              src={project.image}
              alt="Project"
              className="w-full h-48 object-cover transition-transform duration-300 relative z-10"
            />

            <div className="p-6">
              <motion.h2
                className="text-2xl font-bold mb-2 text-white"
                whileHover={{ scale: 1.05, color: glowColor }}
              >
                {project.title}
              </motion.h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 indent-4">
                {project.description}
              </p>

              <motion.div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.span
                      key={idx}
                      className="text-xs font-semibold flex items-center gap-2 px-3 py-1 rounded-full border text-white border-white/10 bg-white/5 backdrop-blur"
                      whileHover={{
                        scale: 1.05,
                        color: "#ff3366", // bright red-pinkish glow
                      }}
                    >
                      <Icon className="text-lg" />
                      {tech.name}
                    </motion.span>
                  );
                })}
              </motion.div>

              <div className="flex items-center justify-between text-sm">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  GitHub
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
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
