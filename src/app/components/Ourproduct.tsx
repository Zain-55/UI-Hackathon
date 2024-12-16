import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurProduct() {
  const categories = [
    {
      title: "Syltherine",
      dis: "Stylish cafe chair",
      Price: "25000.000",
      image: "/Cart7.png",
      alt: "Cafe Chair",
      href: "/category/cafechair",
    },
    {
      title: "Leviosa",
      dis: "Stylish cafe chair",
      Price: "25000.000",
      image: "/Leviosa.png",
      alt: "Luxury Sofa",
      href: "/category/sofaset",
    },
    {
      title: "Lolito",
      dis: "Luxury big sofa",
      Price: "25000.000",
      image: "/Lolito.png",
      alt: "Luxury Sofa",
      href: "/category/sofaset",
    },
    {
      title: "Respira",
      dis: "Outdoor bar table and stool",
      Price: "Rp 500.000",
      image: "/Respira.png",
      alt: "Respira",
      href: "/category/sofaset",
    },
    {
      title: "Grifo",
      dis: "Night lamp",
      Price: "Rp 1.500.000",
      image: "/Grifo.png",
      alt: "Grifo",
      href: "/category/sofaset",
    },
    {
      title: "Muggo",
      dis: "Small mug",
      Price: "Rp 500.000",
      image: "/Muggo.png",
      alt: "Muggo",
      href: "/category/sofaset",
    },
    {
      title: "Pingky",
      dis: "Cute bed set",
      Price: "Rp 7.000.000",
      image: "/Pingky.png",
      alt: "Luxury Sofa",
      href: "/category/sofaset",
    },
    {
      title: "Potty",
      dis: "Minimalist flower pot",
      Price: "Rp 500.000",
      image: "/Potty.png",
      alt: "Potty",
      href: "/category/sofaset",
    },
   
  ];

  return (
    <section className="h-[1084px] border-[1px] mx-[102px]">
      <h1 className="text-center text-[40px] font-bold mb-[32px]">
        Our Products
      </h1>
      <div className="grid grid-cols-4 gap-[32px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="  text-center hover:shadow-lg transition-shadow bg-[#F4F5F7] h-[446px] w-[285px] ml-[10px]"
          >
            <Link href={category.href}>
              <div>
                <Image
                  src={category.image}
                  alt={category.alt}
                  width={300}
                  height={300}
                  className="mx-auto h-[301px] overflow-hidden "
                />
                <h2 className="text-[24px] font-semibold mt-[16px] mr-[146px] ml-[16px]">
                  {category.title}
                </h2>
                <h1 className="mr-[111px] text-[16px] text-[#898989]">
                  {category.dis}
                </h1>
                <h1 className="mr-[20px] ml-[16px] text-[16px]">
                  {category.Price}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}


