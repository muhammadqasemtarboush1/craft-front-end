import React from "react";


export default function LoginForm() {
    return (
<>

  <div className="flex flex-col justify-center items-center bg-gray-100" >
    <form className="flex-auto px-4 my -32 max -w -3xl mx -auto space-y-6" action="/send-data-here" method="post">
    
    <label for="name">Username:</label>
    <input className="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" type="text" id="name" name="name" required />
    <br/>
    
    <label for="pswrd">Password:</label>
    <input
    className="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none"
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."
    />
    <br/>
    <div className="flex flex-col">

        <div className="basis-1/2">
        <input  type="radio" name="As a user" value="linus" checked=""/>
        <label for="User"> As a user</label>
        </div>
        
        <div className="basis-1/2">
        <input  type="radio" name="As a craftsmen " value="linus" checked=""/>
        <label for="craftsmen"> As a craftsmen</label>

        </div>
    </div>
    
    <div className="relative h-32 w-32 ...">
    <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-green-600 md:p-4 rounded-3xl hover:bg-white">login</button>
    </div>
    
  
</form> 
</div>
</>
    );
  };