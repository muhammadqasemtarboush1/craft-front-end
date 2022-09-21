import React from 'react';
import Head from 'next/head'
import { Header, Navigation, Footer ,LoginForm} from '../components'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { AuthContext } from '../contexts/Auth'
import axios from 'axios';
import {useContext, useState, useEffect} from 'react'
import moment from 'moment'
const url= "https://craft-herfah.herokuapp.com/api/events"

export default function Events(){
  const [Events, setEvents] = useState([])
  const auth = useContext(AuthContext)
 
  const get_data=async ()=>{
    try{
      
      let response = await axios.get(url, {headers: {Authorization: 'Bearer ' +   auth.tokens.access}})
      setEvents(response.data)
    }catch{
      auth.logout()
    }
   }
   useEffect(()=>{
    auth.tokens && get_data()
  },[auth.tokens]);
  
    return (
      <div className=''>
     <Head>
        <title>Events page</title>
     </Head>
     <Navigation/>
     <br/>
     <br/>
     <br/>
     {auth.tokens?(<> 
     <div className='grid grid-cols-3 grid-flow-row gap-28 px-10 text-center'>
     {
     Events.map(item => {
       return (
         <>
         
         <div className="max-w-lg p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 flex flex-col justify-center items-center bg-gray-100">
            <div className="shadow-md mx-auto bg-white justify-center items-center">
            <div className=" border-white p-12 rounded-bl-md rounded-br-md">
              <h3 className=" text-center text-2xl text-gray-900 font-bold text-orange-600 uppercase" >{item.title}</h3>
              <br/>
            
              <h3 className=" text-basic text-gray-900 font-semibold"> {moment(item.start_time).format("MMMM Do YYYY, h:mm:ss a") }</h3>
              <h3 className=" text-basic text-gray-900 font-semibold">{moment(item.end_time).format("MMMM Do YYYY, h:mm:ss a") }</h3>
              <br/>
              <p className="text-justify flex flex-col item-center justify-center">{item.description}</p>  
       </div>
       
       </div>
       </div>
       </>
     )
     })
      }
   
   </div> 
    

    </>)
    :
    <LoginForm/>
}
     <br></br>
     <Footer/>
     </div>
    )
}
