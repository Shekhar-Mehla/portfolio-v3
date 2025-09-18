// import React from "react";

// const SkillSection = ({ title, list }) => {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold  text-sky-600 mb-6">{title}</h3>
//       <div className="flex text-white flex-wrap justify-center gap-6">
//         {list.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {item.icon}
//             <p className="mt-2">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillSection;
import React from "react";

const SkillSection = ({ title, list }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold text-center text-sky-400 mb-6 capitalize tracking-wide">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-6 text-white">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-24 hover:scale-105 transition-transform"
            title={item.name}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="mt-2 text-sm font-medium text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
