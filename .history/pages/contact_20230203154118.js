import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Contact Us"}</title>
        <meta name="author" content={"MDIA 2109"}/>
        <meta property='og:title' content={"Assignment #1 - Contact Us Page"}/>
        <meta property='og:description' content={"BCIT Digital Design and Development Diploma"}/>
        <link rel="icon" href={"/favicon.png"} />
      </Head>
      <main className={styles.main}>
        <div>
            <h1></h1>
       </div>
       <div>
            <p></p>
        </div>
        <div>
            <form></form>
        </div>
        <form>
            <fieldset></fieldset>
        </form>
        <form>
            <fieldset>
                <table>
                    <thead></thead>
                    <thead></thead>
                </table>
            </fieldset>
        </form>

        <form>
            <fieldset>
                <table>
                    <thead>
                        <tr></tr>
                        <tr></tr>
                    </thead>
                </table>
            </fieldset>
        </form>
        <input type={firstName}></input>
        <input type={lastName}></input>
        <input type={email}></input>    
      </main>
      <a>
        <span>
            <img></img>
        </span>
      </a>
    </>
  )
}
