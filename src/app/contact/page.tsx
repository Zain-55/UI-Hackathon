import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Rectangle from '../../../public/Rectangle.png';
import { MapPin, ChevronRightIcon, Phone, Clock, Award, ShieldCheck, Truck, Headphones } from 'lucide-react';
import Footer from '../components/Footer';
import Logo from '../../../public/Meubel-l.png';





  export default function FeaturesBanner() {
    const features = [
      {
        icon: Award,
        title: "High Quality",
        description: "crafted from top materials"
      },
      {
        icon: ShieldCheck,
        title: "Warranty Protection",
        description: "Over 2 years"
      },
      {
        icon: Truck,
        title: "Free Shipping",
        description: "Order over 150 $"
      },
      {
        icon: Headphones,
        title: "24 / 7 Support",
        description: "Dedicated support"
      }
    ]

  return (
  
    <div>
  
      <Header />

      {/* Top Section */}
      <div>
        <Image src={Rectangle} alt="Image" height={316} className="top-[100px] w-full" />

        <div className="absolute bottom-[150px] h-[443px]">
          <Image src={Logo} alt="Meuble-1" className="ml-[682px]" />
          <h2 className="w-[124px] h-[72px] ml-[622px] font-medium text-[48px] leading-[72px]">Contact</h2>

          <span className="flex items-center">
            <p className="w-[40px] h-[24px] top-[295px] ml-[660px] font-[500px] text-[16px] leading-6">Home</p>
            <ChevronRightIcon
              size={20}
              className="w-5 h-5 sm:cursor-default cursor-pointer sm:hover:text-gray-500 ml-2"
            />
            <p className="w-[41px] h-[24px] top-[295px] left-[740px] font-light text-[16px] leading-6">Contact</p>
          </span>
          
        </div>
      
      
      </div>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Address</h2>
              <p className="text-gray-600">
                235 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Phone</h2>
              <div className="text-gray-600">
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Working Time</h2>
              <div className="text-gray-600">
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 font-medium"
            >
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Abc"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 font-medium"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Abc@def.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="subject" 
              className="block mb-2 font-medium"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="This is an optional"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Hi! I'd like to ask about"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent resize-y min-h-[120px]"
            />
          </div>

          <button 
            type="submit"
            className="w-[237px] px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    
    </div>
    <section className="bg-[#FDF6F0] h-[270px]  md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-[100px] h-[70px] px-[53px] "
              >
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};
