import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <div className="p-3 ">
        <h1 className=" font-bold text-4xl text-amber-400 ">About Me</h1>
        <div className="p-4">
          <div className="flex gap-5 justify-around">
            <div className="text-sky-600 flex flex-col gap-2 justify-center items-center">
              <div className="text-2xl font-bold lg:text-4xl">IT</div>
              <div>Graduate</div>
            </div>
            <div className="text-sky-600 flex flex-col gap-2 justify-center items-center ">
              <div className="text-2xl font-bold lg:text-4xl">Experience</div>
              <div>1+ Yrs Coding</div>
            </div>
            <div className="text-sky-600 flex flex-col gap-2 justify-center items-center">
              <div className="text-2xl font-bold lg:text-4xl">Projects</div>
              <div>10+</div>
            </div>
          </div>
        </div>
        <div className="text-gray-50 text-xl">
          I am <span className="text-sky-600">Shekhar Singh</span>, a recent
          graduate specializing in the MERN stack. I’m passionate about creating
          user-friendly apps with MongoDB, Express.js, React.js, and Node.js. I
          enjoy solving coding challenges and working on exciting projects. I
          thrive in team environments and look forward to real-world projects.
          In five years, I see myself as a lead developer, guiding teams and
          working on innovative solutions. I’m also excited to mentor others and
          contribute to open-source projects.
        </div>
        <div className="flex items-center justify-center text-gray-100 mt-4 font-bold">
          <Link class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Lets Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
