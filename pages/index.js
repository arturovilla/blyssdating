import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Navbar/>

      <div className='pt-24'>
        <Landing/>
      </div>
      

    </div>
  )
}
