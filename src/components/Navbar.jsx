import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../context/AuthProvider";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOutUser()
    .then((result) => {
      console.log("User LogOut Successfully")
    })
    .catch((error) => console.log("Error : ", error.message))
  }
  return (
    <header className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <nav className="max-w-7xl container mx-auto flex justify-between items-center py-5 px-4">
        {/* log */}
        <div className="text-2xl text-indigo-700 font-bold">
          <NavLink to="/">Portfolio</NavLink>
        </div>

        {/* destop menu items */}
        <div className=" hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline text-indigo-700 transition-all"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-indigo-700 transition-all"
                    : "text-black"
                }
                to="/projects"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-indigo-700 transition-all"
                    : "text-black"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-indigo-700 transition-all"
                    : "text-black"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* menu icons */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" cursor-pointer "
          >
            {isMenuOpen ? (
              <RxCross2 className="font-bold text-2xl" />
            ) : (
              <CiMenuFries className="font-bold text-2xl" />
            )}
          </button>
        </div>

        {/* loging*/}
        <div className=" hidden md:block">
          {user ? (
            <button onClick={handleLogOutUser} className="bg-indigo-700  hover:bg-indigo-600 px-4 w-32 cursor-pointer  rounded-md out py-2 text-white">Log Out</button>
          ) : (
            <button className="bg-indigo-700 hover:bg-indigo-600 px-4 w-32 cursor-pointer  rounded-md out py-2 text-white">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>
      </nav>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li className="hover:border-b-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-indigo-700" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:border-b-2">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "underline text-indigo-700" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </NavLink>
            </li>
            <li className="hover:border-b-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline text-indigo-700" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="hover:border-b-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline text-indigo-700" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <NavLink to="/login">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
                Login
              </button>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
