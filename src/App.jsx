import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeConfig } from "flowbite-react";
import Experience from "./Components/Experience";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfig dark={true}></ThemeConfig>
      <div className="dark:bg-gray-800 px-5 flex flex-col gap-10">
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
