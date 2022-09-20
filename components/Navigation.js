import Link from "next/link"

export default function Navigation(){
    return(
        <nav className='shadow-md box-content h-7 border-none w-screen py-2 bg-orange-400 text-xl font-bold text-center'>
        <Link href="/">
            <a className="h-20 w-20 p-2 border-none py-1 px-3 text-white hover:text-orange-300" target="_blank"> Home </a>
        </Link>  
        &nbsp; &nbsp;   
        <Link href="/About">
            <a className="h-20 w-20 p-2 border-none py-1 px-3 text-white hover:text-orange-300" target="_blank"> About </a>
        </Link> 
        &nbsp; &nbsp;  
        <Link href="/Craftsmen">
            <a className="h-20 w-20 p-2 border-none py-1 px-3 text-white hover:text-orange-300" target="_blank"> Craftsmen </a>
        </Link> 
        &nbsp; &nbsp;
        <Link href="/Products">
            <a className="h-20 w-20 p-2 border-none py-1 px-3 text-white hover:text-orange-300" target="_blank"> Products </a>
        </Link> 
        &nbsp; &nbsp;
        <Link href="/Events">
            <a className="h-20 w-20 p-2 border-none py-1 px-3 text-white  hover:text-orange-300" target="_blank"> Events </a>
        </Link> 
        &nbsp; &nbsp;     
  </nav>
    )
}