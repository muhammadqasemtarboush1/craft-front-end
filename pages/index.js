import Head from 'next/head'
import { Header, Navigation, Main, Footer } from '../components'


export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Crafts</title>
        <meta name="description" content="Craftsmen website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navigation/>
      &nbsp; &nbsp;
      <h1 className='font-semibold text-xl px-3'> New arrivals </h1>
      <br></br>
      <Footer/>
    </div>
  )
}
