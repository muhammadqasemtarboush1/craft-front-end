import Link from "next/link"
import { AuthContext } from "../contexts/Auth"
import { useContext,useEffect } from "react"

export default function Header(){
    
    const auth = useContext(AuthContext)

    return (
        <header className='flex items-center justify-between w-screen p-1 px-3 bg-amber-900'>
            <div className="flex flex-row items-center ">
            <img className="p-3 rounded-full shadow-md bg-slate-50" src="https://thumbs.dreamstime.com/z/illustration-drawing-art-hand-tools-logo-white-background-hand-tools-logo-182124077.jpg" alt="img" width="5% " height="5%" />
            <h1 className='ml-3 text-4xl pl-50 text-slate-50'>Crafts</h1>
            </div>
            <div className="flex flex-row rounded mr-90 h-7">
              {!auth.tokens ?(
                <>
                  <Link href="/Login">
                <button className="float-right w-20 h-full font-bold rounded bg-slate-50 hover:text-stone-400">
                    Log in
                </button>
                </Link>
                <Link href="/Signup">
                <button className="float-right w-20 h-full ml-3 mr-2 font-bold rounded bg-slate-50 hover:text-stone-400">
                    Sign up
                </button>
                </Link>
                </>
              ):  
              <button  onClick={()=>auth.logout()} className="float-right w-20 h-full ml-3 mr-2 font-bold rounded bg-slate-50 hover:text-stone-400">
              Log out
          </button>
             }
               
            </div>
        </header>
    )
}