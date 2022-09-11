import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header, Main, Footer } from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Craftsmen website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
