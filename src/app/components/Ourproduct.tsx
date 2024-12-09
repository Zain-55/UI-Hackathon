import React from 'react'
import Image from 'next/image'
import Frame1 from "../../../public/Frame1.png"
import Frame2 from "../../../public/Frame2.png"

export default function Ourproduct() {
  return (
    <div className='flax justify-center mx-[131px]'>
        <h1 className='text-center text-[40px] mt-0'>Our Product</h1>
     <Image src={Frame1} alt="Frame1" className='mt-10' />
     <Image src={Frame2} alt="Frame2" className='mt-10' />
    <div className='text-center text-[#B88E2F] mt-10'>
     <button className='border-2 border-[#B88E2F] w-[245px] h-[48px]'>Show More</button>
     </div>
    </div>
  )
}
