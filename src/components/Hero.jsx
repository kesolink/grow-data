import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className="max-w-[8oopx] mt-[-96px] h-screen mx-auto flex flex-col justify-center items-center text-white">
        <p className="text-[#00df9a] font-bold  p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
        <div className=" flex justify-center items-center gap-4 py-4">
            <p className=" md:text-5xl sm:text-6xl text-xl font-bold pl-4">fast, flexible financing for </p>
            <Typed className="md:text-5xl sm:text-6xl text-xl md:pl-4 font-bold" strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl text-center font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB BTC, & SASS platforms.</p>
        <button className=" bg-[#00df9a] mx-auto rounded-md w-[200px] font-medium my-6 py-3"> Get Started</button>
    </div>
  )
}

    // "react-typed": "^1.2.0"

