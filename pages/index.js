import Head from 'next/head'

import { Header, Navigation, Main, Footer, LoginForm } from '../components'

import { AuthContext } from '../contexts/Auth'
import {useContext, useState, useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link';
import Cart from './Cart';
import { CartContext } from '../contexts/CartContext';

const url= "https://craft-herfah.herokuapp.com"
export default function Home() {
  const [Products, setProducts] = useState([])
  const auth = useContext(AuthContext)
  const cartContext = useContext(CartContext)

  const addHandler=(item)=>{

    cartContext.setCartContext([...cartContext.cartContext, item])
  }
  const get_data=async ()=>{
    try{

      let response = await axios.get(url, { headers: { Authorization: 'Bearer ' + auth.tokens.access } })
      setProducts(response.data)
    } catch {
      auth.logout()
    }
  }
  useEffect(() => {
    auth.tokens && get_data()

  }, []);


  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Crafts</title>
        <meta name="description" content="Craftsmen website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      &nbsp; &nbsp;

      {auth.tokens?(<> 

<h1 className='text-2xl font-bold text-center'> OUR PRODUCTS: </h1>
<div className='grid grid-flow-row grid-cols-2 text-center gap-28 px-44'>
{
Products.map((item,idx) => {
  return (
    <div key={idx} className="flex flex-col items-center justify-center max-w-lg p-8 transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:duration-300">
    <div className="items-center justify-center mx-auto bg-white shadow-md">
    <div className="p-12 border-white rounded-bl-md rounded-br-md">
    <img src={item.image} name="Image" alt="" width="100%" height="100%"/>
      <h3 className="max-w-xs font-semibold text-gray-700 truncate" >{item.created_by.username}</h3>
      <h3 className="max-w-xs font-semibold text-gray-700 truncate">{item.title}</h3>
      <h3 className="max-w-xs font-semibold text-gray-700 truncate">${item.price}</h3>            
      {/* {readMore &&(
      <p className="max-w-xs text-base text-gray-700 truncate hover:snap-x text-clip">{item.description}</p>
        )}
      <button onClick={()=> {setReadMore(!readMore)}} className='text-xs text-gray-600'>Read more</button> */}
      <Link href={{
      pathname: "/Info",
      query: {'id': item.id}
    }}> More information </Link>
    <div className="info">
      <button onClick={()=>addHandler(item)} className='px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded-full hover:bg-green-700'>Add to cart</button>
      <i className="fas fa-long-arrow-alt-right"></i>
    </div>
  </div>
                  </div>
                </div>

              )
            })
          }

        </div>
      </>)
        :
        <LoginForm />
      }
      <br></br>
      <Footer />
    </div>
  )
}


