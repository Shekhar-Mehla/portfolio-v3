// import React from "react";
// import resumeImg from "../assets/resumepick.png";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import { FaNodeJs, FaLinkedin, FaGithubSquare, FaReact } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import TypoAnimation from "./TypoAnimation";
// import { Link } from "react-router-dom";
// // className="flex  justify-between  bg-white border border-gray-200 rounded-lg shadow-sm   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-1"

// const Hero = () => {
//   return (
//     <div className="flex flex-row justify-center shadow bg-gray-800 p-2 my-10  items-center">
//       {/* Use div instead of outer <Link> */}
//       <div className="flex  md:justify-evenly md:flex-row flex-col     md:w-screen flex-wrap gap-y-30 lg:gap-y-0 px-4 ">
//         {/* Left Section */}
//         <div className="flex flex-col md:w-[50%] md:items-center md:justify-between">
//           <div className="flex text-3xl font-bold text-white items-center gap-2">
//             Hi
//             <div className="animate-wiggle animate-infinite animate-duration-500">
//               <span>👋</span>
//             </div>
//           </div>

//           <div className="text-white font-bold text-4xl max-w-100">
//             I’m Shekhar Singh
//           </div>
//           <div className="text-white font-bold text-4xl">Software Engineer</div>
//           <div className="basis-40">
//             <TypoAnimation className="text-fuchsia-500" />
//           </div>

//           <div className=" flex flex-col sm:justify-center items-center md:block  gap-y-5">
//             {/* Social Links */}
//             <div className="text-white font-bold flex gap-4 text-6xl">
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sky-600"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="https://github.com/Shekhar-Mehla"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sky-800"
//               >
//                 <FaGithubSquare />
//               </a>
//               <a href="mailto:youremail@example.com" className="">
//                 <IoIosMail />
//               </a>
//             </div>

//             {/* Resume Download */}
//             <div className=" sm:w-[100%] md:w-auto">
//               <a
//                 href={resumeImg} // or the PDF path
//                 download
//                 className="text-white font-bold my-3 flex justify-center items-center ring-gray-400 ring-2 bg-amber-400 p-2 rounded"
//               >
//                 View Resume
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="relative shrink-0 flex justify-center ">
//           <img
//             className="object-cover w-full rounded-full h-96 md:h-auto md:w-100"
//             src={resumeImg}
//             alt="Resume"
//           />

//           {/* Skill Icons */}
//           <div className="bg-sky-400 animate-pulse p-2 lg:-top-[35px] -top-[55px] -left-[0px] absolute text-[80px] rounded-full md:-top-[65px] shadow shadow-sky-500 ring-2 ring-sky-300">
//             <FaReact className="animate-wiggle animate-infinite animate-duration-1000" />
//           </div>

//           <div className="bg-green-400 animate-pulse lg:-top-[35px] -top-[55px] -right-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
//             <SiExpress className="animate-wiggle animate-infinite animate-duration-1000" />
//           </div>

//           <div className="bg-green-400 animate-pulse lg:-bottom-[35px] -bottom-[55px] -left-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
//             <FaNodeJs className="animate-wiggle animate-infinite animate-duration-1000" />
//           </div>

//           <div className="bg-green-400 animate-pulse lg:-bottom-[35px] -bottom-[55px] -right-[0px] absolute p-2 text-[80px] shadow shadow-green-500 ring-2 ring-green-300 rounded-full">
//             <SiMongodb className="animate-wiggle animate-infinite animate-duration-1000" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import resume from "../assets/shekharcv.pdf";
import resumeImg from "../assets/resumepick.png";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaLinkedin, FaGithubSquare, FaReact } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import TypoAnimation from "./TypoAnimation";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white sm:py-20 py-12 px-4  flex flex-wrap justify-center gap-x-10 gap-y-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-4 text-center md:text-left w-full md:w-[45%]">
        <div className="flex text-3xl md:text-4xl font-bold items-center justify-center md:justify-start gap-2">
          Hi <span className="animate-wiggle">👋</span>
        </div>
        <div className="text-2xl md:text-3xl font-extrabold">
          I’m Shekhar Singh
        </div>
        <div className="text-lg md:text-xl font-semibold text-fuchsia-500">
          Software Engineer
        </div>

        {/* Typo Animation with fixed height */}
        <div className="h-[2.5rem] flex items-center justify-center md:justify-start text-md md:text-lg font-medium text-fuchsia-400">
          <TypoAnimation />
        </div>

        {/* Social Links & Resume */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mt-4">
          <div className="flex gap-4 text-3xl sm:text-4xl justify-center sm:justify-start">
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
              href="mailto:youremail@example.com"
              className="hover:text-red-500 transition"
            >
              <IoIosMail />
            </a>
          </div>

          <a
            href={resume}
            rel="noopener noreferrer"
            className="w-[160px] mx-auto sm:mx-0 text-center bg-amber-400 text-gray-900 font-bold px-6 py-2 rounded ring-2 ring-gray-400 hover:bg-amber-500 transition"
          >
            View Resume
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

        {/* Floating Skill Icons - just outside the image edge */}
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
