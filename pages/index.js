import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header, Navigation, Footer , Firstpage} from '../components'

export default function Home() {
  return (
    <div >
      <Head>

        <meta name="description" content="Craftsmen website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navigation/>
      <Firstpage/>
      <Footer/>
    </div>
  )
}
