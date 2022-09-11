import Link from 'next/link'

export default function Navigation(){
    return (
        <main className=''>
        <nav className='box-content h-10 border-2 w-screen py-8 bg-gray-100 text-xl font-bold text-center'>
            <Link href="Home">
                <a className="h-20 w-20 p-2 border-2 py-1 px-3 text-blue-500 hover:text-blue-800" target="_blank"> Home </a>
            </Link>  
            &nbsp; &nbsp;     
            <Link href="Craftsmen">
                <a className="h-20 w-20 p-2 border-2 py-1 px-3 text-blue-500 hover:text-blue-800" target="_blank"> Craftsmen </a>
            </Link> 
            &nbsp; &nbsp;     
            <Link href = 'Events'>
                <a className="h-20 w-20 p-2 border-2 py-1 px-3 text-blue-500 hover:text-blue-800" target="_blank"> Events </a>
            </Link> 
            &nbsp; &nbsp;     
            <Link href="About">
                <a className="h-20 w-20 p-2 border-2 py-1 px-3 text-blue-500 hover:text-blue-800" target="_blank"> About </a>
            </Link> 
        </nav>
       
        </main>
    )
}

