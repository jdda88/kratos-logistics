import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0f172a] text-white relative pt-6">
      <nav className="flex justify-between items-center w-full p-5 md:w-3/5 mx-auto relative z-10">
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-5 items-center mt-4 md:mt-0`}
        >
          <Link to="/" className="mt-2 md:mt-0">
            <p className="text-xl">Home</p>
          </Link>
          <Link to="/about" className="mt-2 md:mt-0">
            <p className="text-xl">About</p>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Link to= "/">
            <img
              className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-customBlue pointer-events-auto"
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720827294/Kratos%20Logistics/kratos-logo-no-text_twzbkt.png"
              alt="Kratos-logistics-logo"
            /></Link>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-5 items-center mt-4 md:mt-0`}
        >
          <Link to="/contact" className="mt-2 md:mt-0">
            <p className="text-xl">Contact</p>
          </Link>
          <Link to="/apply" className="mt-2 md:mt-0">
            <button className="w-24 p-1 bg-orange-600 hover:bg-orange-700 rounded-md text-xl">
              Apply
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
