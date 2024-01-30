import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className='bg-[#a496962b] w-full py-[50px]'>
       <div className='max-w-[1240px] mx-auto text-center font-bold my-[100px]'>
            <div className='text-xl text-[#123932]  md:text-3xl md:p-[24px] '>
                Learn With US
            </div>
            <div className='text-[#57411c] md:text-[80px] text-3xl md:p-[24px]  '>
                Grow With US
            </div>
            <div className='text-[#1a234e] md:text-[50px] text-[20px] md:p-[24px]  '>
                Learn <ReactTyped strings={["Mern Stack Development", 'AWS Cloud Computing', 'System Design']} typeSpeed={100} loop={true} backSpeed={50} />
            </div>
            <button className='bg-[#123932] text-[#D3D3D3] text-xl mt-2 md:w-[200px] p-3 rounded hover:text-black hover:bg-gray-500'>Get Started</button>
       </div>
    </div>
  )
}

export default Banner
