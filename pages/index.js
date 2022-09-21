import Head from 'next/head'
import { Header, Navigation, Main, Footer } from '../components'
import { AuthContext } from '../contexts/Auth'
import {useContext, useState, useEffect} from 'react'
import axios from 'axios';

const url= "https://craft-herfah.herokuapp.com"
export default function Home() {
  const [Products, setProducts] = useState([])
  const auth = useContext(AuthContext)
  function readMore() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const get_data=async ()=>{
    let response = await axios.get(url, {headers: {Authorization: 'Bearer ' +   auth.tokens.access}})
    setProducts(response.data)
    console.log(Products) 
   }
   useEffect(()=>{
    console.log(auth.tokens)
    auth.tokens && get_data()
  },[]);
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
      <div className='grid grid-cols-5 grid-flow-row gap-2'>
      {
      Products.map(item => {
        return (
          <>
          <div className="max-w-lg p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 flex flex-col justify-center items-center bg-gray-100">
          <div className="shadow-md mx-auto bg-white justify-center items-center">
          <div className=" border-white p-12 rounded-bl-md rounded-br-md" style={{maxWidth:"18rem"}}>
          <img src={item.image} name="Image" alt="" width="30%" height="30%" />
            <h3 className="truncate max-w-xs text-gray-700 font-semibold" >{item.created_by.username}</h3>
            <h3 className="truncate max-w-xs text-gray-700 font-semibold">{item.title}</h3>
            <h3 className="truncate max-w-xs text-gray-700 font-semibold">${item.price}</h3>            
            <div id="myDIV">
            <p className=" truncate max-w-xs text-base text-gray-700 hover:snap-x text-clip">{item.description}</p>
            </div>
            <button onclick={readMore} className='text-xs text-gray-600'>Read more</button>
          <div className="info">
            <button className='bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded-full text-sm'>Add to cart</button>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        </div>
        </div>
        </>
      )
      })
       }
     </div>
      <br></br>
      <Footer/>
    </div>
  )
}
