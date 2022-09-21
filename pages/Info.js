import Head from 'next/head'
import { Header, Navigation, Footer } from '../components'
import { AuthContext } from '../contexts/Auth'
import {useContext, useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'


export default function Info() {
  const [Products, setProducts] = useState([])
  const auth = useContext(AuthContext)
  const router = useRouter()
  const [id , setId] = useState(router.query.id)
  const url= `https://craft-herfah.herokuapp.com/${id}/`
  const urll = `https://craft-herfah.herokuapp.com/craftsman/user/`
  const get_data=async ()=>{
    let response = await axios.get(url, {headers: {Authorization: 'Bearer ' +   auth.tokens.access}})
    setProducts(response.data)
    console.log(Products) 
    let user = await axios.get(urll + response.data.created_by + '/', {headers: {Authorization: 'Bearer ' +   auth.tokens.access}})
    console.log(user.data)
    setProducts(prev => {
        return {
        ...prev,
        created_by: user.data.username
    }})
    }
   useEffect(()=>{
    auth.tokens && get_data()
  },[]);

  return ( 
    <div className='bg-gray-100'>
      <Head>
        <title>Information page</title>
        <meta name="description" content="Craftsmen website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navigation/>
      <br></br>
      {/* <div className='grid grid-cols grid-flow-row gap-28 px-44 text-center'>
          <div className="border-white p-12 rounded-bl-md rounded-br-md text-center">
          <img src={Products.image} className='mx-auto' name="Image" alt="" width="50%" height="50%"/>
            <h3 className="text-2xl text-gray-700 font-semibold" >{Products.created_by}</h3>
            <h3 className="text-2xl text-gray-700 font-semibold">{Products.title}</h3>
            <h3 className="text-2xl text-gray-700 font-semibold">${Products.price}</h3>            
            <p className="text-2xl text-gray-700 font-semibold">{Products.description}</p>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full text-xl'>Add to cart</button>
            <i className="fas fa-long-arrow-alt-right"></i>
          
        </div>
     </div> */}
        {/* <div className='mx-auto px-80 '>
        <div class="grid grid-cols max-w-xl text-center rounded">
        <img class="w-full" src={Products.image} alt=""/>
        <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2">{Products.title}</div>
        <p class="text-gray-700 text-base"> {Products.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 text-2xl">Made by: {Products.created_by}</span>
        <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2 text-2xl">${Products.price}</span>
        <br></br>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full text-xl'>Add to cart</button>
        </div>
        </div>
        </div> */}
        
        <div class="max-w-xl text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <a href="#">
        <img class="rounded-t-lg" src={Products.image} alt=""/>
        </a>
        <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Products.title}</h5>
        </a>
        <p class="mb-3 text-xl text-gray-700 dark:text-gray-400">{Products.description}</p>
        <p class="mb-3 text-xl text-gray-900 dark:text-gray-900">${Products.price}</p>
        <p class="mb-3 text-xl text-gray-900 dark:text-gray-900">Made by: {Products.created_by}</p>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full text-xl'>Add to cart</button>
        </div>
        </div>
      <br></br><br></br><br></br>
      <Footer/>
    </div>
  )
}
