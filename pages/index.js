import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import Mission from '@/components/Mission'
import Product from '@/components/Product'
import Values from '@/components/Values'
import Prereg from '@/components/Prereg'
import Founders from '@/components/Founders'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      {/* <Navbar/> */}

      <div className='pt-36'>
        <Landing/>
      </div>

      <div className='pt-36'>
        <Mission/>
      </div>

      <div className='pt-36'>
        <Product/>
      </div>

      <div className='pt-36'>
        <Values/>
      </div>

      <div className='pt-36'>
        <Prereg/>
      </div>

      <div className='pt-36'>
        <Founders/>
      </div>

      <div className='pt-36'>
        <Footer/>
      </div>

    </div>
  )
}
