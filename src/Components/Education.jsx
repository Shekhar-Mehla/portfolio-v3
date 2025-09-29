import React from "react";
import {
  FaUniversity,
  FaCertificate,
  FaNodeJs,
  FaPython,
  FaBreadSlice,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Full Stack Development Program",
    institution: "Dented Code Academy",
    duration: "Sep 2024 – Aug 2025",
    highlights: [
      "Mastered JavaScript, TypeScript, React, Redux, Node.js, Express.js, MongoDB, REST APIs, AWS, Git/GitHub, CI/CD, and Stripe integration.",
      "Delivered real-world projects including an E-commerce platform and Library Management System with authentication, dashboards, and payment integration.",
      "Took lead roles: Tech Lead, Scrum Master, QA Lead, UX/UI Lead in agile sprints.",
      "Performed code reviews, managed GitHub repos, and deployed projects on AWS and Vercel.",
    ],
    icon: (
      <div className="flex gap-2">
        <FaReact className="text-cyan-400 text-2xl" />
        <FaNodeJs className="text-green-500 text-2xl" />
        <SiMongodb className="text-green-400 text-2xl" />
      </div>
    ),
    certificate: {
      name: "LinkedIn Certification",
      url: "https://www.linkedin.com/in/shekhar-shashank/certifications", // Replace with actual cert link
    },
  },
  {
    title: "Python Developer Course",
    institution: "WS CubeTech",
    duration: "Jul 2023 – Sep 2023",
    highlights: [
      "Learned Python from basics to advanced level.",
      "Worked on projects like calculator and banking system.",
      "Explored libraries: Pandas, Selenium, BeautifulSoup, Matplotlib, Tkinter, Time module.",
    ],
    icon: <FaPython className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Bachelor of Business Information Sytstem Management",
    institution: "Victoria University",
    duration: "Feb 2015 – Mar 2019",
    highlights: [
      "Focused on Management Information Systems and business technology.",
      "Developed strong analytical, communication, and problem-solving skills.",
    ],
    icon: <FaUniversity className="text-amber-400 text-3xl" />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-400 mb-12 text-start">
          Education
        </h2>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {edu.icon}
                <div>
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {edu.institution} · {edu.duration}
                  </p>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-2 pl-1">
                {edu.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {edu.certificate && (
                <a
                  href={edu.certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 mt-4"
                >
                  <FaCertificate className="text-sky-400" />
                  {edu.certificate.name}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
