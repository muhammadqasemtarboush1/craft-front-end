import { Header, Navigation, Footer } from "../components"
import Image from 'next/dist/client/image'

import craft2 from '../assets/craft2.jpg';

export default function About(){
    return (
        <>
        <Header/>
        <Navigation/>
        &nbsp; &nbsp;
        <div className="relative w-450 h-350 rounded-md overflow-hidden text-center">
        <Image
        layout=""
        src={craft2}
        alt="craft"
        width="450px"
        height="350px"
        quality={100}
        />
        </div>
        &nbsp; &nbsp;
        <p className='text-center font-semibold text-xl'>
            Our idea for this project is to create a website called crafts for the craftsmen to present their products on. The craftsmen will also be able to sell their products to the customers easily. 
            Nowadays online shopping is taking over the world, so those who cannot afford having a physical store somewhere can take advantage of that having an online shop. The main purpose of creating the website is to show the world that there is a lot of talented people who can do fascinating things but can't afford opening a shop or creating a website, so this can provide these people with an opportunity to do exactly what they have always dreamed of but could not afford. 
            At the same time, we will offer events for the craftsmen and the customers to come, see, and inspect the products and the pieces in real life as they wish.
        </p>
        <Footer/>
        </>
    )
}