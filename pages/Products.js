import { Header, Navigation, Footer } from '../components'
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import { AuthContext } from '../contexts/Auth';


const url= "https://craft-herfah.herokuapp.com"
export default function Products() {
  const [Products, setProducts] = useState([])
  const [userInput, setUserInput] = useState([]);
  const auth = useContext(AuthContext)

  function readMore() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  async function handleUserInput(e){
    e.preventDefault();
    try{
    const inputObject = {
        "created_by": e.target.created_by.value,
        "title": e.target.title.value,
        "description": e.target.description.value,
        "price": e.target.price.value,
        "category": e.target.category.value,
        "stock": e.target.stock.value,
        "image": e.target.image.files[0]
    }
  //   const inputObject = {
  //     "created_by": 1,
  //     "title": 'omar',
  //     "description": 'test',
  //     "price": 4,
  //     "category": 1,
  //     "Stock": 7,
  //     "image": e.target.image.value
  // }
    console.log(inputObject)
   await axios.post(url, inputObject, 
    {headers: {Authorization: 'Bearer ' +   auth.tokens.access, 'content-type': 'multipart/form-data'} })
    setProducts([...inputObject,Products])
  } catch(e){
  //  await axios.post(url, inputObject, {headers: {Authorization: 'Bearer ' +   auth.tokens.access}})
  // } catch(e){
    console.log(e)
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
    },[userInput]);

  return (
    <div className='flex flex-col justify-center items-center bg-gray-100'>
      <Head>
        <title>Products page</title>
      </Head>
      <Header/>
      <Navigation/>
      &nbsp; &nbsp;
      <form onSubmit={handleUserInput} enctype='multipart/form-data' className='flex-auto px-4 my -32 max-w-3xl mx-auto space-y-6'>
        
          <label className='font-semibold'>Craftmen name: </label>
          <input  className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="number" name='created_by' required/>
        
          <br></br>
          
            <label className='font-semibold'>Name of the product: </label>
            <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="text" name='title' required/>
          
          <br></br>
          
            <label className='font-semibold'>Description: </label>
            {/* <input className='h-50 w-70' type="text" name='desc'/> */}
            <textarea className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' rows="6" cols="60" name="description" required/>
          
          <br></br>
          
            <label className='font-semibold'>Price: </label>
            <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="number" name='price' size="4" required/>
          
          <br></br>

            <label className='font-semibold'>category: </label>
            <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="number" name='category' required/>
          
          <br></br>

            <label className='font-semibold'>stock: </label>
            <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="number" name='stock' size="4" required/>
          
          <br></br>

          <label for="image">A picture of the product:</label>
          <input className="p-5" type="file"
          id="avatar" name="image"
          accept="image/png, image/jpeg"></input>

          <div className='relative h-32 w-32'>
            <input type="submit" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-green-500 to-green-600 md:p-4 rounded-3xl hover:bg-white' value="Add"/>
          </div>
      </form>
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
