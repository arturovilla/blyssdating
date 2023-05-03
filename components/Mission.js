import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Mvpplaceholder from "../public/placeholder.png"
import Interactmvp from "../public/interactivemvp.png"
import Blyssshield from "../public/blyssShield.png"
import Dates1 from "../public/datesdby_1.webp"
import Dates2 from "../public/datesdby_2.webp"
import Couplel from "../public/couple.webp"


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
        <div className=' flex justify-center'>
            <div className='bg-[#B2B3EB] w-[95%] md:w-[75%] mt-36 mb-20 rounded-lg py-5'>
                <h1 className='text-center font-bold text-5xl md:text-6xl text-white'>Dates Designed by You!</h1>
                <div className=' flex flex-col items-center'>
                    <div className="flex justify-center w-80 md:w-80  relative pt-28">
                        <Image 
                        src={Dates1}
                        alt="image of the blyss dating app"
                        className="cursor-pointer -rotate-12 z-0 absolute bottom-0 right-16"
                        width="300"
                        height="auto"/>
                        <Image 
                        src={Dates2}
                        alt="image of the blyss dating app"
                        className="cursor-pointer rotate-12 z-10 relative left-16"
                        width="300"
                        height="auto"/>
                    </div>
                    <p className='text-center text-white md:text-xl w-[30rem] pt-10 '>View Blyss&apos;s in-app process that demonstrates how we facilitate your perfect date with an in-app experience unparalleled by other dating apps.</p>
                    <Link href="#">
                        <p className='text-center hover:border-b text-lg bg-white text-[#B2B3EB] px-5 py-1 mt-5 rounded-2xl'>Donate</p>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Mission