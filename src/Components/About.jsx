import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/resumepick.png";

const stats = [
  { icon: <FaUserGraduate size={32} />, label: "Graduate", value: "IT" },
  { icon: <FaCode size={32} />, label: "Experience", value: "1+ Years" },
  { icon: <FaProjectDiagram size={32} />, label: "Projects", value: "10+" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={ProfileImg}
            alt="Shekhar Singh"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-500 hidden md:block"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-amber-400">About Me</h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-sky-400 font-semibold">Shekhar Singh</span>, a
            passionate full-stack developer specializing in the{" "}
            <span className="text-amber-400">MERN</span> stack. I love building
            scalable, user-friendly applications and solving real-world problems
            with clean code.
          </p>
          <p className="text-lg text-gray-300">
            I thrive in collaborative environments and aspire to become a lead
            developer in the next five years, mentoring others and contributing
            to open-source projects.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="text-sky-500 mb-2">{stat.icon}</div>
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 hover:from-blue-600 hover:to-sky-700 transition-all duration-300 shadow-lg text-center"
            >
              Let’s Connect
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
