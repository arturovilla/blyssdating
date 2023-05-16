import Image from "next/image"
import Mvp1 from '../public/datesdby_1.webp'
import Mvp2 from '../public/datesdby_2.webp'
import Mvp3 from '../public/datesdby_3.png'

function Product() {
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-[#B2B3EB]'>Our Process</h1>

          {/* this is where the pictures will go */}
          <div className="flex mt-8">

            <div className=" flex flex-col items-center">
              <Image
              src={Mvp1}
              width='auto'
              height='550'
              alt=""
              />
              <h2 className="text-[#B2B3EB] text-2xl font-medium mt-2">Choose Your Date Type!</h2>
              <p className="w-60 text-center">Choose between Interactive, Active, and Dining dates! Be adventurous with your match on an active date, enjoy a "hands on" date without breaking a sweat on an interactive date, or bond over a nice meal on a dining date!</p>
            </div>
            <div className=" flex flex-col items-center ">
              <Image
              src={Mvp2}
              width='auto'
              height='550'
              alt=""
              />
              <h2 className="text-[#B2B3EB] text-2xl font-medium mt-2">Meet Your Matches!</h2>
              <p className="w-60 text-center">Match with someone that chose the same date type as you! Chat until you&#39;re #readytodate</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
              src={Mvp3}
              width='auto'
              height='550'
              alt=""
              />
              <h2 className="text-[#B2B3EB] text-2xl font-medium mt-2">Book Your Date!</h2>
              <p className="w-60 text-center">Once you&#39;re ready to date, agree on the time and venue! After the date is booked with an agreed-upon time and venue, the chat function re-opens and you can get ready for your tailored date!</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product