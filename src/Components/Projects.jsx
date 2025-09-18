// import React from "react";

// import { TabItem, Tabs } from "flowbite-react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
// import { FaJs } from "react-icons/fa";
// import ProjectCard from "./reuasableComponent/ProjectCard";

// const Projects = () => {
//   return (
//     <div id="projects">
//       <h2 className=" font-bold text-4xl text-amber-400  mb-10 text-start">
//         My Work
//       </h2>
//       <div>
//         <Tabs aria-label="Tabs with icons" variant="underline">
//           <TabItem active title="Full stack(MERN)">
//             <div className="font-medium md:flex text-gray-800 dark:text-white">
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//             </div>

//           </TabItem>
//           <TabItem active title="React">
//             <div className="font-medium md:flex text-gray-800 dark:text-white">
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//             </div>

//           </TabItem>
//           <TabItem active title="javascript">
//             <div className="font-medium md:flex text-gray-800 dark:text-white">
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//               <ProjectCard></ProjectCard>
//             </div>

//           </TabItem>

//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact info. Built with React and Tailwind for a sleek, responsive UI.",
    tech: [<FaReact />, <SiTailwindcss />, <FaCss3Alt />],
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a3f1d4?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/example/portfolio",
    live: "https://example.com/portfolio",
    duration: "3 weeks",
    year: "2023",
  },
  {
    title: "E-commerce Backend",
    description:
      "RESTful API with JWT auth, Stripe payments, and product management. Built with Node.js and MongoDB for scalable performance.",
    tech: [<FaNodeJs />, <SiMongodb />],
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/example/ecommerce-api",
    live: "https://example.com/store",
    duration: "2.5 weeks",
    year: "2024",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-12"
    >
      <h2 className="text-4xl font-bold text-center mb-16">Project Journey</h2>

      <div className="space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-[250px] rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>

                {/* Duration + Year */}
                <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full mb-3">
                  🕒 {project.duration} · {project.year}
                </span>

                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex gap-3 text-sky-400 text-2xl mb-4">
                  {project.tech.map((icon, i) => (
                    <span
                      key={i}
                      className="hover:text-sky-300 transition duration-200"
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition duration-200"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded text-sm transition duration-200"
                  >
                    <FaExternalLinkAlt /> Live View
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
