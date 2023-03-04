import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Card from '@/Components/Widget/Card'
import CardMobile from '@/Components/Widget/CardMobile'
import { useEffect, useState } from 'react';


export default function Home() {

  const [widthLayer, setWidthLayer] = useState(0)

  let resizeWindow = () => {setWidthLayer(window.innerWidth)}

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

  }, [widthLayer])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Product Preview Card Component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat"
          rel="stylesheet"
        />
      </Head>
      <main className=' w-full h-screen flex justify-center items-center bg-[#f2ebe3]'>
        {widthLayer <675 ? (<CardMobile/>) : (<Card/>) }
      </main>
    </>
  )
}
