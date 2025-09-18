import { Avatar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import rebtecklogo from "../assets/rebtecklogo.jpg";
import { FaServer, FaCode, FaTools } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experince">
      <div className="p-3 flex gap-3 flex-col ">
        <div className=" font-bold text-4xl text-amber-400 ">Experince</div>
        {/* expeirnce section div */}
        <div className="parnet flex py-4 px-2.5 text-gray-50">
          <div className="flex md:text-2xl text-1xl justify-between items-center w-full ">
            <div className="flex gap-2">
              <Avatar img={rebtecklogo} alt="avatar of Jese" rounded />
              Reb Tech
            </div>
            <div className="text-sky-600"> Sep 2024-Present</div>
          </div>
        </div>
        <div className="text-3xl text-sky-600">Full Stack Developer</div>
        <div className="text-2xl text-amber-400">
          Overview:
          <ul className="space-y-6 text-gray-50 text-lg leading-relaxed fade-in">
            <li className="flex items-start gap-3">
              <FaServer className="mt-1 text-sky-400 text-xl shrink-0" />
              <span>
                <span className="font-semibold text-sky-300">Backend:</span>{" "}
                Express JS, Node JS, JWT, cookies, middleware (e.g., Joi), file
                uploads (Cloudinary, multer), email (Nodemailer), Passport.js,
                Stripe, Mongoose, and MongoDB.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCode className="mt-1 text-sky-400 text-xl shrink-0" />
              <span>
                <span className="font-semibold text-sky-300">Frontend:</span>{" "}
                HTML5, CSS3, SCSS, JavaScript, TypeScript, Bootstrap, Tailwind,
                React, Redux, UI/UX design, React-router-dom, Toastify, Axios,
                React-icons, GoogleFonts, FontAwesome.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaTools className="mt-1 text-sky-400 text-xl shrink-0" />
              <span>
                <span className="font-semibold text-sky-300">Others:</span> npm,
                yarn, Trello, Jira, Agile methodology, AWS, Docker, Render,
                Cyclic, Vercel, Git/GitHub, Slack, and teamwork.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
