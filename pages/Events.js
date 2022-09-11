import React from 'react';
import Head from 'next/head'
import { Header, Navigation, Footer } from '../components'
import icon from './images/icon.png'
import Image from 'next/image';
import styles from '../styles/Home.module.css'


export default function Events(){
    return (
      
      <div className=''>
      <Head></Head>
          <Header/>
          <Navigation/>
      <div className= {styles.ff}>   
     <div className={styles.maingrid}>
     <Image  src ={icon}  alt= "logo" width={150}  height={150}  /> 
     <Image src ={icon}  alt= "logo" width={150}  height={150} /> 
     
     <Image src ={icon}  alt= "logo" width={150}  height={150} /> 
     <Image src ={icon}  alt= "logo" width={150}  height={150} />
     </div>
     </div>
     <Footer/>
     </div>
     

    
    )
  
    

}
