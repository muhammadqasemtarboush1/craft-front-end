import { Header, Navigation, Footer } from '../components'
import { useState } from 'react';

export default function Products() {
  const [userInput, setUserInput] = useState([]);
  function handleUserInput(e){
    e.preventDefault();
    const inputObject = {
        "Name": e.target.name.value,
        "Products_name": e.target.name_of.value,
        "Description": e.target.desc.value,
        "Price": e.target.price.value,
    }
  
    setUserInput([...userInput, inputObject])

    }
  return (
    <div className=''>
      <Header/>
      <Navigation/>
      &nbsp; &nbsp;
      <form onSubmit={handleUserInput} className='ml-6'>
        <div className='flex ml-3'>
          <label className='font-semibold'>Craftmen name: </label>
          <input className='' type="text" name='name' />
        </div>
        <br></br>
          <div className='ml-3'>
            <label className='font-semibold'>Name of the product: </label>
            <input className='' type="text" name='name_of' />
          </div>
          <br></br>
          <div className='ml-3 w-1/4'>
            <label className='font-semibold'>Description: </label>
            {/* <input className='h-50 w-70' type="text" name='desc'/> */}
            <textarea rows = "6" cols = "60" name="desc"/>
          </div>
          <br></br>

          <div className='ml-4 w-1/4'>
            <label className='font-semibold'>Price: </label>
            <input className='' type="text" name='price' size="4"/>
          </div>
          <br></br>

          <div className='ml-4 w-40 h-16 bg-gray-300'>
            <input type="submit" className='w-full h-full font-semibold' value="Add"/>
          </div>
          
        
      </form>
      &nbsp; &nbsp;
      {
      userInput.map(item => {
        return (
          <>
            <p className="font-semibold ml-7">{item.Name}</p>
            <p className="font-semibold ml-7">{item.Products_name}</p>
            <p className="font-semibold ml-7">{item.Description}</p>
            <p className="font-semibold ml-7">{item.Price}</p>
          </>
     )
     })
     }
      <Footer/>
    </div>
  )
}
