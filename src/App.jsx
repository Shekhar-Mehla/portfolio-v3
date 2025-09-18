import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "flowbite-react";

import ParticlesBackground from "./Components/ParticlesBackground";
import ScrollItem from "./Components/ScrollItem";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
// import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfig dark={true} />
      <ParticlesBackground />

      {/* Full-width header */}
      <ScrollItem>
        <Header />
      </ScrollItem>

      {/* Main content with consistent layout */}
      <div className="relative z-10 dark:bg-gray-900">
        <Layout>
          <ScrollItem>
            <Hero />
          </ScrollItem>
          <ScrollItem>
            <About />
          </ScrollItem>
          {/* <ScrollItem>
            <Experience />
          </ScrollItem> */}
          <ScrollItem>
            <Skills />
          </ScrollItem>
          <ScrollItem>
            <Projects />
          </ScrollItem>
          <ScrollItem>
            <Contact />
          </ScrollItem>
        </Layout>

        {/* Footer stays outside layout for full-width */}
        <ScrollItem>
          <Footer />
        </ScrollItem>
      </div>
    </BrowserRouter>
  );
};

export default App;
