import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <h1>{'An investment in knowledge pays the best interest.'}</h1>
        <p>{'Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.'}</p>
        <button>More About Us</button>
        <button>Contact Us</button>
        <a>
          <button></button>
          <button></button>
         </a>
         <a>
          <span>
            <img></img>
          </span>
        </a>
      </main>
    </>
  )
}
