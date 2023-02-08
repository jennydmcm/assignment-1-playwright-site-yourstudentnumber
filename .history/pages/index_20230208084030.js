import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Bg from 'public/background-images/backgroundMountain.jpg'
import downArrow from 'public/icons/downwardArrow.png'
import upArrow from 'public/icons/upwardArrow.png'
 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{'Home'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={'MDIA 2109'} />
        <meta property='og:title' content={'Assignment #1 - Home Page'} />
        <meta property='og:description' content={'BCIT Digital Design and Development Diploma'} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>{'An investment in knowledge pays the best interest.'}</h1>
        <p className={styles.subhead}>{'Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.'}</p>
        <button className={styles.aboutbtn} type='button' onClick={() => router.push('/about')}>More About Us</button>
        <button className={styles.contactbtn}type='button' onClick={() => router.push('/contact')}>Contact Us</button>
        <Image src={Bg} fill
        style={{
          zIndex: -1
        }}
      /> 
        <a>
          
         </a>
         <a>
          <span>
           <button type='button' src={upArrow}></button>
          <button type='button' src={downArrow}'></button>
          </span>
        </a>
      </main>
    </>
  )
}
