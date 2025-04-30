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
    )}, transparent 80%)`;
    card.style.borderColor = hexToRgba(glowColor, 0.6);
  };

  const throttledMouseMove = throttle((e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    updateGlow(x, y, index);
  });

  const throttledTouchMove = throttle((e, index) => {
    const touch = e.touches[0];
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
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
    <div id="work" className="mt-20 px-4 sm:px-6 lg:px-20">
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
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => throttledMouseMove(e, index)}
            onMouseEnter={() => updateGlow(150, 75, index)}
            onMouseLeave={() => resetGlow(index)}
            onTouchStart={(e) => throttledTouchMove(e, index)}
            onTouchMove={(e) => throttledTouchMove(e, index)}
            onTouchEnd={() => resetGlow(index)}
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
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: "transparent" }}
            />

            <img
              src={project.image}
              alt="Project"
              className="w-full h-48 object-cover transition-transform duration-300"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full border text-white border-white/10 bg-white/5 backdrop-blur"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  className="text-red-400 hover:text-red-300"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSection;
