import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "flowbite-react";

import ParticlesBackground from "./Components/ParticlesBackground";
import ScrollItem from "./Components/ScrollItem";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfig dark={true} />

      {/* Particle Background */}
      <ParticlesBackground />

      {/* Main content above particles */}
      <div className="relative z-10 dark:bg-gray-900 flex flex-col gap-10 px-5">
        <ScrollItem>
          <Header />
        </ScrollItem>
        <ScrollItem>
          <Hero />
        </ScrollItem>
        <ScrollItem>
          <About />
        </ScrollItem>
        <ScrollItem>
          <Experience />
        </ScrollItem>
        <ScrollItem>
          <Skills />
        </ScrollItem>
        <ScrollItem>
          <Projects />
        </ScrollItem>
        <ScrollItem>
          <Contact />
        </ScrollItem>
        <ScrollItem>
          <Footer />
        </ScrollItem>
      </div>
    </BrowserRouter>
  );
};

export default App;
