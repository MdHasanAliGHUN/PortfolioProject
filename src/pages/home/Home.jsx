import React from "react";
import Hero from "./Hero";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Home;
