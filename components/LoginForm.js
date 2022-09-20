import { useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
import { useRouter } from 'next/router'

export default function LoginForm() {
    // const [userInfo, setUserInfo] = useState({});
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    const router = useRouter()

    const { login } = useContext(AuthContext);

    async function handleSubmit(e) { 
        e.preventDefault();

        try{
        await login({
            email,
            password
            
        });
        await router.push("/")
    } catch(e){
        console.log(e)
    }
    }

    function handleemail(e) {
        setemail(e.target.value);
    }

    function handleUserPassword(e) {
        setPassword(e.target.value)
    }
    
    return (
        
<>

  <div class="flex flex-col justify-center items-center bg-gray-100" >
    <form class=" flex-auto px-4 my -32 max -w -3xl mx -auto space-y-6 " action="/send-data-here" method="post">
    <label for="name">email:</label>
    <input onChange={(e)=>handleemail(e)} class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" type="text" id="name" name="name" required />
    <br/>
    <label for="pswrd">Password:</label>
    <input
    onChange={(e)=>handleUserPassword(e)}
    class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none"
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."/>
    <br/>
    {/* <div class="flex flex-col">

        <div class="basis-1/2">
        <input  type="radio" name="As a user" value="linus" checked=""/>
        <label for="User"> As a user</label>
        </div>
        
        <div class="basis-1/2">
        <input  type="radio" name="As a craftsmen " value="linus" checked=""/>
        <label for="craftsmen"> As a craftsmen</label>

        </div>
    </div> */}
    
    <div class="relative h-32 w-32 ...">
    <button onClick={(e)=>handleSubmit(e)} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-green-600 md:p-4 rounded-3xl hover:bg-white">login</button>
    </div>
    
</form> 
</div>
</>
    );
  };