import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Features from "../../components/Features";
import Skills from "../../components/Skills";
import Experiences from "../../components/Experiences";

const About = () => {
  return (
    <div className="max-w-7xl container mx-auto  py-5 px-4">
      <SectionTitle
        title="About Me"
        description="I'm a passionate web developer who loves turning ideas into interactive and user-friendly websites."
      />
      <div className="md:flex">
        {/* Who I Am Section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-black font-bold text-2xl md:text-3xl">
            Who I Am
          </h1>
          <div className="space-y-2 mt-5">
            <h1 className="text-gray-400">
              I'm a passionate Full Stack Developer with over 5 years of
              experience building web applications. I specialize in creating
              responsive, user-friendly interfaces that solve real business
              problems.
            </h1>
            <h1 className="text-gray-400">
              My journey in software development began at XYZ University where I
              studied Computer Science. Since then, I've worked with startups
              and established companies to deliver high-quality software
              solutions.
            </h1>
          </div>
          <div>
            <Features />
          </div>
        </div>

        {/* My Skills Section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-black font-bold text-2xl md:text-3xl">
            My Skills
          </h1>
          {/* Skills section */}
          <div>
            <Skills />
          </div>
          {/* Experience secton */}
          <div>
            <Experiences/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
