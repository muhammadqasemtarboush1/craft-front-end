
export default function Header(){
    return (
        <header className='flex justify-between items-center bg-stone-700 p-3 w-screen'>
            <div className="flex flex-row items-center ">
            <img class="shadow-md bg-orange-500 rounded-full  p-3 "src="https://thumbs.dreamstime.com/z/illustration-drawing-art-hand-tools-logo-white-background-hand-tools-logo-182124077.jpg" alt="imag" width="7% " height="7%" />
            <h1 class='text-4xl pl-50 text-orange-500 ml-3'>Craftsmen</h1>
            </div>
            <div className="mr-90 h-7 rounded flex flex-row">
                <button className=" float-right text-white font-bold bg-orange-500 rounded w-20 h-full hover:text-stone-400  ">
                    Log in
                </button>
                <button className=" ml-3 float-right text-white mr-2 font-bold bg-orange-500 rounded w-20 h-full hover:text-stone-400">
                    Sign up
                </button>
            </div>
        </header>
    )
}