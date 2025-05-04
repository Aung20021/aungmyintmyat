import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiVite } from "react-icons/si"; // Added necessary icons
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={28} />,
    level: 90,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={28} />,
    level: 85,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={28} />,
    level: 85,
    color: "from-yellow-300 to-yellow-500",
  },

  {
    name: "React",
    icon: <FaReact size={28} />,
    level: 70,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={28} />,
    level: 90,
    color: "from-cyan-400 to-teal-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={28} />,
    level: 75,
    color: "from-green-400 to-green-600",
  },
  {
    name: "PHP",
    icon: <FaPhp size={28} />,
    level: 80,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Laravel",
    icon: <FaLaravel size={28} />,
    level: 80,
    color: "from-red-400 to-red-600",
  },
  {
    name: "SQL",
    icon: <FaDatabase size={28} />,
    level: 85,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={28} />,
    level: 80,
    color: "from-gray-800 to-gray-600",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={28} />,
    level: 75,
    color: "from-green-300 to-green-500",
  },
  {
    name: "Vite",
    icon: <SiVite size={28} />,
    level: 70,
    color: "from-purple-300 to-yellow-400",
  },
  {
    name: "Python",
    icon: <FaPython size={28} />,
    level: 50,
    color: "from-blue-300 to-blue-500",
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 bg-black text-white">
      <div className="w-full h-full md:px-10 px-5 my-10">
        <TitleHeader
          title="How I Can Contribute & My Skillset"
          sub="🤝 What I Bring to the Table"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <GlowCard key={index} card={skill} index={index}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white drop-shadow-glow">{skill.icon}</div>
              <h3 className="text-lg font-semibold tracking-wide">
                {skill.name}
              </h3>
            </div>

            <p className="text-xs text-gray-400 uppercase mb-2 tracking-widest">
              Proficiency
            </p>

            <div className="w-full h-2 rounded-full bg-white/10 mb-1 overflow-hidden">
              <div
                className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span className="text-sm text-gray-300 font-mono">
              {skill.level}%
            </span>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
