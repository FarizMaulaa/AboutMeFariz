import React from "react";
import Text from "../component/Text";
import ProjectPage from "./ProjectPage";
import "animate.css";
import "./All.css";
import Lotties from "./Lotties";
import NavBs from "./NavBs";
import Footerr from "./Footerr";
import Skill from "./Skill";

function Salutation() {
  return (
    <div>
      <div className="h-screen w-screen setBgbc">
        <div className="">
          <NavBs />
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="avatar">
              <div className="">
                <Lotties />
              </div>
            </div>
            <div>
              <h1 className="text-5xl text-white font-bold animate__bounceInUp">
                Hello, I'm Fariz Maulana
              </h1>
              <div>
                <Text />
              </div>
              <p className=" text-xl py-6 text-white">
                Fariz is Front-End Developer. He use Reactjs and Tailwind to
                create projects and he is now study in Pelita Bangsa University
                (Teknik Informatika).
              </p>
              <a
                href="https://wa.me/+62895360861452"
                target="_blank"
                rel="noreferrer"
                className="bg-[#353535] text-white p-3 rounded cursor-pointer "
              >
                Let's Connect ➜
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skill />
      <ProjectPage />
      <Footerr />
    </div>
  );
}

export default Salutation;
