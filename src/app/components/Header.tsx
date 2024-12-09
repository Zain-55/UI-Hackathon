import React from 'react'
import Image from 'next/image'  
import Meubel from '../../../public/Meubel.png' 
import { Search, Heart, ShoppingCart,UserRoundCog, } from 'lucide-react'

export default function Header() {
  return (
    
    <div
    className='flex flex-col w-[1440px] h-[100px] bg-white m-[29px] py-[38px] pl-[54px] pr-[100px]'
  >
    {/* Logo, Navigation, and Icon Section */}
    <div className="flex items-center justify-between m-[29px] px-[54px]">
      {/* Meubel Logo */}
      <Image src={Meubel} alt="Meubel Logo" />
  
      {/* Nav Links Centered */}
      <ul className="flex justify-center gap-[75px] text-[16px] leading-[24px]">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">Shop</li>
        <li className="cursor-pointer hover:text-blue-500">About</li>
        <li className="cursor-pointer hover:text-blue-500">Contact</li>
      </ul>
  
      {/* Icon Section */}
      <div className="flex items-center gap-[45px]">
        <UserRoundCog size={20} className="cursor-pointer hover:text-blue-500" />
        <Search size={20} className="cursor-pointer hover:text-blue-500" />
        <Heart size={20} className="cursor-pointer hover:text-blue-500" />
        <ShoppingCart size={20} className="cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  </div>
  
  )
}
