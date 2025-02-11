import React, { useContext } from "react";
import AppContext from "../context/App_Context";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
 
  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`navbar fixed top-0 left-0 right-0 shadow-sm ${
          theme ? "bg-base-100 text-white" : "bg-white text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            {/* Click to toggle dropdown */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
               
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            {/* Dropdown menu */}
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content absolute mt-3 w-52 rounded-box p-2 shadow z-10 ${
                theme ? "bg-base-100 text-white" : "bg-white text-black"
              } `}
            >
              <li>
                
                <a  href="/" >
                  Home
                </a>
              </li>
              <li>
                <a href="/add" >
                  Add Material
                </a>
              </li>
              <li>
                <a href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="text-xl">Mca Docs</a>
        </div>

        <div className="navbar-end">
          <button onClick={changeTheme} className="btn btn-ghost btn-circle">
            {theme ? <MdDarkMode /> : <CiLight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
