import React from "react";
import resumeImg from "../assets/resumepick.png";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import TypoAnimation from "./TypoAnimation";
const Hero = () => {
  return (
    <div className="grid grid-col-4 ">
      <div className="flex flex-1 justify-center items-center flex-col">
        <div className="flex ">
          Hi{" "}
          <div
            className=" animate-wiggle animate-infinite animate-duration-500
 "
          >
            <span>👋</span>
          </div>
        </div>

        <div className="text-white font-bold  max-w-100 text-4xl">
          I,m Shekhar Singh
        </div>
        <div className="text-white font-bold text-4xl">Software Engineer</div>
        <div className="">
          <TypoAnimation className="text-fuchsia-500" />
        </div>

        <div className="text-white font-bold ">icons</div>
        <div className="text-white font-bold ">resume link</div>
      </div>
      <div className="p-6">
        <div className="  relative  rounded-full ">
          <img
            className="size-100 
  flex-col object-cover  rounded-full  "
            src={resumeImg}
            alt=""
          />
          <div className="bg-sky-400 animate-pulse p-2   -top-[70px] -left-[0px] absolute  text-[100px]  rounded-full md:-top-[65px] shadow shadow-sky-500 ring-2 ring-sky-300">
            <FaReact className="animate-wiggle  animate-infinite animate-duration-1000" />
          </div>
          <div className="bg-green-400 animate-pulse md:-top-[65px]    -top-[70px] -right-[0px] absolute p-2 text-[100px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <SiExpress className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>

          <div className="bg-green-400 animate-pulse md:-bttom-[65px]   -bottom-[70px] -left-[0px] absolute p-2 text-[100px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <FaNodeJs className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>
          <div className="bg-green-400 animate-pulse md:-bttom-[65px]   -bottom-[70px] -right-[0px] absolute p-2 text-[100px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
            <SiMongodb className="animate-wiggle animate-infinite animate-duration-1000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
