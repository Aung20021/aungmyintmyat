import {
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiCloudinary,
  SiGoogle,
  SiOpenai,
  SiStripe,
} from "react-icons/si";
import { RiShieldUserLine } from "react-icons/ri";

const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Education",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I apply strong problem-solving skills and attention to detail to deliver clean, efficient solutions. Through my ongoing advancement in software development, I continuously bring fresh perspectives and reliable results to projects focused on innovation and quality.",
    imgPath: "/images/lithanedu.png",
    logoPath: "/images/lithanlogo.png",
    title: "Pearson BTEC Level 5",
    date: "2025 - Present",
    responsibilities: [
      "Pursuing Pearson BTEC Level 4 & 5 Higher National Diploma in Computing.",
      "Building a strong foundation in software development using modern tools and frameworks.",
      "Collaborating on academic and personal coding projects with an emphasis on clean, maintainable code.",
    ],
  },
  {
    review:
      "During my BTEC Pearson Level 3 studies, I developed a strong technical foundation and applied a hands-on approach to learning. My problem-solving mindset and attention to detail enabled me to produce quality work, even under tight timelines.",
    imgPath: "/images/lithanedu.png",
    logoPath: "/images/lithanlogo.png",
    title: "BTEC Pearson Level 3",
    date: "January 2023 - October 2023",
    responsibilities: [
      "Completed the Pearson BTEC Level 3 in Information Technology with a focus on software development principles.",
      "Engaged in coursework and projects involving databases, programming, and system analysis.",
      "Built early-stage projects applying structured design methods and collaborative development.",
    ],
  },
  {
    review:
      "I completed high school with distinction in 2018, where I built a strong academic foundation that fueled my passion for computing and software development. This early commitment to excellence continues to drive my learning and professional growth.",
    imgPath: "/images/highschooledu.png",
    logoPath: "/images/highschoollogo.png",
    title: "High School Graduate",
    date: "Graduated in 2018",
    responsibilities: [
      "Graduated with distinction, demonstrating consistent academic excellence.",
      "Focused on mathematics and computing-related subjects that laid the groundwork for my technical skills.",
      "Developed strong study habits, discipline, and a problem-solving mindset that continue to support my journey in software development.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const loadingMessages = [
  "Preparing a 3D scene just for you...",
  "Hang tight — magic is happening behind the scenes.",
  "The 3D model of this image is loading...",
];

const projects = [
  {
    id: 1,
    title: "JumpStart Ecommerce Store",
    description:
      "A fashion ecpmmerce store with a clean UI. Includes user authentication and responsive UI. Admin can add, edit, and delete products. Admin can see revenue reports and generate product descriptions with AI.",
    image: "/images/jumpstart.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Stripe", icon: SiStripe },
    ],
    githubLink: "https://github.com/Aung20021/Jumpstart-E-commerce-Store",
    liveLink: "https://jumpstart-e-commerce-store.vercel.app/",
  },

  {
    id: 2,
    title: "EduLearn Teacher App",
    description:
      "An educational platform where teachers can upload, edit, and manage courses. It features an integrated AI chatbot that helps auto-generate course content via the /createcourse cammand.",
    image: "/images/edulearn.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Google Auth", icon: SiGoogle },
      { name: "NextAuth", icon: RiShieldUserLine },
      { name: "AI Chatbot", icon: SiOpenai },
    ],
    githubLink: "https://github.com/Aung20021/edulearn",
    liveLink: "https://edulearn-snowy.vercel.app/",
  },
  {
    id: 3,
    title: "EduLearn Student App",
    description:
      "An education platform where students can enroll in courses and learn. They can access paid courses with a subscription. An AI chatbot is available to assist students 24/7.",
    image: "/images/edulearn-student.png", // Use the image path for the student app
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Google Auth", icon: SiGoogle },
      { name: "NextAuth", icon: RiShieldUserLine },
      { name: "AI Chatbot", icon: SiOpenai },
      { name: "Stripe", icon: SiStripe }, // You can use a relevant icon for Stripe
    ],
    githubLink: "https://github.com/Aung20021/edulearn-student", // Replace with the correct GitHub link
    liveLink: "https://edulearn-student.vercel.app/", // Replace with the live link
  },
  {
    id: 4,
    title: "E-Commerce Admin App",
    description:
      "An admin dashboard for managing products, categories, and viewing orders. Supports adding, editing, and deleting with a clean UI.",
    image: "/images/ecommerce-admin.png", // Replace with your image path
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Google Auth", icon: SiGoogle },
      { name: "NextAuth", icon: RiShieldUserLine },
    ],
    githubLink:
      "https://github.com/Aung20021/aung-myint-myat-ecommerce-app-admin",
    liveLink: "https://aung-myint-myat-ecommerce-app-admin.vercel.app",
  },
  {
    id: 5,
    title: "E-Commerce Customer App",
    description:
      "An eCommerce platform for customers to browse products and complete purchases securely using Stripe. Includes user authentication and responsive UI.",
    image: "/images/ecommerce-customer.png", // Replace with your image path
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Google Auth", icon: SiGoogle },
      { name: "NextAuth", icon: RiShieldUserLine },
      { name: "Stripe", icon: SiStripe },
    ],
    githubLink:
      "https://github.com/Aung20021/Aung-Myint-Myat-ecommerce-app-frontend",
    liveLink: "https://aung-myint-myat-ecommerce-app-frontend.vercel.app/",
  },

  // Add more projects here
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  loadingMessages,
  projects,
};
