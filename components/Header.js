
export default function Header(){
    return (
        <header className='flex justify-between items-center bg-amber-900 p-1 px-3 w-screen'>
            <div className="flex flex-row items-center ">
            <img class="shadow-md bg-slate-50 rounded-full p-3" src="https://thumbs.dreamstime.com/z/illustration-drawing-art-hand-tools-logo-white-background-hand-tools-logo-182124077.jpg" alt="img" width="5% " height="5%" />
            <h1 class='text-4xl pl-50 text-slate-50 ml-3'>Crafts</h1>
            </div>
            <div className="mr-90 h-7 rounded flex flex-row">
                <button className="float-right font-bold bg-slate-50 rounded w-20 h-full hover:text-stone-400">
                    Log in
                </button>
                <button className="ml-3 float-right mr-2 font-bold bg-slate-50 rounded w-20 h-full hover:text-stone-400">
                    Sign up
                </button>
            </div>
        </header>
    )
}