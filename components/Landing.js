import Link from "next/link"
import Image from "next/image"
import Logo from "../public/logo_t.png"
import Homemvp from "../public/homesmvp.png"
import Safety from "../public/safety_callout.png"
import Datetype from "../public/date_type_callout.png"

function Landing() {
  return (
    <div className="pt-52 w-full">
        <div className=" flex justify-center px-9 ">
            <Link href="#">
                <Image 
                src={Logo}
                alt="image of the blyss dating logo"
                className="cursor-pointer"
                width="720"
                height="auto"/>
            </Link>
        </div>
        <div className="text-center flex justify-center pt-5 md:pt-10 ">
            <h1 className="text-[#4E91CC] text-4xl w-11/12 leading-relaxed md:text-3xl md:w-7/12">
                Bring life to your soul search with a modern spin on traditional dating!
            </h1>
        </div>
        <div className="text-center flex justify-center items-center pt-5 ">
            <Link href="#">
                <p className="text-lg bg-[#FFA15C] text-white px-6 py-1 rounded-2xl">Register</p>
            </Link>
        </div>
        <div className="flex justify-center  mt-64 px-0 md:pr-20  pb-5 md:pb-20 ">
            <div className=" md:pl-20  md:mr-10">
                <div className="flex justify-center px-2 ">
                    <Image 
                    src={Safety}
                    alt="image of the blyss dating app"
                    className="cursor-pointer"
                    width="375"
                    height="auto"/>
                </div>
                <p className="pl-2 md:pl-0 text-center text-md text-[#39698E] md:text-lg max-w-md ">Blyss implements key safety features that ensure confidentiality, protection, and honesty because your safety is our priority.​</p>
                <div className="flex justify-center mt-32 ">
                    <Image 
                    src={Datetype}
                    alt="image of the blyss dating app"
                    className="cursor-pointer"
                    width="375"
                    height="auto"/>
                </div>
                <p className="pl-2 md:pl-0 text-center text-md text-[#39698E] md:text-lg max-w-md ">Blyss creates the best social dating environment by utilizing proprietary algorithms powered by our 3-Date Type model.​</p>
            </div>
            <Image 
            src={Homemvp}
            alt="image of the blyss dating app"
            className="cursor-pointer"
            width="auto"
            height="550"/>
        </div>
        <div className="bg-[#39698E] flex flex-col items-center">
            <h2 className="text-center text-[#76BAED] text-5xl px-10 pt-5 md:pt-0 leading-relaxed max-w-lg">Put the date back in dating!</h2>
            <p className="text-center text-white text-md md:text-lg max-w-md pb-10 pt-2">Matchmaking is cool, but what happens after? Blyss has your answer. Enjoy exploring interactive, active, or dining venues with your compatible companion.</p>
        </div>

    </div>
  )
}

export default Landing