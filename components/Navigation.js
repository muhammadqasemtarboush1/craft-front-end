import Link from "next/link"


export default function Navigation(){
    return(
        <nav className='box-content w-screen py-2 text-xl font-bold text-center bg-orange-400 border-none shadow-md h-7'>
        <Link href="/">
            <a className="w-20 h-20 p-2 px-3 py-1 text-white border-none hover:text-orange-300"> Home </a>
        </Link>  
        &nbsp; &nbsp;   
        <Link href="/About">
            <a className="w-20 h-20 p-2 px-3 py-1 text-white border-none hover:text-orange-300"> About </a>
        </Link> 
        &nbsp; &nbsp;  
        <Link href="/Craftsmen">
            <a className="w-20 h-20 p-2 px-3 py-1 text-white border-none hover:text-orange-300"> Craftsmen </a>
        </Link> 
        &nbsp; &nbsp;
        <Link href="/Products">
            <a className="w-20 h-20 p-2 px-3 py-1 text-white border-none hover:text-orange-300"> Products </a>
        </Link> 
        &nbsp; &nbsp;
        <Link href="/Events">
            <a className="w-20 h-20 p-2 px-3 py-1 text-white border-none hover:text-orange-300"> Events </a>
        </Link> 
        <Link href='/Cart'>
            <a className="w-20 h-20 p-2 px-3 py-1 text-white border-none hover:text-orange-300"> Cart </a>
        </Link> 

        &nbsp; &nbsp;   

  </nav>
    )
}