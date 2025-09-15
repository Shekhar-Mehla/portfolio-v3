import React from "react";
import resumeImg from "../assets/resumepick.png";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import TypoAnimation from "./TypoAnimation";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
const Hero = () => {
  return (
    <div className="md:mx-40   ">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-1 md:justify-between gap-20 md:gap-0 border-none"
      >
        <div class="flex flex-col justify-between flex-wrap shrink-0    p-4 leading-normal basis-1/2 flex-1/2">
          <div className="basis-10 flex text-3xl font-bold md:item-self-start text-white ">
            Hi
            <div
              className=" animate-wiggle animate-infinite animate-duration-500
 "
            >
              <span>👋</span>
            </div>
          </div>

          <div className="text-white font-bold  basis-10  max-w-100 text-4xl">
            I,m Shekhar Singh
          </div>
          <div className="text-white font-bold text-4xl basis-10  ">
            Software Engineer
          </div>
          <div className="basis-30">
            <TypoAnimation className="text-fuchsia-500    " />
          </div>

          <div className="text-white font-bold basis-10 flex gap-4">
            <Link>
              <div className="text-6xl text-sky-600 ">
                <FaLinkedin></FaLinkedin>
              </div>
            </Link>
            <Link>
              <div className=" text-6xl  text-sky-800">
                <FaGithubSquare></FaGithubSquare>
              </div>
            </Link>
            <Link>
              <div className=" text-6xl  ">
                <IoIosMail></IoIosMail>
              </div>
            </Link>
          </div>
          <a
            href="shekhar-portfolio\src\assets\Shekhar Singh_merncv.pdf"
            download
            className="text-white font-bold basis-10 mt-3 size-30 flex justify-center items-center ring-gray-400 ring-2 bg-amber-400"
          >
            <div className=" ">Resume</div>
          </a>
        </div>

        <div className="relative  shrink-0  flex justify-center basis-1/2">
          <img
            class="object-cover w-full rounded-full h-96 md:h-auto md:w-100   "
            src={resumeImg}
            alt=""
          ></img>
          <div className="bg-sky-400 animate-pulse p-2 lg:-top-[35px]    -top-[55px] -left-[0px] absolute  text-[80px]  rounded-full md:-top-[65px] shadow shadow-sky-500 ring-2 ring-sky-300">
            <FaReact className="animate-wiggle  animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse lg:-top-[35px]   -top-[55px] -right-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <SiExpress className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse md:-bttom-[65px]   -bottom-[55px] -left-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 lg:-bottom-[35px] ring-green-300 rounded-full">
            <FaNodeJs className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse md:-bttom-[65px]   -bottom-[55px] -right-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 lg:-bottom-[35px] ring-green-300 rounded-full">
            <SiMongodb className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Hero;
