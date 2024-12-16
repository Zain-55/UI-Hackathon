import React from "react";
import Image from "next/image";
import BG from "../../../public/BG.png";

export default function Herosection() {
  return (
    <div className="relative h-auto w-full lg:h-[716.83px]">
      
      <div className="absolute inset-0">
        <Image
          src={BG}
          alt="Background illustration"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

    
      <div className="relative mx-auto mt-10 lg:mt-0 lg:ml-[739px] lg:top-1/3 bg-[#FFF5EB] lg:p-12 p-8 w-[90%] lg:w-[643px] rounded-sm shadow-lg">
        {/* Badge */}
        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4 block">
          New Arrival
        </span>

     
        <h1 className="text-4xl font-bold text-[#B8860B] leading-snug mb-6">
          Discover Our
          <br />
          New Collection
        </h1>

      
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

 
        <button
          className="bg-[#B8860B] px-8 py-3 text-white text-sm font-medium  hover:bg-[#8B6508] transition focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2"
          aria-label="Buy now button for the new collection"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
