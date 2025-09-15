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
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

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
      icon: <span className="text-white text-4xl font-bold">shadcn</span>,
      name: "Shadcn UI",
    }, // text fallback
  ];

  const backend = [
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, name: "Node.js" },
    {
      icon: <SiExpress className="text-gray-600 text-4xl" />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb className="text-green-500 text-4xl" />,
      name: "MongoDB",
    },
    // text fallback
  ];

  const tools = [
    { icon: <FaGitAlt className="text-orange-600 text-4xl" />, name: "Git" },
    { icon: <FaGitAlt className="text-black text-4xl" />, name: "GitHub" },
    {
      icon: <SiPostman className="text-orange-500 text-4xl" />,
      name: "Postman",
    },
    { icon: <SiVite className="text-purple-500 text-4xl" />, name: "Vite" },
    { icon: <SiDocker className="text-blue-600 text-4xl" />, name: "Docker" },
    { icon: <SiVercel className="text-black text-4xl" />, name: "Vercel" },
    {
      icon: <SiNetlify className="text-green-400 text-4xl" />,
      name: "Netlify",
    },
  ];

  const learning = [
    { icon: <SiNextdotjs className="text-black text-4xl" />, name: "Next.js" },
    {
      icon: <SiDjango className="text-green-700 text-4xl" />,
      name: "Django REST Framework",
    },
    {
      name: "Generative AI",
      icon: <FaRobot className="text-purple-500 w-12 h-9" />,
    },
  ];

  return (
    <section className="py-12 decoration-sky-600 px-6 text-center">
      <h2 className=" font-bold text-4xl text-amber-400  mb-10 text-start">
        Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold  text-sky-600 mb-6">
            Languages
          </h3>
          <div className="flex text-white flex-wrap justify-center gap-6">
            {languages.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semiboldb text-sky-600 mb-6">Frontend</h3>
          <div className="flex flex-wrap  text-white justify-center gap-6">
            {frontend.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold  text-sky-600 mb-6">
            Backend & DB
          </h3>
          <div className="flex flex-wrap  text-white justify-center gap-6">
            {backend.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-sky-600 mb-6">
          Tools & Deployment
        </h3>
        <div className="flex flex-wrap  text-white justify-center gap-6">
          {tools.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-sky-600  mb-6">
          Currently Learning
        </h3>
        <div className="flex flex-wrap text-white justify-center gap-6">
          {learning.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
