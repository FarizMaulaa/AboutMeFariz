import React from "react";
import { FaGithub } from "react-icons/fa";
import "./All.css";

function Navbar() {
  return (
    <div>
      <div className="setBgbc">
        <div className="flex justify-between">
          <div className="flex justify-center items-center p-4">
            <p className="text-2xl font-bold text-white ml-3">Farizzz..</p>
          </div>
          <div className="flex justify-center items-center p-4">
            <p className="text-lg font-bold text-white">
              <FaGithub />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
