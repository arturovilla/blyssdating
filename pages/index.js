import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import Mission from '@/components/Mission'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Navbar/>

      <div className='pt-36'>
        <Landing/>
      </div>

      <div className='pt-36'>
        <Mission/>
      </div>

    </div>
  )
}
