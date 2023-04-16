import Link from "next/link"
import Logo from "../public/logo_t.png"
import Image from "next/image"

function Landing() {
  return (
    <div className="pt-52 w-full ">
        <div className=" flex justify-center px-9">
            <Link href="#">
                <Image 
                src={Logo}
                alt="image of the blyss dating logo"
                className="cursor-pointer"
                width="720"
                height="auto"/>
            </Link>
        </div>
        <div className="text-center flex justify-center pt-5 md:pt-10">
            <h1 className="text-[#4E91CC] text-4xl w-11/12 leading-relaxed md:text-3xl md:w-7/12">
                Bring life to your soul search with a modern spin on traditional dating!
            </h1>
        </div>
        <div className="text-center flex justify-center items-center pt-5  ">
            <Link href="#">
                <p className="text-lg bg-[#FFA15C] text-white px-5 py-1 rounded-2xl">Register</p>
            </Link>
        </div>

    </div>
  )
}

export default Landing