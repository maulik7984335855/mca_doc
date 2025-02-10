import React, { useContext, useState } from "react";
import AppContext from "../context/App_Context";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const {setInput} = useContext(AppContext)
  return (
    <div>
      <div className="navbar fixed top-0 left-0 right-0  bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/add">Add Material</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="text-xl">Mca Docs</a>
        </div>
        {/* <div className="navbar-end">
          <button onClick={() => setToggle(!toggle)} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Search Box with Transition */}
      {/* <div className={`flex justify-center transition-all mt-2 duration-500 ease-in-out ${toggle ? "opacity-100 scale-100 max-h-[50px]" : "opacity-0 scale-90 max-h-0 overflow-hidden"}`}>
        <label className="input">
          <input type="search" onChange={(e)=>setInput(e.target.value)} required placeholder="Search" />
        </label>
      </div> */}
    </div>
  );
};

export default Navbar;
