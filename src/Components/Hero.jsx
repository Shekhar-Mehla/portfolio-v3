import React from "react";
import resumeImg from "../assets/resumepick.png";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaLinkedin, FaGithubSquare, FaReact } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import TypoAnimation from "./TypoAnimation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:mx-40">
      {/* Use div instead of outer <Link> */}
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-1 md:justify-between gap-20 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col justify-between flex-wrap shrink-0 p-4 leading-normal basis-1/2">
          <div className="flex text-3xl font-bold text-white items-center gap-2">
            Hi
            <div className="animate-wiggle animate-infinite animate-duration-500">
              <span>👋</span>
            </div>
          </div>

          <div className="text-white font-bold text-4xl max-w-100">
            I’m Shekhar Singh
          </div>
          <div className="text-white font-bold text-4xl">Software Engineer</div>
          <div className="basis-30">
            <TypoAnimation className="text-fuchsia-500" />
          </div>

          {/* Social Links */}
          <div className="text-white font-bold flex gap-4 text-6xl">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Shekhar-Mehla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-800"
            >
              <FaGithubSquare />
            </a>
            <a href="mailto:youremail@example.com" className="">
              <IoIosMail />
            </a>
          </div>

          {/* Resume Download */}
          <a
            href={resumeImg} // or the PDF path
            download
            className="text-white font-bold mt-3 flex justify-center items-center ring-gray-400 ring-2 bg-amber-400 p-2 rounded"
          >
            Resume
          </a>
        </div>

        {/* Right Section */}
        <div className="relative shrink-0 flex justify-center ">
          <img
            className="object-cover w-full rounded-full h-96 md:h-auto md:w-100"
            src={resumeImg}
            alt="Resume"
          />

          {/* Skill Icons */}
          <div className="bg-sky-400 animate-pulse p-2 lg:-top-[35px] -top-[55px] -left-[0px] absolute text-[80px] rounded-full md:-top-[65px] shadow shadow-sky-500 ring-2 ring-sky-300">
            <FaReact className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse lg:-top-[35px] -top-[55px] -right-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <SiExpress className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse lg:-bottom-[35px] -bottom-[55px] -left-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <FaNodeJs className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse lg:-bottom-[35px] -bottom-[55px] -right-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <SiMongodb className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
