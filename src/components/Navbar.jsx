import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {
    const [nav, setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className=" hidden md:flex gap-2 items-center ">
            <li className="">Home</li>
            <li className="">Account </li>
            <li className="">About</li>
            <button className="px-3 py-1  bg-white  text-black rounded-sm w-28">Get Started</button>
            
        </ul>
        <div className="block md:hidden overflow-hidden " onClick={handleNav}>
            {!nav ? <AiOutlineClose /> : <AiOutlineMenu  size={20} /> }
            
        </div>
        <div className={!nav ? "fixed left-0 bg-black top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out  duration-500 md:hidden" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
            <ul className=" p-4 uppercase  ">
            <li className="p-4 border-b border-b-gray-600">Home</li>
            <li className="p-4 border-b border-b-gray-600">Company</li>
            <li className="p-4 border-b border-b-gray-600">Resources</li>
            <li className="p-4 border-b border-b-gray-600">ABOUT</li>
            <li className="p-4">CONTACT</li>
            </ul>
        </div>
    </div>
  )
}
