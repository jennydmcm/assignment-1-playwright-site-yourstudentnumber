import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/About.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <header>
          <div className={styles.about}>
            <div className={styles.header}>
              <hr className={styles.lines}></hr>
              <h1 className={styles.aboutTitle}>About Us</h1>
              <hr className={styles.lines}></hr>
            </div>

        <div className={styles.body}
            <p className={styles.mainText}>
              We are proud to deliver an education that goes beyond books and
              classrooms.
            </p>
            <p className={styles.mainText}>
              Our students gain the technical skills, real-world experience, and
              problem solving ability <br></br>
              needed to embrace complexity and lead innovation in a rapidly
              changing workplace.
            </p>
            <p className={styles.mainText}>
              Through close collaboration with industry, our network of alumni
              and partners continue to <br></br>
              achieve global success
            </p>
          </div>
          <div className={styles.infosesh}>
            <h2>Information Sessions</h2>
            <p className={styles.mainText}>
              Information Sessions are a simple way to figure out the next step
              along your career path. <br></br>
              Learn more about the programs that interests you.
            </p>
            <h3 className={styles.bigInfo}>Big Info</h3>
            <p className={styles.mainText}>
              Big info is the largest program expo and information session at
              BCIT. It's your chance to find<br></br>
              out about all our programs - from business, computing, and health
              to engineering, trades,<br></br>
              and applied sciences.
            </p>
            <p className={styles.mainText}>
              If you missed our fall event the next Big Info is scheduled to
              return on February 15, 2023.
            </p>
          </div>

          <div className={styles.tours}>
            <h2>Campus Tours</h2>
            <p className={styles.mainText}>
              Tours run weekdays September to May, on our Burnaby campus. See
              BCIT in person and get a<br></br>
              taste of campus life.
            </p>
          </div>
          <div className={styles.dept}>
            <h1>Departments</h1>
          </div>
        </header>
        <a>
          <span>
            <img href="/upwardArrow.png"></img>
            <img href="downwardArrow.png"></img>
          </span>
        </a>
      </main>
    </>
  );
}
