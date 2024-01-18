import React from 'react'
import Double from '../assets/double.png'
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'

export default function Card() {
  return (
    <div className="w-full text-white bg-white py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
            <div className=" grid md:grid-cols-3 p-4 my-4 gap-8 ">
                <div className="card-1 text-black  flex  flex-col items-center rounded-lg hover:scale-105 duration-300 shadow-xl">
                    <img className="w-[70px] mt-[-32px]" src={Single} alt="" />
                    <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
                     <h1 className="text-4xl font-bold">$149</h1>
                     <h2 className="py-2 border-b mx-8">500 GB Storage</h2>
                     <h2 className="py-2 border-b mx-8" >1 User Allowed</h2>
                     <h2 className="py-2 border-b mx-8">Send up to 2GB</h2>
                     <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>

                </div>
                <div className="card-1 text-black  bg-gray-100 flex  flex-col items-center my-8 md:my-0 rounded-lg hover:scale-105 duration-300 shadow-xl">
                    <img className="w-[70px] mt-[-32px]" src={Double} alt="" />
                    <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
                     <h1 className="text-4xl font-bold">$149</h1>
                     <h2 className="py-2 border-b mx-8">500 GB Storage</h2>
                     <h2 className="py-2 border-b mx-8" >1 User Allowed</h2>
                     <h2 className="py-2 border-b mx-8">Send up to 2GB</h2>
                     <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>

                </div>
                <div className="card-1 text-black flex  flex-col items-center rounded-lg hover:scale-105 duration-300 shadow-xl">
                    <img className="w-[70px] mt-[-32px]" src={Triple} alt="" />
                    <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
                     <h1 className="text-4xl font-bold">$149</h1>
                     <h2 className="py-2 border-b mx-8">500 GB Storage</h2>
                     <h2 className="py-2 border-b mx-8" >1 User Allowed</h2>
                     <h2 className="py-2 border-b mx-8">Send up to 2GB</h2>
                     <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>

                </div>
            </div>
        </div>
    </div>
  )
}
