import React, { useState } from "react";
import categorys from "../data/js.js";
import projects from "../data/card.js";
import ProjectCard from "./ProjectCard.jsx";

const ProjectCategory = () => {
  const [visibleCount, setVisibleCount] = useState(6); // শুরুতে ৩টা প্রজেক্ট
  const [selectedCategory, setSelectedCategory] = useState("All"); // ডিফল্ট All ক্যাটেগরি

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.type.includes(selectedCategory));

  return (
    <div>
      {/* ------- ক্যাটেগরি বাটন ------- */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categorys.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleCount(3); // ক্যাটেগরি বদলালে শুরুতে ৩টা দেখাবে
            }}
            className={`cursor-pointer px-5 py-2 rounded-lg ring-2 ${
              selectedCategory === category
                ? "bg-sky-500 text-white"
                : "bg-gray-200 hover:bg-gray-100 text-black"
            }`}
          >
            <button className="font-bold">{category}</button>
          </div>
        ))}
      </div>

      {/* ------- প্রজেক্ট কার্ড ------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {filteredProjects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* ------- View More বাটন ------- */}
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCategory;
