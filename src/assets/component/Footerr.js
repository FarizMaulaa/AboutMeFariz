import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footerr() {
  return (
    <div className="bg-red-500">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="text-center text-xl text-bold">
          <p>Follow me </p>
        </div>
        <div>
          <div className="flex">
            <div className="bg-[#0099cc] text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
              <a href="https://web.facebook.com/farid.matialoz" target="_blank">
                <FaFacebookF />
              </a>
            </div>

            <div className="bg-[#121212]  text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
              <a href="https://github.com/FarizMaulaa" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div className="bg-[#dc2743] text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
              <a href="https://intagram.com" target="_blank">
                <BsInstagram />
              </a>
            </div>
            <div className="bg-[#0e76a8] text-white w-[40px] h-[40px] text-[23px] rounded flex justify-center items-center mr-2">
              <a
                href="https://www.linkedin.com/in/fariz-maulana-39988022b/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - FarizMaulaa </p>
        </div>
      </footer>
    </div>
  );
}

export default Footerr;
