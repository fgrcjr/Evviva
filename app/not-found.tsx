"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const [logoError, setLogoError] = useState(false);
  const [illustrationError, setIllustrationError] = useState(false);

  return (
    <div className="min-h-screen bg-sage-50/30">
      {/* Main content */}
      <main className="flex flex-col items-center justify-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="text-center">
          {/* Logo or decorative element */}
          <div className="mb-8 relative w-24 h-24 mx-auto">
            {logoError ? (
              <div className="w-24 h-24 flex items-center justify-center bg-sage-100 rounded-full">
                <span className="text-2xl font-bold text-sage-700">EM</span>
              </div>
            ) : (
              <Image 
                src="/logo_only.png" 
                alt="Evviva Montessori" 
                fill
                className="object-contain"
                onError={() => setLogoError(true)}
              />
            )}
          </div>
          
          {/* Error status */}
          <h1 className="text-8xl font-bold text-sage-700 mb-4">404</h1>
          
          {/* Error message */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          {/* Decorative element - plant or nature illustration */}
          {!illustrationError && (
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image 
                src="/images/plant-illustration.png" 
                alt="Plant illustration" 
                fill
                className="object-contain"
                onError={() => setIllustrationError(true)}
              />
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="outline" 
              className="flex items-center gap-2 border-sage-600 text-sage-700 hover:bg-sage-100"
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
            
            <Button 
              asChild
              className="flex items-center gap-2 bg-nature-600 hover:bg-nature-700"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      {/* Footer-like section */}
      <div className="py-8 text-center border-t border-sage-200 bg-white">
        <p className="text-gray-600">
          Need help? <Link href="/contact" className="text-sage-700 hover:underline">Contact Us</Link>
        </p>
      </div>
    </div>
  );
}