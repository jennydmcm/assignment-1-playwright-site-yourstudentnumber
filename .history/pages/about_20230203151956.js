import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{'About Us'}</title>
        <meta name="author" content={'MDIA 2109'} />
        <meta name="og:title" content={'Assignment #1 - About Us Page'}/>
        <meta name="og:description" content={'BCIT Digital Design and Development Diploma'} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <header>
          <div>
            <h1></h1>
            <h1></h1>
          </div>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <h2></h2>
            <h2></h2>
          </div>
          <div>
            <h3></h3>
          </div>
    </header>
      </main>

      <a>
        <span>
          <img></img>
          <img></img>
        </span>
      </a>
    

    </>
  )
}
