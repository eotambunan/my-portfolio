import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/layouts/Sidebar/Sidebar'
import HomePage from "@/pages/homepage"


export default function Home() {
  return (
    <>
      <HomePage></HomePage>
    </>
  )
}
