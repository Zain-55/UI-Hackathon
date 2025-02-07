"use client";

import React, { useState } from "react";
import Image from "next/image";
import Meubel from "../../../public/Meubel.png";
import { Search, Heart, ShoppingCart, UserRoundCog } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import SearchComponent from "./Searchbar";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Meubel} alt="Meubel Logo" width={100} height={40} />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Icons for larger screens */}
        <div className="hidden sm:flex items-center gap-4">
          <UserButton />
          <Link href="/login">
            <UserRoundCog className="cursor-pointer hover:text-blue-500" size={24} />
          </Link>
          <Search 
            size={24} 
            className="cursor-pointer hover:text-blue-500" 
            onClick={() => setSearchOpen(!isSearchOpen)} 
          />
          <Heart size={24} className="cursor-pointer hover:text-blue-500" />
          <Link href="/cart">
            <ShoppingCart size={24} className="cursor-pointer hover:text-blue-500" />
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-12  right-10">
          <SearchComponent />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 px-4 py-2">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/shop" className="hover:text-blue-500">Shop</Link>
            <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>
          <div className="flex justify-around items-center gap-4 px-4 py-2">
            <Link href="/login">
              <UserRoundCog size={24} className="cursor-pointer hover:text-blue-500" />
            </Link>
            <Search 
              size={24} 
              className="cursor-pointer hover:text-blue-500" 
              onClick={() => setSearchOpen(!isSearchOpen)} 
            />
            <Heart size={24} className="cursor-pointer hover:text-blue-500" />
            <Link href="/cart">
              <ShoppingCart size={24} className="cursor-pointer hover:text-blue-500" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
