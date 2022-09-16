import { Header, Navigation, Footer } from '../components'
import { useEffect, useState } from 'react';
import Image from 'next/image';
const myLoader = ( src ) => {
  return src
}
export default function Products() {
  const [userInput, setUserInput] = useState([]);
  function handleUserInput(e){
    e.preventDefault();
    const inputObject = {
        "Name": e.target.name.value,
        "Products_name": e.target.name_of.value,
        "Description": e.target.desc.value,
        "Price": e.target.price.value,
        "Image": e.target.image.value
    }
  
    setUserInput([...userInput, inputObject])

    }
    useEffect(()=>{
      console.log(userInput)
    },[userInput]
    
    );
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100"'>
      <Header/>
      <Navigation/>
      &nbsp; &nbsp;
      <form onSubmit={handleUserInput} className='flex-auto px-4 my -32 max -w -3xl mx -auto space-y-6'>
        
          <label className='font-semibold'>Craftmen name: </label>
          <input className='border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none' type="text" name='name' />
        
        <br></br>
          
            <label className='font-semibold'>Name of the product: </label>
            <input className='border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none' type="text" name='name_of' />
          
          <br></br>
          
            <label className=''>Description: </label>
            {/* <input className='h-50 w-70' type="text" name='desc'/> */}
            <textarea className='border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none' rows = "6" cols = "60" name="desc"/>
          
          <br></br>

          
            <label className='font-semibold'>Price: </label>
            <input className='border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none' type="text" name='price' size="4"/>
          
          <br></br>

          <label for="image">Choose a profile picture:</label>

          <input class="p-5" type="file"
          id="avatar" name="image"
          accept="image/png, image/jpeg" ></input>

          <div className='relative h-32 w-32 '>
            <input type="submit" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-green-500 to-green-600 md:p-4 rounded-3xl hover:bg-white' value="Add"/>
          </div>
          
        
      </form>
      &nbsp; &nbsp;
      <div className='grid grid-cols-4 grid-flow-row gap-1  '>
      {
      userInput.map(item => {

        return (
          <>

            <div class="max-w-lg p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 flex flex-col justify-center items-center bg-gray-100">
      
      <div class="shadow-md mx-auto bg-white justify-center items-center ">
          
          <div class=" border-white p-12 rounded-bl-md rounded-br-md " style={{maxWidth:"18rem"}}>
          <Image loader={(e)=>myLoader(item.Image)} src="./avatar-05.png" name="Image" alt="" width="30%" height="30%" />
            <h3 class="truncate max-w-xs text-gray-700 font-semibold " >{item.Name}</h3>
            <h3 class="truncate max-w-xs text-gray-700 font-semibold">{item.Products_name}</h3>
            <h3 class="truncate max-w-xs text-gray-700 font-semibold">${item.Price}</h3>
            
            <p class=" truncate max-w-xs text-sm text-gray-600  hover:snap-x text-clip">{item.Description}</p>
          
        <div class="info">
            <a href="">Add</a>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
    </div>
        
</div>
</div>

          </>
     )
     })
     }
     </div>
      <Footer/>
    </div>
    
  )
}
