import React from "react";

const SkillSection = ({ title, list }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold  text-sky-600 mb-6">{title}</h3>
      <div className="flex text-white flex-wrap justify-center gap-6">
        {list.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
