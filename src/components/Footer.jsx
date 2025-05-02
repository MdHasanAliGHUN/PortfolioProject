import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* DevPortfolio Info */}
        <div>
          <h2 className="font-bold text-lg mb-2">DevPortfolio</h2>
          <p className="text-sm text-gray-400 mb-4">
            Building beautiful digital experiences and elegant solutions.
          </p>
          <div className="flex space-x-3 text-gray-300 text-lg">
            <div>
              <FaGithub />
            </div>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li className="hover:text-gray-300 hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-gray-300 hover:underline">
            <NavLink to="/projects">Project</NavLink>
            </li>
            <li className="hover:text-gray-300 hover:underline">
            <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <>Privacy Policy</>
            </li>
            <li>
              <>Terms of Service</>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <span>Email:</span> mdhasanmahamud01947@gamil.com
            </li>
            <li>
              <span>Phone:</span> 01947910254
            </li>
            <li>
              <span>Location:</span> bhogdanga pateshwari
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 DevPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
