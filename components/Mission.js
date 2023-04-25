import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Mvpplaceholder from "../public/placeholder.png"
import Interactmvp from "../public/interactivemvp.png"
import Blyssshield from "../public/BlyssShield.png"


function Mission() {
  return (
    <div className=''>
        <h2 className='text-center font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F85148] to-[#FFA15C]'>#DatesMadeEffortless</h2>
        <div className=' flex justify-center'>
            <p className=' mx-6 max-w-xl text-center text-lg text-[#39698E]'>By creating an inclusive environment for its users, Blyss encourages engagement with local and popular vendors to meet a special someone while doing what you love. Blyss provides the most authentic dating experience because every meaningful relationship starts with a first date!</p>
        </div>

        <div className=' flex justify-center px-9 mt-10'>
            <Image 
            src={Mvpplaceholder}
            alt="image of the blyss dating logo"
            className="cursor-pointer"
            width="auto"
            height="550"/>
            <div className=' flex justify-center'>
                <div className=" flex flex-col items-center">
                    <div className="flex justify-center w-64 md:w-80">
                        <Image 
                        src={Interactmvp}
                        alt="image of the blyss dating app"
                        className="cursor-pointer"
                        width="300"
                        height="auto"/>
                    </div>
                    <p className='mt-6 text-[#39698E] text-center text-lg md:text-2xl md:w-64'>Chat with your matches and get ready to date!</p>
                    <div className="flex justify-center mt-32 md:mt-20">
                        <Image 
                        src={Blyssshield}
                        alt="image of the blyss dating app"
                        className="cursor-pointer"
                        width="90"
                        height="auto"/>
                    </div>
                    <p className=' mt-6 text-[#39698E] text-center text-lg md:text-2xl md:w-64'>Protected by our unparalleled safety features!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission