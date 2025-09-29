import React from "react";
import resume from "../assets/shekharcv.pdf";
import resumeImg from "../assets/resumepick.png";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaLinkedin, FaGithubSquare, FaReact } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import TypoAnimation from "./TypoAnimation";
import { MdDownloadForOffline } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-30 md:gap-x-12">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-4 text-center md:text-left w-full md:w-1/2">
        <div className="flex text-3xl md:text-4xl font-bold items-center justify-center md:justify-start gap-2">
          Hi <span className="animate-wiggle">👋</span>
        </div>
        <div className="text-2xl md:text-3xl font-extrabold">
          I’m Shekhar Singh
        </div>
        <div className="text-lg md:text-xl font-semibold text-fuchsia-500">
          Software Engineer
        </div>

        {/* Typo Animation */}
        <div className="h-[2.5rem] flex items-center justify-center md:justify-start text-md md:text-lg font-medium text-fuchsia-400">
          <TypoAnimation />
        </div>

        {/* Social Links & Resume */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mt-6">
          <div className="flex gap-4 justify-center sm:justify-start text-3xl sm:text-4xl">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Shekhar-Mehla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-800 hover:text-gray-400 transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="mailto:shekharmehla279@gmail.com"
              className="hover:text-red-500 transition"
            >
              <IoIosMail />
            </a>
          </div>

          <a
            href={resume}
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded ring-2 ring-gray-400 hover:bg-amber-500 transition w-full sm:w-auto mx-auto sm:mx-0"
          >
            <MdDownloadForOffline className="text-xl" />
            <span className="text-sm sm:text-base">Download Resume</span>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
        <img
          src={resumeImg}
          alt="Profile"
          className="w-full h-full rounded-full object-cover shadow-2xl"
        />

        {/* Floating Skill Icons */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-sky-400 animate-pulse p-2 rounded-full shadow-lg ring-2 ring-sky-300">
          <FaReact className="text-3xl text-white animate-wiggle animate-infinite animate-duration-1000" />
        </div>
        <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 bg-green-500 animate-pulse p-2 rounded-full shadow-lg ring-2 ring-green-300">
          <SiExpress className="text-3xl text-white animate-wiggle animate-infinite animate-duration-1000" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-green-600 animate-pulse p-2 rounded-full shadow-lg ring-2 ring-green-300">
          <FaNodeJs className="text-3xl text-white animate-wiggle animate-infinite animate-duration-1000" />
        </div>
        <div className="absolute bottom-1/2 left-0 -translate-x-full translate-y-1/2 bg-green-700 animate-pulse p-2 rounded-full shadow-lg ring-2 ring-green-300">
          <SiMongodb className="text-3xl text-white animate-wiggle animate-infinite animate-duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
