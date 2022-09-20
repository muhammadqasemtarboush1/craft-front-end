import React from "react";
import { Header, Navigation, Footer } from '../components'
import Image from 'next/image';
import Head from 'next/head'
import craftwoman from '../pages/images/craftwoman.png'

export default function Craftsmen() {
    return (
<div className="flex flex-col justify-center items-center bg-gray-100">

<Header/>
<Navigation/>
<div className="">
      {/* <h2 class="">Craftsmen</h2> */}
      <div class="">
          {/* <Image className="rounded-full float-right  "src={craftwoman} alt="" width={300} height={300}/> */}
          <div className="ml-4 border-white p-8 rounded-bl-md rounded-br-md">
            <h3 className="text-gray-700 font-semibold">Test Title</h3>
            <p className="text-sm text-gray-600 mt-4">welcome to Craftmen Page</p>
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