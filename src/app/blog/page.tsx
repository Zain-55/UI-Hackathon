import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Rectangle from '../../../public/Rectangle.png'
import Rectangle68 from '../../../public/Rectangle68.png'


function page() {
  return (
   <div>
    <Header/>
    
    <div className=''>
<h1 className=''>Blog</h1>
    <Image src={Rectangle} alt={''} width={2550}></Image>
    
    </div>
    <div className='w-[820px] h-[794px] bg-gray-200 mt-[106px] ml-[97px] gap-[30px]'>
    <Image src={Rectangle68} alt='' ></Image>

        <div className='w-[393px] h-[537px] ml-[947px] mt-[84px] placeholder:default:bl'>
          
          
        </div>

    </div>
   </div>
  )
}

export default page
