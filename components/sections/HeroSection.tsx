"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroButton {
  href: string;
  label: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  className?: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  buttons?: HeroButton[];
  backgroundClass?: string;
  containerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  imageClass?: string;
  layout?: "left" | "right" | "center";
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageHeight = 400,
  buttons = [],
  backgroundClass = "relative h-auto md:h-[90vh] flex items-center justify-center bg-gradient-to-b from-sage-50 to-white py-16",
  containerClass = "container mx-auto px-4",
  titleClass = "text-3xl sm:text-4xl md:text-6xl font-bold text-sage-800",
  descriptionClass = "text-lg sm:text-xl text-sage-600",
  imageClass = "rounded-lg shadow-xl w-full max-w-sm md:max-w-full mx-auto",
  layout = "left",
}: HeroSectionProps) => {
  const getGridClasses = () => {
    switch (layout) {
      case "right":
        return "grid grid-cols-1 md:grid-cols-2 gap-12 items-center";
      case "center":
        return "flex flex-col items-center text-center gap-12";
      default:
        return "grid grid-cols-1 md:grid-cols-2 gap-12 items-center";
    }
  };

  const getTextAlignment = () => {
    switch (layout) {
      case "center":
        return "text-center";
      case "right":
        return "text-center md:text-right";
      default:
        return "text-center md:text-left";
    }
  };

  const getButtonAlignment = () => {
    switch (layout) {
      case "center":
        return "justify-center";
      case "right":
        return "justify-center md:justify-end";
      default:
        return "justify-center md:justify-start";
    }
  };

  return (
    <section className={backgroundClass}>
      <div className={containerClass}>
        <div className={getGridClasses()}>
          <div className={`animate-on-scroll space-y-6 ${getTextAlignment()}`}>
            {subtitle && (
              <p className="text-sm uppercase tracking-wide text-sage-500 font-semibold">
                {subtitle}
              </p>
            )}
            <h1 className={titleClass}>{title}</h1>
            <p className={descriptionClass}>{description}</p>

            {buttons.length > 0 && (
              <div
                className={`flex flex-col sm:flex-row gap-4 ${getButtonAlignment()}`}
              >
                {buttons.map((button, index) => (
                  <Link key={index} href={button.href}>
                    <Button
                      variant={button.variant || "default"}
                      className={
                        button.className ||
                        (index === 0
                          ? "bg-nature-600 hover:bg-nature-700 text-lg px-6 py-4"
                          : "text-lg px-6 py-4")
                      }
                    >
                      {button.label}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {layout !== "center" && (
            <div className="animate-on-scroll">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className={imageClass}
              />
            </div>
          )}
        </div>

        {layout === "center" && (
          <div className="animate-on-scroll mt-8">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={imageClass}
            />
          </div>
        )}
      </div>
    </section>
  );
};
