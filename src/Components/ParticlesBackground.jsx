import React from "react";
import Particles from "react-particles";

const ParticlesBackground = () => {
  return (
    <Particles
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // behind all content
      }}
      params={{
        particles: {
          number: { value: 80, density: { enable: true, value_area: 900 } },
          color: { value: ["#ff4d6d", "#6b5bff", "#00ffd5"] }, // bright gradient colors
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 5, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 2, random: true },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
