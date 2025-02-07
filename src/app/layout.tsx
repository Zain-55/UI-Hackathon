'use client'
import {
  ClerkProvider,
  
} from "@clerk/nextjs";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
        <ClerkProvider>
        <body className={inter.className + " text-gray-900 "}>
         
            {children}
         
        </body>
    </ClerkProvider>
      </html>
  );
}
