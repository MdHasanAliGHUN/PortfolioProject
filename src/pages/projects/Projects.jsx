import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ProjectCategory from "../../components/ProjectCategory";

const Projects = () => {
  return (
    <div  className="max-w-7xl container mx-auto  py-5 px-4">
      <SectionTitle
        title="My Projects"
        description="Here are some of my recent projects. Each one was carefully crafted to solve specific problems."
      />

      {/* ---------------------Catetory----------------- */}
        <ProjectCategory/>
    </div>
  );
};

export default Projects;
