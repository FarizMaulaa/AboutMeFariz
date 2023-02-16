import React from "react";
import Shopee from "../images/Shopee.png";
import Bioskop from "../images/Bioskop.png";
import Dasboard from "../images/Dasboard.png";
import { Zoom } from "react-reveal";
import "./All.css";

function ProjectPage() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-2xl mt-10 font-bold text-center">My Project</h1>
      <div className="pt-14 lg:flex items-center justify-center gap-8">
        <Zoom>
          <div className="card">
            <div className="header flex-wrap">
              <div cclassName="img-box"></div>
              <img src={Shopee} alt="Bri" className="w-[650px] p-4 rounded" />
            </div>
            <div className="text-center pt-1 -mt-6">
              <h1 className="flex justify-center text-xl">Shopee Clone</h1>
              <a
                href="https://shopeeclone-eta.vercel.app/"
                className="text-center text-blue-500 cursor-pointer -mt-6"
              >
                Visit project..
              </a>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="card">
            <div className="header flex-wrap">
              <div cclassName="img-box"></div>
              <img src={Bioskop} alt="Bri" className="w-[650px] p-4 rounded" />
            </div>
            <div className="text-center pt-1 -mt-6">
              <h1 className="flex justify-center text-xl">Bioskop21</h1>
              <a
                href="https://portofoliov2.vercel.app/"
                className="text-center text-blue-500 cursor-pointer -mt-6"
              >
                Visit project..
              </a>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="card">
            <div className="header flex-wrap">
              <div cclassName="img-box"></div>
              <img src={Dasboard} alt="Bri" className="w-[650px] p-4 rounded" />
            </div>
            <div className="text-center pt-1 -mt-6">
              <h1 className="flex justify-center text-xl">Dasboard</h1>
              <a
                href="https://teskodingahm.vercel.app/"
                className="text-center text-blue-500 cursor-pointer -mt-6"
              >
                Visit project..
              </a>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default ProjectPage;
