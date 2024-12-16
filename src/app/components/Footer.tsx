import React from 'react';
import Image from 'next/image';
import FooterImage from '../../../public/Footer.png';

const page = () => {
  return (
    <footer className="w-full h-[505px] my-[350px] px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with Help and Newsletter */}
        

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Address */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Funiro.</h2>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* Links - First Column */}
          <div className="space-y-4">
            
            <nav>
              
              <ul className="space-y-3 w-[710px] h-[312px]">
              <li><a href="#" className="text-sm hover:text-gray-900">Link</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Shop</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Links - Second Column */}
          <div className="space-y-4">
            <nav>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-gray-900">Payment Options</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Privacy Policies</a></li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-3 py-2  rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-black  text-sm rounded transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
export default page
