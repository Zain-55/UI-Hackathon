import React from 'react';
import Image from 'next/image'; // Ensure Image is imported
import Frame5 from "../../../public/Frame5.png"; // Correct path to the image

export default function Funiturestyle() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* Container */}
      <div className=" h-[721px]">
        <Image
          src={Frame5}
          alt="Furniture Style"
          className="rounded-lg"
          layout="responsive"
        />
      </div>
    </div>
  );
}
