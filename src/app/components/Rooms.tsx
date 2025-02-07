'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    id: '01',
    category: 'Bed Room',
    title: 'Inner Peace',
    image: '/Rectangle24.png?height=600&width=800 '
  },
  {
    id: '02', 
    category: 'Dining Room',
    title: 'Bright & Airy',
    image: '/Rectangle25.png'
  },
  {
    id: '03',
    category: 'Living Room', 
    title: 'Modern Comfort',
    image: '/Rectangle26.png'
  }
]

export default function RoomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full max-h-[670px] bg-[#FCF8F3] mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 pl-[100px]">
          <h1 className="text-4xl font-bold tracking-tight ">
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p className="text-muted-foreground">
            Our designer already made a lot of beautiful <br />prototype of rooms that inspire you
          </p>
          <Button className="bg-[#B88E2F] hover:bg-[#A17B2C] text-white">
            Explore More
          </Button>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 ">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg ">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {slide.id} <span className="w-8 h-px bg-muted-foreground"></span> {slide.category}
                    </div>
                    <h3 className="text-xl font-semibold mt-1">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-between w-[calc(100%+2rem)]">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#B88E2F]' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

