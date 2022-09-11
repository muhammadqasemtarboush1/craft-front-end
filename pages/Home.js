import React from 'react';
import Head from 'next/head'
import { Header, Navigation, Footer } from '../components'
import avatar from './images/avatar.png'
import avatar2 from './images/avatar2.png'
import crafts1 from './images/crafts1.jpg'
import crafts2 from './images/crafts2.jpg'
import Image from 'next/image';
import styles from '../styles/Home.module.css'



export default function Home(){
    return (
      <div >
      <Head></Head>
     <Header/>
     <Navigation/>
     <h1> Best sellers! </h1> 
    <Image src= {avatar} alt = "avatar" width={200}  height={200}/>
    <Image src= {avatar2} alt = "avatar" width={200}  height={200}/>
    <p> New Arrivals</p>
    <Image src= {crafts1} alt = "avatar" width={200}  height={200}/>
    <Image src= {crafts2} alt = "avatar" width={200}  height={200}/>
     <Footer/>
     
      </div>

    
    )
  
    

}