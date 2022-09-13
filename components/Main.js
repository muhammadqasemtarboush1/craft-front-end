import Image from 'next/dist/client/image'
import craft3 from '../assets/craft3.jpg';

export default function Main(){
    return (
        <main className=''>
        <div className="relative w-450 h-350 rounded-md overflow-hidden text-center">
        <Image
        className=''
        src={craft3}
        alt="craft"
        />
        </div>
        &nbsp; &nbsp;
        <p className='text-center font-semibold'>
            The word Craft comes from the Middle English word for strength or skill and it means “skill 
            in planning, making, executing” and, by extension, “an occupation or trade requiring skill”. 
            Handicraft is the traditional main sector of the crafts, it is a type of work
            where useful and decorative devices are made completely by hand or by using only simple tools.
            The term is usually applied to traditional means of making goods. 
        </p>
        </main>
    )
}

