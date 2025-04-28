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
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark text-white">
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Work></Work>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
