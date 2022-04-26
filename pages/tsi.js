import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import styles from '../styles/tsi.module.css';
import TSIImage from '../assets/images/tsi.jpg';

const Tsi = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Precious Eniayekan  </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className={styles.main}>
          <Nav />
          <div className={styles.image}>
              <Image src={TSIImage} alt='' height={500} width={500} className={styles.image}/>
          </div>  
          <div className={styles.welcome}>
          </div>
      </main>
    </div>
  )
}

export default Tsi;