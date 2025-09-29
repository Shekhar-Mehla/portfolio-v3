import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaLock,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiTypescript,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";
import { motion } from "framer-motion";
import fitAura from "../assets/fitAura.png";
import lms from "../assets/lms.png";

const projects = [
  {
    title: "Library Management System (LMS)",
    description:
      "A full-stack MERN application for managing books, users, and borrowing workflows. Built with role-based access, secure authentication, and responsive UI using Bootstrap 5.",
    role: "Solo Developer · Bootcamp Project",
    impact:
      "Implemented modular RESTful APIs, JWT-based auth, and admin/client role separation. Deployed on Vercel with production-ready architecture.",
    tech: [
      "React",
      "Bootstrap 5",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    icons: [
      <FaReact />,
      <SiBootstrap />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
      <SiJsonwebtokens />,
      <FaLock />,
    ],
    image: lms, // Save screenshot in public/images
    repo: "https://github.com/your-username/library-system", // Replace with actual repo
    live: "https://front-end-lms-bootrap.vercel.app/",
  },
  {
    title: "FitAura E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with MERN stack, Tailwind CSS, and Shadcn UI. Features include product catalog, cart, Stripe checkout, and user profiles.",
    role: "Tech Lead · Bootcamp Team Project",
    impact:
      "Integrated JWT auth, Stripe payments, and CORS-secured APIs. Deployed frontend on Vercel and backend on Render.",
    tech: [
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
    ],
    icons: [
      <FaReact />,
      <SiTailwindcss />,
      <SiShadcnui />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
      <SiJsonwebtokens />,
    ],
    image: fitAura, // Save screenshot in public/images
    repo: "https://github.com/your-username/fitaura-client", // Replace with actual repo
    live: "https://client-frontend-gamma.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-amber-400 mb-12 text-start"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700"
              />

              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Impact:</strong> {project.impact}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 text-xl text-sky-400">
                {project.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
