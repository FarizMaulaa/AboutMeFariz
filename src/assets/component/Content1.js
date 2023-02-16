import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Skill from "./Skill";
import Text from "./Text";

function Content() {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Hello, I'm Fariz Maulana</h1>
        <Text />
        <div className="flex">
          <div className="bg-[#0099cc] text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
            <a href="https://web.facebook.com/farid.matialoz" target="_blank">
              <FaFacebookF />
            </a>
          </div>

          <div className="bg-[#121212]  text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
            <a href="https://github.com/FarizMaulaa" target="_blank">
              <FaGithub />{" "}
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
        <h3 className="text-xl">About :</h3>
        <p>
          Fariz is Front-End Developer. He use Reactjs and Tailwind to create
          projects and he is now study in Pelita Bangsa University (Teknik
          Informatika).
        </p>
        <Skill />
      </div>
    </>
  );
}

export default Content;
