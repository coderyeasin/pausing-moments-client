import React from "react";
import logo from "../../../images/logo_pause.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="md:flex md:justify-around md:items-center md:mt-3">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" className="mx-auto" />
      </div>
      <nav>
        <ul className="flex md:items-center">
          <li className="px-3 xs:text-xs md:text-2xl">
            <a href="#">Home</a>
          </li>
          <li className="px-3 xs:text-xs md:text-2xl">
            <a href="#">Features</a>
          </li>
          <li className="px-3 xs:text-xs md:text-2xl">
            <a href="#">Blogs</a>
          </li>
          <li className="px-3 xs:text-xs md:text-2xl">
            <a href="#">Destination</a>
          </li>
          <li className="px-3 xs:text-xs md:text-2xl">
            <a href="#">Guide</a>
          </li>
          {/* <li className="px-3 xs:text-xs md:text-2xl">
            <a href="#">Posts</a>
          </li> */}
        </ul>
      </nav>
      <button className="bg-emerald-700 radius-5px rounded-lg p-3 text-xl text-white ">
        Sign UP!
      </button>
    </div>
  );
};

export default Header;
