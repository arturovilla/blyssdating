import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTiktok, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

function Footer() {
  return (
    <div className='bg-[#E3E3E3] flex flex-col items-center justify-center'>
        <div className="pt-5 w-1/4 flex justify-between">
            <FontAwesomeIcon icon={faFacebook} size="lg"/>
            <FontAwesomeIcon icon={faInstagram} size="lg"/>
            <FontAwesomeIcon icon={faTiktok} size="lg"/>
            <FontAwesomeIcon icon={faTwitter} size="lg"/>
        </div>
        <div className="py-5 flex flex-col items-center">
            <h3 className="text-[#39698E]">Legal</h3>
            <div className="flex">
                <Link href='/' className="text-gray-500">Privacy Policy</Link>
                <p>  &bull;  </p>
                <Link href='/'className="text-gray-500">Terms of Use</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer