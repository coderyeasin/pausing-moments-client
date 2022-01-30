import React from "react";
import useFirebase from "../../../Hooks/useFirebase";
import logo from "../../../images/logo_pause.png";
import { FaRegUserCircle } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { users, usersLogout } = useFirebase();
  return (
    <div className="md:flex md:justify-around md:items-center md:mt-3">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" className="mx-auto" />
      </div>
      <nav>
        <ul className="flex md:items-center">
          <li className="px-3 xs:text-xs md:text-2xl">
            <Link to="/home">
              <a href="#">Home</a>
            </Link>
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
        </ul>
      </nav>
      <div className="md:flex justify-center items-center">
        <Link to="/dashboard">
          <li className="list-none text-xl">
            {(users?.uid && users?.displayName) || users?.email}
          </li>
        </Link>
        <li className="list-none mx-3 text-2xl">
          {users?.uid ? (
            <button
              onClick={usersLogout}
              className="rounded-lg cursor-pointer outline-none border-b-2 py-2 px-4 bg-teal-500 text-xl text-white transform duration-500 hover:scale-95"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <FaRegUserCircle className="text-4xl" />
            </Link>
          )}
        </li>
      </div>
    </div>
  );
};

export default Header;
