
export default function Header(){
    return (
        <header className='flex justify-between bg-slate-500 p-3 w-screen'>
            <h1 className="text-2xl font-semibold">
                Crafts
            </h1>
            <div className="mr-90 h-7 rounded">
                <button className="float-right text-black font-bold bg-gray-300 rounded w-20 h-full">
                    Log in
                </button>
                <button className="float-right text-black mr-2 font-bold bg-gray-300 rounded w-20 h-full">
                    Sign up
                </button>
            </div>
        </header>
    )
}