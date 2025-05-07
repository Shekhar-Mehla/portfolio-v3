import React from "react";
import Carousels from "./Carousels";

const Skills = () => {
  return (
    <div id="skills">
      <div className="p-3 flex gap-3 flex-col ">
        <div className=" font-bold text-4xl text-amber-400 underline underline-offset-[10px] decoration-sky-600">
          Skills
        </div>
        <div>
          <div className="text-gray-300">
            These are the technology i've worked with 🧑‍💼!
          </div>
          <div className="mt-3">
            <Carousels></Carousels>
          </div>
        </div>
        {/* expeirnce section div */}
      </div>
    </div>
  );
};

export default Skills;
