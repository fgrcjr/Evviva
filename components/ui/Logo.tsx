"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
}

export const Logo = ({
  href = "/",
  logoSrc = "/logo_only.png",
  logoAlt = "Evviva Montessori",
  width = 691,
  height = 254,
  className = "h-12 w-auto sm:h-14 md:h-16 lg:h-20",
  fallbackText = "Evviva Montessori",
  priority = true,
}: LogoProps) => {
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    console.error("Failed to load logo image");
    setLogoError(true);
  };

  const LogoContent = () => (
    <>
      {logoError ? (
        <div className="font-bold text-xl text-sage-700">{fallbackText}</div>
      ) : (
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          onError={handleLogoError}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex justify-center items-center space-x-2">
        <LogoContent />
      </Link>
    );
  }

  return (
    <div className="flex justify-center items-center space-x-2">
      <LogoContent />
    </div>
  );
};
