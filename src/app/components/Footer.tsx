import React from 'react';
import Image from 'next/image';
import FooterImage from '../../../public/Footer.png';

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      {/* Footer Wrapper */}
      <div className="relative">
        {/* Responsive Footer Image */}
        <Image 
          src={FooterImage} 
          alt="Decorative footer image" 
          layout="responsive" 
          width={1440} 
          height={400} 
          className="object-cover"
          priority
        />
      </div>

      {/* Footer Content */}
      <div className="bg-gray-100 p-6 text-center text-sm text-gray-600">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-blue-500 hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
