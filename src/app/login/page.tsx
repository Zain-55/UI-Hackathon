"use client";

import React from 'react';
import { SignIn } from '@clerk/nextjs';

export default function LogInPage() {
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-[url('https://your-image-url.co')">
            <div className="absolute inset-0 "></div>
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md  sm:p-8 rounded-lg z-10 mx-4 sm:mx-0">
                    <SignIn routing="hash"  />
                </div>
            </div>
        </div>
    );
}
