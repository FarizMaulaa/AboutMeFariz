import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import "./All.css";

export default function NavBar() {
  return (
    <nav className="w-full glass shadow m-6 fixed z-10">
      <div className="justify-between px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl flex font-bold text-white p-3 ">
                Färizz.
              </h2>
            </a>
          </div>
        </div>
        <div>
          <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <Link
              to="/"
              className="text-white hover:text-blue-600"
              href="javascript:void(0)"
            >
              Home
            </Link>
            <Link
              to="/ProjectPage"
              className="text-white hover:text-blue-600"
              href="javascript:void(0)"
            >
              Project
            </Link>
            <Link
              to="/"
              className="text-white hover:text-blue-600"
              href="javascript:void(0)"
            >
              Contact
            </Link>
            <Link
              to=""
              className="text-white hover:text-blue-600"
              href="javascript:void(0)"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
