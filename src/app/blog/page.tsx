import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Rectangle from "../../../public/Rectangle.png";
import {
  ChevronRightIcon,
} from "lucide-react";
import Footer from "../components/Footer";
import Logo from "../../../public/Meubel-l.png";
import Ourservises from "@/app/components/Ourservices";
import BlogPosts from "../components/BlogPosts";

export default function FeaturesBanner() {
  return (
    <div>
      <Header />

      {/* Top Section */}
      <div>
        <Image
          src={Rectangle}
          alt="Image"
          height={316}
          className="top-[100px] w-full"
        />

        <div className="absolute bottom-[150px] h-[443px]">
          <Image
            src={Logo}
            alt="Meuble-1"
            className="ml-[681px] sm:ml-[400px] md:ml-[540px] lg:ml-[681px]"
          />
          <h2 className="w-[124px] h-[72px] ml-[660px] sm:ml-[350px] md:ml-[480px] lg:ml-[660px] font-medium text-[48px] leading-[72px]">
            Blog
          </h2>
          <span className="flex items-center">
            <p className="w-[40px] h-[24px] top-[295px] ml-[667px] sm:ml-[350px] md:ml-[480px] lg:ml-[667px] font-[500px] text-[16px] leading-6">
              Home
            </p>
            <ChevronRightIcon
              size={20}
              className="w-5 h-5 sm:cursor-default cursor-pointer sm:hover:text-gray-500 ml-2"
            />
            <p className="w-[41px] h-[24px] top-[295px] left-[740px] sm:left-[480px] md:left-[640px] lg:left-[740px] font-light text-[16px] leading-6">
              Blog
            </p>
          </span>
        </div>
      </div>

      <div>
        <BlogPosts />
      </div>

      <Ourservises />
      <Footer />
    </div>
  );
}
