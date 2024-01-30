import React from "react";
import laptop from "../assets/laptop.jpg";

function Experts() {
  return (
    <div className="w-full p-2  mx-auto  md:grid grid-cols-2 bg-slate-200">
      <div className="  md:w-[80%] text-center col-span-1 ">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className=" col-span-1  flex flex-col justify-center ">
        <h1 className="text-[#2a2a81] font-bold md:text-2xl my-2">Learn From Experts</h1>
        <p className="my-2 text-justify">
          A trailblazer in the integration of technology and modern teaching
          methodologies, <span className="text-[blue]">Ak Soft Tech</span>{" "}
          ensures that students are not just keeping up with the times but are
          ahead of the curve. From interactive lessons to hands-on projects,
          they foster an environment where curiosity and creativity thrive.
        </p>
        <button className="md:w-[30%]  w-[60%] bg-black text-white hover:text-black hover:bg-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
}

export default Experts;
