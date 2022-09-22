import React from 'react'
import { CartContext } from '../contexts/CartContext'
import { useContext,useEffect } from 'react'
import { Navigation } from '../components'
import Swal from 'sweetalert2'
export default function Cart() {
  const cartContext = useContext(CartContext)
  const checkout =()=>{
    Swal.fire({
      title:   'Good job!',
      text: 'purchase done successfully ',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    cartContext.setCartContext([])
  }




  useEffect(()=>{console.log(cartContext.cartContext)},[])
  return (
    <>
     <Navigation/>
    <button style={{backgroundColor:'blue',color:'white',paddingInline:'5%',paddingBlock:'2%',marginBlock:'5%',marginLeft:'40%' ,borderRadius:'8%'}} onClick={checkout}> check out </button>

     <div className='flex flex-col items-center justify-center bg-gray-100'>
     <div className='grid grid-flow-row grid-cols-2 gap-2'>
      { cartContext.cartContext.map((item,idx)=>{
        return <div key={idx}>
           <>
                  <div className="flex flex-col items-center justify-center max-w-lg p-8 transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                    <div className="items-center justify-center mx-auto bg-white shadow-md">
                      <div className="p-12 border-white rounded-bl-md rounded-br-md">
                        <img src={item.image} name="Image" alt="" width="100%" height="100%" />
                        <h3 className="max-w-xs font-semibold text-gray-700 truncate" >{item.created_by.username}</h3>
                        <h3 className="max-w-xs font-semibold text-gray-700 truncate">{item.title}</h3>
                        <h3 className="max-w-xs font-semibold text-gray-700 truncate">${item.price}</h3>
                        <p className="max-w-xs text-base text-gray-700 truncate hover:snap-x text-clip">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </>
        </div>
      })
    }
    </div>
    </div>
    </>
  )
}