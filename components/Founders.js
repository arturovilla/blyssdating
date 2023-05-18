import Image from "next/image"
import Hs1 from '../public/hs1.webp'
import Hs2 from '../public/hs2.webp'
import Hs3 from '../public/hs3.webp'
import Hs4 from '../public/hs4.webp'
import Hs5 from '../public/hs5.webp'
import Hs6 from '../public/hs6.webp'

function Founders() {
  return (
    <div >
        <div className=" flex justify-center flex-col  pb-8">
            <h1 className="text-5xl font-semibold text-[#39698E] text-center">Our Creative Founders</h1>
            <div className="flex justify-center ">
                <div className="px-6">
                    <Image
                    src={Hs1}
                    alt=""/>
                    <h2 className="text-center text-3xl font-medium text-[#39698E] pt-3">Stanford Maison</h2>
                    <p className="text-[#3D9BE9] text-center ">Co-Founder</p>
                </div>
                <div className="px-6">
                    <Image
                    src={Hs2}
                    alt=""/>
                    <h2 className="text-center text-3xl font-medium text-[#39698E] pt-3">Hunter Hanley</h2>
                    <p className="text-[#3D9BE9] text-center ">Co-Founder</p>
                </div>
            </div>
            <h1 className="text-center font-semibold text-[#39698E] text-5xl pt-10 pb-4">Our Executive Team</h1>
            <div className="flex justify-center ">
                <div className="px-6">
                    <Image
                    src={Hs3}
                    alt=""/>
                    <h2 className="text-center text-3xl font-medium text-[#39698E] pt-3">Jaime Walton</h2>
                    <p className="text-[#3D9BE9] text-center ">Chief of Staff</p>
                </div>
                <div className="px-6">
                    <Image
                    src={Hs4}
                    alt=""/>
                    <h2 className="text-center text-3xl font-medium text-[#39698E] pt-3">Anjali Bobba</h2>
                    <p className="text-[#3D9BE9] text-center ">Chief Marketing Officer</p>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="px-6">
                    <Image
                    src={Hs5}
                    alt=""/>
                    <h2 className="text-center text-3xl font-medium text-[#39698E] pt-3">Myles Nobles</h2>
                    <p className="text-[#3D9BE9] text-center ">Chief Technology Officer</p>
                </div>
                <div className="px-6">
                    <Image
                    src={Hs6}
                    alt=""/>
                    <h2 className="text-center text-3xl font-medium text-[#39698E] pt-3">Alana Stull</h2>
                    <p className="text-[#3D9BE9] text-center ">Chief of Design</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founders