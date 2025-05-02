import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
const ContactInformation = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-5 space-y-5 shadow-md">
      <h3 className="text-lg font-semibold">Contact Information</h3>
      <div className="flex items-center gap-3 text-sm">
        <MdEmail className="text-sky-500 text-xl" />
        <span>mdhasanmahamud01947@gamil.com</span>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <MdPhone className="text-sky-500 text-xl" />
        <span>+888 01947910254</span>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <MdLocationOn className="text-sky-500 text-xl" />
        <span>Bhogdanga Pateshwari</span>
      </div>

      <div className="pt-4">
        <p className="text-sm font-medium">Connect</p>
        <div className="flex gap-3 mt-2">
          <a
            href="https://github.com/MdHasanAliGHUN"
            className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/home"
            className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
