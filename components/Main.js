import Link from 'next/link'

export default function Main(){
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
            <Link href="Events">
                <a className="h-20 w-20 p-2 border-2 py-1 px-3 text-blue-500 hover:text-blue-800" target="_blank"> Events </a>
            </Link> 
            &nbsp; &nbsp;     
            <Link href="About">
                <a className="h-20 w-20 p-2 border-2 py-1 px-3 text-blue-500 hover:text-blue-800" target="_blank"> About </a>
            </Link> 
        </nav>
        &nbsp; &nbsp;
        <p className='text-center font-semibold text-justify'>
            The word Craft comes from the Middle English word for strength or skill derived from the Old English word craeft which comes from Old High German kraft, for strength, and means “skill in planning, making, executing” and, by extension, “an occupation or trade requiring skill” and crafts, then, being those objects resulting from the application of that skill (Merriam-Webster Dictionary). Every civilization has developed their own crafts and the term can be applied to numerous aspects of each of them. Within the scope of this article the term is applied only to hand-crafts including ceramics and metal-working but it should be understood that the term is equally applicable to writing and other forms of expression.
            Crafts in the ancient world, both in their purpose and how they were manufactured, were as varied as the cultures which produced them. In ancient Mesopotamia, crafts were produced both by order of the state and privately. As early as 6500 BCE flax textiles were in use in the region known as Tepe Sabz (modern day Iran) and flax was woven both privately and by state workers prior to the rise of wool. From the city of Ur we have the Sumerian Standard of War and the Standard of Peace, both commissioned by the State and wrought by those whom, today, would be known as government employees.
            At the same time, however, there were many private artists producing their own, more personal, works (also as early as 6500 BCE, from which time pottery has been found) such as the statue Ram Caught In A Thicket from Ur c. 2800 BCE, an elaborate piece composed of shells, lapis lazuli and gold depicting a ram (or goat) struggling to free itself from a bush. While the Sumerian standards are utilitarian works, providing a narrative of the culture at peace or at war, pieces like Ram Caught In A Thicket often depicted scenes from daily life or symbolic representations of the gods as it has been speculated that the Ram statue symbolized the male energy principle of the god Tammuz caught in the thicket of the female deity Inanna/Ishtar. Inanna/Ishtar is regularly depicted as a difficult character who often ensnared her lovers in webs of difficulty.
            As early as 6200 BCE copper was being smelted in Anatolia in the south of the Mesopotamian region and copper grew in importance as it became more readily available. It would eventually prove to be an increasingly valuable commodity in trade as well as for domestic use. 
        </p>
        </main>
    )
}

