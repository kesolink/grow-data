// import React from 'react'
import Laptop from "../assets/laptop.jpg"

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-14">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img src={Laptop} alt="" />
        <div className="md:pt-32">
        <p className='text-[#00df9a] font-bold  md:my-auto'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className="flex justify-center items-center md:items-start md:justify-start">
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6  md:left py-3'>Get Started</button>
          </div>
        </div>
        </div>


    </div>
  )
}
