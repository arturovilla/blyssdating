import Image from "next/image"
import Couple from '../public/couple.webp'
import V1 from '../public/v1.webp'
import V2 from '../public/v2.webp'
import V3 from '../public/v3.webp'
import V4 from '../public/v4.webp'
import V5 from '../public/v5.webp'

function Values() {
  return (
    <div className="flex flex-col items-center">
        <div className="mb-10 w-[90%] bg-[#39698E] rounded-md shadow-xl flex flex-col items-center">
            <h1 className="text-white font-bold text-5xl mt-8 mb-7">Core Values</h1>
            <Image
            src={Couple}
            width='auto'
            height='550'
            alt=""/>

            <div className="flex w-full justify-between px-2 pt-8 pb-8">
                <div className="text-center w-1/4">
                    <h1 className="text-[#FFA15C] text-lg font-bold">Individuality</h1>
                    <p className="text-white text-sm">Blyss acknowledges your interests, preferences, schedule, and concerns celebrating individuality among its users!​</p>
                </div>
                <div className="text-center w-1/4">
                    <h1 className="text-[#FFA15C] text-lg font-bold">Safety</h1>
                    <p className="text-white text-sm">Blyss implements key safety features that ensure confidentiality, protection, and honesty because your safety is our priority.​</p>
                </div>
                <div className="text-center w-1/4">
                    <h1 className="text-[#FFA15C] text-lg font-bold">Dependability</h1>
                    <p className="text-white text-sm">Blyss balances the importance of compatibility and companionship. You can depend on us for the best dating experience.</p>
                </div>
                <div className="text-center w-1/4">
                    <h1 className="text-[#FFA15C] text-lg font-bold">Positivity</h1>
                    <p className="text-white text-sm">Blyss offers the best venues and most compatible peers for you to choose from, fostering a positive dating experience.</p>
                </div>
            </div>

        </div>
        {/* this is where the venues are going to go  */}
        <div className=" flex w-full justify-center mt-10">
            <div className=" flex flex-col items-center ">
                <h1 className="text-5xl font-semibold text-[#FFA15C] mb-4">Venues</h1>
                <p className="mt5 text-lg text-center px-2 ">With interactive, active, and dining venues, Blyss partners with prime locations in your city providing the best date experience.</p>
                <div className="bg-[#E3E3E3] flex w-[95%] items-center justify-between px-2 py-3 rounded-md shadow-lg mt-12">
                    <div>
                        <Image
                        src={V1}
                        alt=""/>
                    </div>
                    <div>
                        <Image
                        src={V2}
                        alt=""/>
                    </div>
                    <div>
                        <Image
                        src={V3}
                        alt=""/>
                    </div>
                    <div>
                        <Image
                        src={V4}
                        alt=""/>
                    </div>
                    <div>
                        <Image
                        src={V5}
                        alt=""/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Values