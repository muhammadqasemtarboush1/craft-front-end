import React from "react";
import { Header, Navigation, Footer } from '../components'
import Image from 'next/image';
import Head from 'next/head'
import craftwoman from '../pages/images/craftwoman.png'

export default function Craftsmen() {
    return (
<div className="flex flex-col items-center justify-center bg-gray-100">

<Navigation/>
<div className="">
      {/* <h2 class="">Craftsmen</h2> */}
      <div class="">
          {/* <Image className="float-right rounded-full "src={craftwoman} alt="" width={300} height={300}/> */}
          <div className="p-8 ml-4 border-white rounded-bl-md rounded-br-md">
            <h3 className="font-semibold text-gray-700">Test Title</h3>
            <p className="mt-4 text-sm text-gray-600">welcome to Craftmen Page</p>
            <br/>
          
        <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
        </div>
    </div>
        
</div>
</div>
 <br/>
 <Footer/>   
</div>
)
}