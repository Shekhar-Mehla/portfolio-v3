import { Avatar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import rebtecklogo from "../assets/rebtecklogo.jpg";

const Experience = () => {
  return (
    <div id="experince">
      <div className="p-3 flex gap-3 flex-col ">
        <div className=" font-bold text-4xl text-amber-400 underline underline-offset-[10px] decoration-sky-600">
          Experince
        </div>
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
          <div className="text-gray-50 text-xl">
            ✅ Backend: Express JS, Node JS, JWT, cookies, middleware (e.g.,
            Joi), file uploads (Cloudinary, multer), email (Nodemailer),
            Passport.js, Stripe, Mongoose, and MongoDB.<br></br>✅ Frontend:
            HTML5, CSS3, SCSS, JavaScript, TypeScript, Bootstrap, Tailwind,
            React, Redux, UI/UX design, React-router-dom, Toastify, Axios,
            React-icons, GoogleFonts, FontAwesome.<br></br>✅ Others: npm, yarn,
            Trello, Jira, Agile methodology, AWS, Docker, Render, Cyclic,
            Vercel, Git/GitHub, Slack, and teamwork.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
