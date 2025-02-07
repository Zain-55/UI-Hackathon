import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Range() {
    const categories = [
        {
          title: "Dining",
          image: "/Dining.png",
          alt: "Cozy dining setup with white wooden panels and textured fabrics",
          href: "/category/dining"
        },
        {
          title: "Living",
          image: "/Living.png",
          alt: "Comfortable living room with beige couch and decorative elements",
          href: "/category/living"
        },
        {
          title: "Bedroom",
          image: "/Bedroom.png",
          alt: "Warm bedroom setting with rattan furniture and plants",
          href: "/category/bedroom"
        }
      ];
    
    return (
        <section className="py-10 px-5 md:px-6 lg:px-8">
            <h1 className="text-[32px] py-2 leading-[48px] font-bold text-center">
                Browse The Range
            </h1>
            <p className="text-gray-500 mb-16 text-[20px] text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-6">
                    {categories.map((category) => (
                        <Link
                            key={category.title}
                            href={category.href}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="relative h-[480px] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={category.image}
                                    alt={category.alt}
                                    layout="fill"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-[24px] font-semibold text-gray-800 mt-4">
                                {category.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
