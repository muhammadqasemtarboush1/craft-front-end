import React from 'react';
import Head from 'next/head'
import { Header, Navigation, Footer } from '../components'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Events(){
    return (
      <div className=''>
     <Head>
        <title>Events page</title>
     </Head>
     <Header/>
     <Navigation/>
     <div className= {styles.ff}>   
     <div className={styles.maingrid}>

     </div>
     </div>
     <Footer/>
     </div>
    )
}
