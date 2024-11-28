import React from "react";
import Login from "./Login";

function Navbar() {
  return (
    <div>
      <>
        <div className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-3">
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
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
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/Packages">Packages</a>
                    </li>
                    <li>
                    <a href="/Contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <a className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
                  ExploreX-Destinations!
                </a>
              </div>
              <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/Packages">Packages</a>
                    </li>
                    <li>
                      <a href="/Contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a className="btn bg-black text-white p-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" 
              onClick={()=>document.getElementById('my_modal_3').showModal()}>
                Login
              </a> 
              <Login/>
            </div>
          </div>
        </div>
        
      </>
    </div>
  );
}

export default Navbar;
