import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
    const [toggle,setToggle] = useState(false);
  return (
    <div className="bg-gray-500 p-4">
      <div className="max-w-[1240px] max-auto flex justify-between items-center py-[12px]">
        <div className="md:text-5xl font-bold font-sans text-white">AKSoft Tech</div>
        {
            toggle ? <AiOutlineClose onClick={()=>{setToggle(!toggle)}} className='text-white text-2xl md:hidden block' /> : 
            <AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className="text-white text-2xl md:hidden block" />
        }
        
        
        <ul className="hidden md:flex gap-10 text-white">
          <li className="text-2xl hover:text-black hover:cursor-pointer">Home</li>
          <li className="text-2xl  hover:text-black hover:cursor-pointer" >Products</li>
          <li className="text-2xl  hover:text-black hover:cursor-pointer">Resources</li>
          <li className="text-2xl  hover:text-black hover:cursor-pointer">About</li>
          <li className="text-2xl  hover:text-black hover:cursor-pointer">Contacts</li>
        </ul>
        {/* Responsive Menus */}

        <ul className={`duration-300 md:hidden w-full h-screen  bg-black fixed  top-[79px] text-white
           
              ${toggle ? 'left-[0]' : 'left-[-100%]'}  
        `}>
          <li className="p-5">Home</li>
          <li className="p-5">Products</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contacts</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
