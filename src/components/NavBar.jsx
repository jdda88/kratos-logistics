import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-center bg-[#0f172a] text-white ">
      <nav className="w-3/5">
        <div className="flex flex-row justify-between items-center m-5 ">
          <div className="flex flex-row items-center space-x-2 flex-grow">
            <Link to="/">
              <img
                className="w-10 h-10 rounded"
                src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720827294/Kratos%20Logistics/kratos-logo-no-text_twzbkt.png"
                alt="Kratos-logistics-logo"
              />
            </Link>
            <p>Kratos logistics</p>
          </div>
          <div className="flex justify-center items-center space-x-5 flex-grow">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>Our Team</p>
            </Link>
            <Link></Link>

            <p>Contact</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
