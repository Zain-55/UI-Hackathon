import React from "react";
import Image from "next/image";
import Meubel from "../../../public/Meubel.png";
import { Search, Heart, ShoppingCart, UserRoundCog } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Image src={Meubel} alt="Meubel Logo" width={100} height={40} />
        </div>

        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <Search size={24} />
          </button>
        </div>

        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-500">
            Home
          </a>
          <a href="/shop" className="hover:text-blue-500">
            Shop
          </a>
          <a href="/blog" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <UserRoundCog
            size={24}
            className="sm:cursor-default cursor-pointer sm:hover:text-gray-500 hover:text-blue-500"
          />
          <Search
            size={24}
            className="sm:cursor-default cursor-pointer sm:hover:text-gray-500 hover:text-blue-500"
          />
          <Heart
            size={24}
            className="sm:cursor-default cursor-pointer sm:hover:text-gray-500 hover:text-blue-500"
          />
          <ShoppingCart
            size={24}
            className="sm:cursor-default cursor-pointer sm:hover:text-gray-500 hover:text-blue-500"
          />
        </div>
      </div>

      <div className="sm:hidden flex flex-col gap-4 px-4 py-2">
      <a href="/shop" className="hover:text-blue-500">
          Home
        </a>
        <a href="/shop" className="hover:text-blue-500">
          Shop
        </a>
        <a href="/Cart" className="hover:text-blue-500">
          About
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </header>
  );
}
