import React from "react";
import { Header, Navigation, Footer } from '../components'
import Image from 'next/image';
import Head from 'next/head'
import craftwoman from '../pages/images/craftwoman.png'
import { AuthContext } from '../contexts/Auth'
import axios from 'axios';
import {useContext, useState, useEffect} from 'react'
const url= "https://craft-herfah.herokuapp.com/craftsman/user/"
export default function Craftsmen() {
    const [Craftsman, setCraftsman] = useState([])
  const auth = useContext(AuthContext)
 
  const get_data=async ()=>{
    try{
      
      let response = await axios.get(url, {headers: {Authorization: 'Bearer ' +   auth.tokens.access}})
      setCraftsman(response.data)
    }catch{
      auth.logout()
    }
   }
   useEffect(()=>{
    auth.tokens && get_data()
  },[auth.tokens]);
    return (
<div className="flex flex-col items-center justify-center bg-gray-100">

<Navigation/>
{/* <div class="max-w-xl text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <a href="#">
        <img class="rounded-t-lg" src={Craftsman.image} alt=""/>
        </a>
        <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Craftsman.first_name}</h5>
        </a>
        <p class="mb-3 text-xl text-gray-700 dark:text-gray-400">{Craftsman.last_name}</p>
        <p class="mb-3 text-xl text-gray-900 dark:text-gray-900">{Craftsman.username}</p>
        <p class="mb-3 text-xl text-gray-900 dark:text-gray-900"> {Craftsman.description}</p>
        </div>
        </div> */}
<div className='grid grid-cols-2 grid-flow-row gap-28 px-44 text-center'>

{
     
     Craftsman.map(item => {
       return (
         <>
         
         <div className="max-w-lg p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 flex flex-col justify-center items-center bg-gray-100">
            <div className="shadow-md mx-auto bg-white justify-center items-center">
            <div className=" border-white p-12 rounded-bl-md rounded-br-md">
            <img src={item.image} name="Image" alt="" width="100%" height="100%"/>
              <h3 className="truncate max-w-xs text-gray-700 font-semibold" >{item.first_name}</h3>
              <h3 className="truncate max-w-xs text-gray-700 font-semibold">{item.last_name}</h3>
              <h3 className="truncate max-w-xs text-gray-700 font-semibold">{item.description}</h3>
              </div>
              </div>
              </div>
       </>
     )
     })
      }
      </div>

 <br/>
 <Footer/>   
</div>
)
}