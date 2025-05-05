import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";

const TypoAnimation = () => {
  const [textColor, setTextColor] = useState("yellow");
  return (
    <TypeAnimation
      sequence={[
        "I write clean, and simple code.",

        1000,
        () => setTextColor("red"),

        "I love coding and creating.", // Types 'One'
        2000, // Waits 1s
        "I build scalable software.", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        "I solve problems with code.",
        4000, // Types 'Three' without deleting 'Two'
        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "2rem",
        textDecorationLine: "underline",
        textUnderlineOffset: "10px",
        letterSpacing: "2px",
        color: textColor,

        display: "inline-block",
      }}
    />
  );
};
export default TypoAnimation;
