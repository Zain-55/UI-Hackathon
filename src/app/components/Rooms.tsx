import React from "react";
import Image from "next/image"; // Ensure Image is imported
import Frame3 from "../../../public/Frame3.png"; // Correct path to the image
import Frame4 from "../../../public/Frame4.png"; // Correct path to the image


export default function Rooms() {
  return (
    <div className="bg-[#FCF8F3] py-10">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[1.2]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-[14px] sm:text-[16px] text-gray-600 leading-[24px]">
            Our designers have already created numerous beautiful room prototypes to inspire you.
          </p>
          <button className="mt-4 px-6 py-3 text-white bg-[#B88E2F] hover:bg-[#997627] ">
            Explore More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-[404px] h-[582px] mt-[44px] mr-[472px] lg:w-1/2">
          <Image
            src={Frame3}
            alt="Beautiful Room"
            className=""
           
            priority={true} // Optimize loading for above-the-fold content
          />
        </div>
        <div className="mt-[44px] mr-[76px]">
          <Image
            src={Frame4}
            alt="Beautiful Room"
            className=""
           
            priority={true} // Optimize loading for above-the-fold content
          />
        </div>
      </div>
    </div>
  );
}
