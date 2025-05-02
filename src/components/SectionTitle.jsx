import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <section className="flex items-center justify-center my-10">
      <div className="max-w-2xl">
        <h1 className="text-black font-bold text-2xl md:text-3xl text-center mb-2">{title}</h1>
        <p className="text-gray-400 text-center">{description}</p>
      </div>
    </section>
  );
};

export default SectionTitle;
