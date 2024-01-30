import React from "react";

function NewsLetters() {
  return (
    <div className="w-full bg-[#bbbdbd] p-4">
      <div className="mx-w-[1240px] mx-auto md:flex  justify-around py-[50px]">
        <div className="m-2 ">
          <h1 className="md:text-[40px] text-[20px] font-bold text-gray-600 ">
            Want to learn latest I.T skills?
          </h1>
          <p className="text-gray-900">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter Email"
            className=" p-3 mr-2 mb-2 text-slate-500 rounded"
          />
          <button className=" bg-black text-white p-3 rounded">
            Get Started
          </button><br></br>
          <p className="text-gray-900">
            We care about the protection of your data. Read our{' '} <br></br>
            <span className='text-black'><a href="#" className="text-[#090a2e]">Privacy Policy</a>.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetters;
