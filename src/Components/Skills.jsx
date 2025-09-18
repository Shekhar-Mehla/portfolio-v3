// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaRobot,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiExpress,
//   SiDjango,
//   SiBootstrap,
//   SiPython,
//   SiTailwindcss,
//   SiVite,
//   SiDocker,
//   SiPostman,
//   SiVercel,
//   SiNetlify,
//   SiTypescript,
//   SiNextdotjs,
// } from "react-icons/si";
// import SkillSection from "./reuasableComponent/SkillSection";

// const Skills = () => {
//   const languages = [
//     { icon: <SiPython className="text-blue-400 text-4xl" />, name: "Python" },
//     { icon: <FaJs className="text-yellow-400 text-4xl" />, name: "JavaScript" },
//     { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML" },
//     { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: "CSS" },
//   ];

//   const frontend = [
//     { icon: <FaReact className="text-cyan-400 text-4xl" />, name: "React" },
//     {
//       icon: <SiBootstrap className="text-purple-600 text-4xl" />,
//       name: "Bootstrap",
//     },
//     {
//       icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
//       name: "Tailwind CSS",
//     },
//     {
//       icon: <span className="text-white text-4xl font-bold">shadcn</span>,
//       name: "Shadcn UI",
//     }, // text fallback
//   ];

//   const backend = [
//     { icon: <FaNodeJs className="text-green-600 text-4xl" />, name: "Node.js" },
//     {
//       icon: <SiExpress className="text-gray-600 text-4xl" />,
//       name: "Express.js",
//     },
//     {
//       icon: <SiMongodb className="text-green-500 text-4xl" />,
//       name: "MongoDB",
//     },
//     // text fallback
//   ];

//   const tools = [
//     { icon: <FaGitAlt className="text-orange-600 text-4xl" />, name: "Git" },
//     { icon: <FaGitAlt className="text-black text-4xl" />, name: "GitHub" },
//     {
//       icon: <SiPostman className="text-orange-500 text-4xl" />,
//       name: "Postman",
//     },
//     { icon: <SiVite className="text-purple-500 text-4xl" />, name: "Vite" },
//     { icon: <SiDocker className="text-blue-600 text-4xl" />, name: "Docker" },
//     { icon: <SiVercel className="text-black text-4xl" />, name: "Vercel" },
//     {
//       icon: <SiNetlify className="text-green-400 text-4xl" />,
//       name: "Netlify",
//     },
//   ];

//   const learning = [
//     { icon: <SiNextdotjs className="text-black text-4xl" />, name: "Next.js" },
//     {
//       icon: <SiDjango className="text-green-700 text-4xl" />,
//       name: "Django REST Framework",
//     },
//     {
//       name: "Generative AI",
//       icon: <FaRobot className="text-purple-500 w-12 h-9" />,
//     },
//   ];

//   return (
//     <section className="py-12 decoration-sky-600 px-6 text-center">
//       <h2 className=" font-bold text-4xl text-amber-400  mb-10 text-start">
//         Skills
//       </h2>
//       <div className="grid md:grid-cols-3 gap-12">
//         {/* Languages */}
//         <SkillSection title={"languages"} list={languages}></SkillSection>
//         {/* Frontend */}
//         <SkillSection title={"Frontend"} list={frontend}></SkillSection>
//         {/* Backend */}
//         <SkillSection title={"Backend && DB"} list={backend}></SkillSection>
//       </div>

//       {/* Tools */}
//       <div className="mt-12">
//         <SkillSection title={"Tools"} list={tools}></SkillSection>
//         {/* currentrly learning */}
//       </div>
//       <div className="mt-12">
//         <SkillSection
//           title={"Currently Learning"}
//           list={learning}
//         ></SkillSection>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDjango,
  SiBootstrap,
  SiPython,
  SiTailwindcss,
  SiVite,
  SiDocker,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiNextdotjs,
  SiShadcnui,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import SkillSection from "./reuasableComponent/SkillSection";

const Skills = () => {
  const languages = [
    { icon: <SiPython className="text-blue-400 text-4xl" />, name: "Python" },
    { icon: <FaJs className="text-yellow-400 text-4xl" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: "CSS" },
  ];

  const frontend = [
    { icon: <FaReact className="text-cyan-400 text-4xl" />, name: "React" },
    {
      icon: <SiBootstrap className="text-purple-600 text-4xl" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
      name: "Tailwind CSS",
    },
    {
      icon: (
        <SiShadcnui className="text-white text-2xl font-bold">
          Shadcn
        </SiShadcnui>
      ),
      name: "Shadcn UI",
    },
  ];

  const backend = [
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, name: "Node.js" },
    {
      icon: <SiExpress className="text-white text-4xl" />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb className="text-green-500 text-4xl" />,
      name: "MongoDB",
    },
  ];

  const tools = [
    { icon: <FaGitAlt className="text-orange-600 text-4xl" />, name: "Git" },
    { icon: <FaGitAlt className="text-white text-4xl" />, name: "GitHub" },
    {
      icon: <SiPostman className="text-orange-500 text-4xl" />,
      name: "Postman",
    },
    { icon: <SiVite className="text-purple-500 text-4xl" />, name: "Vite" },
    { icon: <SiDocker className="text-blue-600 text-4xl" />, name: "Docker" },
    { icon: <SiVercel className="text-white text-4xl" />, name: "Vercel" },
    {
      icon: <SiNetlify className="text-green-400 text-4xl" />,
      name: "Netlify",
    },
    {
      icon: <FaAws className="text-orange-400 text-4xl" />,
      name: "AWS",
    },
  ];

  const learning = [
    {
      icon: <SiNextdotjs className="text-orange-400 text-4xl" />,
      name: "Next.js",
    },
    {
      icon: <SiDjango className="text-green-700 text-4xl" />,
      name: "Django REST",
    },
    {
      icon: <FaRobot className="text-purple-500 text-4xl" />,
      name: "Generative AI",
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-amber-400 mb-12 text-start">
        Skills
      </h2>

      {/* Core Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <SkillSection title="Languages" list={languages} />
        <SkillSection title="Frontend" list={frontend} />
        <SkillSection title="Backend & Databases" list={backend} />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-12"></div>

      {/* Tools & Learning Side by Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <SkillSection title="Tools & Platforms" list={tools} />
        <SkillSection title="Exploring & Learning" list={learning} />
      </div>
    </section>
  );
};

export default Skills;
