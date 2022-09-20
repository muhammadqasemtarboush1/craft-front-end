import Image from 'next/image';
import instagram from '../pages/images/instagram.png'
import facebook from '../pages/images/facebook.png'
import whatsapp from '../pages/images/whatsapp.png'

export default function Footer(){
    return (
      <footer className="w-screen h-10 p-6 bg-stone-700 border-t border-gray-200 shadow flex items-center justify-between dark:bg-gray-800 dark:border-gray-600">
      <span className="text-l text-white text-center">© 2022 <span>Craft</span>. All Rights Reserved.
      </span>
        <div>
        <Image className='mr-90 h-7 rounded' src={instagram} alt="logo" width={20} height={20}/>
        <Image src={facebook} alt="logo" width={20} height={20}/>
        <Image src={whatsapp} alt="logo" width={20} height={20}/>
        </div>
      </footer>
    )
}