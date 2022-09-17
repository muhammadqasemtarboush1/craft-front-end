import { Header, Navigation, Footer } from '../components'
import { useState } from 'react';
import Head from 'next/head';

export default function Payment() {
  const [userInput, setUserInput] = useState([]);
  function handleUserInput(e){
    e.preventDefault();
    const inputObject = {
        "Credit": e.target.num.value,
        "Expi": e.target.date.value,
        "Cvv": e.target.cvv.value,
        "Postal": e.target.postal.value
    }
  
    setUserInput([...userInput, inputObject])

    }
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100'>
      <Head>
        <title>Payment page</title>
      </Head>
      <Header/>
      <Navigation/>
      &nbsp; &nbsp;
      <form onSubmit={handleUserInput} className='flex-auto px-4 my -32 max-w-3xl mx-auto space-y-6'>
          <label className='font-semibold'>Credit card Number: </label>
          <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="text" name='num' required/>
          <br></br>
          <label className='font-semibold'>Expiring date: </label>
          <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="text" name='date' required/>
          <br></br>
          <label className='font-semibold'>CVV code: </label>
          <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="text" name='cvv' required/>
          <br></br>
          <label className='font-semibold'>Postal code: </label>
          <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none' type="text" name='postal' required/>          
          <br></br>
          <div className='relative h-32 w-32'>
          <button type="submit" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-green-500 to-green-600 md:p-4 rounded-3xl hover:bg-white'>
              Pay
          </button>
          </div>
      </form>
      <Footer/>
    </div>
  )
}
