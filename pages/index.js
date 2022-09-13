import Head from 'next/head'
import { Header, Navigation, Main, Footer } from '../components'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Crafts</title>
        <meta name="description" content="Craftsmen website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navigation/>
      &nbsp; &nbsp;
      <Main/>
      <Footer/>
    </div>
  )
}
