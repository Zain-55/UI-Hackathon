import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product from '../products/page';

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
    <section className="border-[1px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Product/>
      {/* <h1 className="text-center text-2xl sm:text-3xl font-bold mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center hover:shadow-lg transition-shadow bg-[#F4F5F7] p-4 rounded-lg"
          >
            <Link href={category.href}>
              <div>
                <Image
                  src={category.image}
                  alt={category.alt}
                  width={300}
                  height={300}
                  className="mx-auto h-60 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-4">{category.title}</h2>
                <h1 className="text-sm text-[#898989]">{category.dis}</h1>
                <h1 className="text-base font-medium mt-2">{category.Price}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
    </section>
  );
}

