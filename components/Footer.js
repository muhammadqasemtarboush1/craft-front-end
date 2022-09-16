import Image from 'next/image';
import instagram from '../pages/images/instagram.png'
import facebook from '../pages/images/facebook.png'
import whatsapp from '../pages/images/whatsapp.png'
import footer_flex from '../styles/Home.module.css'
import styles from '../styles/Home.module.css'
export default function Footer(){
    return (
        <footer className="bg-stone-700 p-4 mt-11 w-screen">
        <p className="font-bold text-white "> &copy; 2022 </p>
        
        <div className= {footer_flex} >
        <Image className='mr-90 h-7 rounded' src ={instagram}  alt= "logo" width={20}  height={20} />
        <Image src ={facebook}  alt= "logo" width={20}  height={20} />
        <Image src ={whatsapp}  alt= "logo" width={20}  height={20} />
        </div>
      </footer>
    )
}