
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
// import SiTiktok from 'react-icons/si'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () =>{
    setMenuOpen(!menuOpen)
  }
  return (

    <nav className='fixed w-full h-24 '>
        <div className='flex justify-end items-center h-full w-full px-4 2xl:px-16'>
          <div className='hidden sm:flex'>
            <ul className='flex'>
              <Link href="#">
                <li className='ml-10 hover:border-b text-lg py-1'>Mission</li>
              </Link>
              <Link href="#">
                <li className='ml-10 hover:border-b text-lg py-1'>Product</li>
              </Link>
              <Link href="#">
                <li className='ml-10 hover:border-b text-lg py-1'>Values</li>
              </Link>
              <Link href="#">
                <li className='ml-10 hover:border-b text-lg py-1'>Pre-Register</li>
              </Link>
              <Link href="#">
                <li className='ml-10 hover:border-b text-lg py-1'>Contact Us</li>
              </Link>
              <Link href="#">
                <li className='ml-10 hover:border-b text-lg bg-[#FFA15C] text-white px-5 py-1 rounded-2xl'>Donate</li>
              </Link>
            </ul>
          </div>
          {/* mobile menu icon*/}
          <div className='sm:hidden flex justify-between items-center h-full w-full'>
            <Link href="#">
              <p className=' text-lg bg-[#FFA15C] text-white px-5 py-1 rounded-2xl'>Donate</p>
            </Link>
            <div onClick={handleNav} className='sm:hidden pl-20 cursor-pointer'> 
              <AiOutlineMenu size={25}/>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-200 p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
          {/* inside mobile menu */}
          <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'>
              <AiOutlineClose size={20}/>
            </div>
          </div>
          <div className='flex-col py-4'>
            <ul>
              <Link href="#">
                <li
                onClick={() => setMenuOpen(false)} 
                className='ml-10 hover:border-b text-lg'>Mission</li>
              </Link>
              <Link href="#">
                <li
                onClick={() => setMenuOpen(false)} 
                className='ml-10 hover:border-b text-lg'>Product</li>
              </Link>
              <Link href="#">
                <li
                onClick={() => setMenuOpen(false)} 
                className='ml-10 hover:border-b text-lg'>Values</li>
              </Link>
              <Link href="#">
                <li
                onClick={() => setMenuOpen(false)} 
                className='ml-10 hover:border-b text-lg'>Pre-Register</li>
              </Link>
              <Link href="#">
                <li
                onClick={() => setMenuOpen(false)} 
                className='ml-10 hover:border-b text-lg'>Contact Us</li>
              </Link>
            </ul>
          </div>
          {/* socials, legal, and other links inside the mobile menu */}
          <div className='flex flex-row justify-around pt-10 items-center'>
            <AiOutlineFacebook size={30} className='cursor-pointer'/>
            <AiOutlineInstagram size={30} className='cursor-pointer'/>
            <AiOutlineTwitter size={30} className='cursor-pointer'/>
            {/* <SiTiktok size={30} className='cursor-pointer'/> */}
          </div>
        </div>
    </nav>

  )
}

export default Navbar