import React from "react";
import Image from "next/image";
import Rectangle from "../../../public/Rectangle.png";
import { ChevronRightIcon } from "lucide-react";
import Logo from "../../../public/Meubel-l.png";

function Shopherosection() {
  return (
    <div className="relative">
      {/* Top Section */}
      <div>
        <Image
          src={Rectangle}
          alt="Background"
          height={316}
          className="w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Logo */}
          <Image
            src={Logo}
            alt="Meubel Logo"
            className="max-w-[200px] size-10   sm:max-w-[300px]"
          />

          {/* Heading */}
          <h2 className="text-m sm:text-6xl font-medium mt-1">Shop</h2>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <p className="font-medium text-gray-600">Home</p>
            <ChevronRightIcon size={20} className="text-gray-600" />
            <p className="font-light text-gray-500">Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopherosection;
