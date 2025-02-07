import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const page = () => {
  return (
    
      <footer className="max-w-[1440px] bg-white pt-16  sm:pt-24 md:pt-32 lg:pt-40 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-start gap-8 ">
        {/* Address Section */}
        <div className="w-full sm:w-[285px]">
          <p className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] mt-4 sm:mt-20">
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full sm:w-[352px] flex flex-col sm:flex-row justify-between gap-8">
          <div className="space-y-4 sm:space-y-7 flex flex-col">
            <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] cursor-pointer">
              Link
            </p>
            <Link href={"/"} className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              Home
            </Link>
            <Link href={"/Shop"} className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              Shop
            </Link>
            <Link href="/About" className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              About
            </Link>
            <Link href="/Contact" className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              Contact
            </Link>
          </div>
          <div className="space-y-4 sm:space-y-7">
            <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] cursor-pointer">
              Help
            </p>
            <p className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              Payment Options
            </p>
            <p className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              Returns
            </p>
            <p className="font-[500] text-[16px] leading-[24px] text-black cursor-pointer">
              Privacy Policies
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full sm:w-[286px]">
          <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F]">
            Newsletter
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-[230px] font-[400] text-[14px] leading-[21px] border-b border-black focus:outline-none pb-2"
            />
            <button className="font-[500] text-[14px] leading-[21px] text-black border-b border-black px-4 pb-2">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full">
          <div className="border-t border-[#D9D9D9] mt-6 pt-6">
            <p className="font-[400] text-[16px] leading-[24px] text-black">
              2023 furino. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default page
