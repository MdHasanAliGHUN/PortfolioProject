import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="space-y-3 mt-10 p-5 shadow-md">
        <div className="overflow-hidden rounded-xl shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-120"
        />
      </div>
      <div>
        <h1 className="text-black font-bold  md:text-2xl "> {project.title}</h1>
        <p className="text-gray-400">{project.description}</p>
      </div>
      {/* ---------------type---------------- */}
      <div className="flex  gap-1 space-x-1">
        {project.type.map((type, index) => (
          <div
            key={index}
            className="bg-gray-200 hover:bg-gray-100  px-2 py-1 rounded-lg ring-2 ring-gray-300"
          >
            <button className="text-black text-xs">{type}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
