"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const images = [
  {
    src: "/001.png",
    alt: "Workspace with laptop and vintage radio",
    className: "col-span-4 row-span-2",
  },
  {
    src: "/002.png",
    alt: "Dining area with white chairs",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/003.png",
    alt: "Bedroom with beige decor",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/004.png",
    alt: "Rustic dining area",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/005.png",
    alt: "Vintage armchair",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/006.png",
    alt: "Decorative side tables",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/007.png",
    alt: "Wall decor",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/008.png",
    alt: "Kitchen setup",
    className: "col-span-1 row-span-1",
  },
]

export default function CollageFrame() {
  const [loadedImages, setLoadedImages] = useState<number[]>([])

  const onLoadComplete = (index: number) => {
    setLoadedImages((prev) => [...prev, index])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
        Share your setup with
        <div className="text-5xl mt-2">#FuniroFurniture</div>
      </h1>

      <Card className="w-full max-w-auto mx-auto overflow-hidden">
        <CardContent className="p-4">
          <div className="grid grid-cols-6 gap-4 auto-rows-[100px]">
            {images.map((image, index) => (
              <div key={index} className={`relative overflow-hidden rounded-lg ${image.className}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className={`
                    duration-700 ease-in-out object-cover
                    ${loadedImages.includes(index) ? "scale-100 blur-0" : "scale-110 blur-lg"}
                    hover:scale-105 transition-transform
                  `}
                  onLoadingComplete={() => onLoadComplete(index)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

