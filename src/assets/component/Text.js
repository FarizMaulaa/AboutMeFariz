import React from "react";
import Typewriter from "typewriter-effect";
import "./All.css";

function Text() {
  return (
    <div className="text-4xl text-[#353535] font-bold m-2">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Front-end Developer..")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Front-end Developer..")
            .start();
        }}
      />
    </div>
  );
}
export default Text;
