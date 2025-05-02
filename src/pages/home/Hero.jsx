import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import Banner from "../../assets/Banner.jpg";
const Hero = () => {
  return (
    <div className="max-w-7xl container mx-auto  py-5 px-4 md:flex items-center justify-between space-x-5">
      {/*Left div*/}
      <div
        className="space-y-5 md:space-y-10
        max-w-xl
      "
      >
        <button className="bg-gray-200 py-2 px-5 text-sky-500 rounded-full">
          Full Stack Developer
        </button>
        <h1 className="text-black font-bold text-2xl md:text-4xl lg:text-6xl">
          <span className="text-sky-600">Creative </span>
          Developer & Designer
        </h1>
        <p className="text-gray-400">
          Building stunning digital experiences with cutting-edge web
          technologies. Turning ideas into beautiful, functional websites.
        </p>

        <div className=" space-x-3 flex ">
          <NavLink to="/projects">
            {" "}
            <button className="px-5 py-3 rounded-full text-white bg-sky-700 hover:bg-sky-600 ring-2 ring-blue-500 flex items-center gap-3 cursor-pointer">
              <span>View My Work</span> <FaArrowRightLong />
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button className="px-5 hover:bg-gray-200 cursor-pointer py-3 text-black rounded-full bg-gray-300 ring-2 ring-blue-500">
              Get In Touch
            </button>
          </NavLink>
        </div>
      </div>
      {/*Right div*/}
      <div className="flex items-center justify-center">
        <img
          className="w-sm md:w-2xl lg:w-3xl  mt-7
           "
          src={Banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
