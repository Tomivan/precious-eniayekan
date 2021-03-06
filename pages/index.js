import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav';
import styles from '../styles/Home.module.css'
import HomeImage from '../assets/images/home.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Precious Eniayekan  </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className={styles.main}>
          <Nav />
          <Image src={HomeImage} alt='' height={1200} width={1400} className={styles.image}/>
          <div className={styles.welcome}>
              <p className={styles.p}>Hi, my name is Precious Eniayekan and you are welcome to my website! As an eccentric woman, 
                I have many interests and wear many hats professionally. I am a Brand marketing and 
                communications expert (Yes, I&apos;m a tech sis), a public speaker and Humanitarian. 
                A passionate social entrepreneur, I also run Revney Fashion house, and Alpha Treasures gift 
                store. Each aspect of me is broken down in detail and explained to make you understand me better.</p>
              <p className={styles.p}>All work and no play makes Precious a sad and grumpy woman, so there&apos;s a link to my blog 
                to see what I do for fun.</p>
              <p className={styles.p}>It&apos;s great to have you on my website!</p>
          </div>
      </main>
    </div>
  )
}
