import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Mvpplaceholder from "../public/placeholder.png"
import Interactmvp from "../public/interactivemvp.png"
import Blyssshield from "../public/BlyssShield.png"


function Mission() {
  return (
    <div className='bg-purple-200'>
        <h2 className='text-center font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F85148] to-[#FFA15C]'>#DatesMadeEffortless</h2>
        <div className=' flex justify-center'>
            <p className=' mx-6 max-w-xl text-center text-lg text-[#39698E]'>By creating an inclusive environment for its users, Blyss encourages engagement with local and popular vendors to meet a special someone while doing what you love. Blyss provides the most authentic dating experience because every meaningful relationship starts with a first date!</p>
        </div>

        <div className='bg-red-200 flex justify-center px-9'>
            <Image 
            src={Mvpplaceholder}
            alt="image of the blyss dating logo"
            className="cursor-pointer"
            width="375"
            height="auto"/>
            <div className='bg-green-100'>
                <div className=" ">
                    <div className="">
                        <Image 
                        src={Interactmvp}
                        alt="image of the blyss dating app"
                        className="cursor-pointer"
                        width="375"
                        height="auto"/>
                    </div>
                    <div className="">
                        <Image 
                        src={Blyssshield}
                        alt="image of the blyss dating app"
                        className="cursor-pointer"
                        width="375"
                        height="auto"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission