import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  link?: {
    href: string;
    label: string;
    variant?:
      | "default"
      | "outline"
      | "link"
      | "ghost"
      | "secondary"
      | "destructive";
  };
  icon?: LucideIcon;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  layout?: "vertical" | "horizontal";
}

export const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt = title,
  imageWidth = 400,
  imageHeight = 200,
  link,
  icon: Icon,
  className = "animate-on-scroll text-center flex flex-col items-center",
  imageClassName = "rounded-lg shadow-md mb-6 w-[400px] h-[200px] object-cover mx-auto",
  titleClassName = "text-lg sm:text-xl font-semibold text-sage-800 mb-4",
  descriptionClassName = "text-sage-600 mb-4",
  layout = "vertical",
}: FeatureCardProps) => {
  const containerClass =
    layout === "horizontal"
      ? `${className} md:flex-row md:text-left md:items-start`
      : className;

  return (
    <div className={containerClass}>
      {Icon && <Icon className="h-12 w-12 text-nature-600 mb-4" />}

      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
        />
      )}

      <div className={layout === "horizontal" ? "md:ml-6" : ""}>
        <h3 className={titleClassName}>{title}</h3>
        <p className={descriptionClassName}>{description}</p>

        {link && (
          <Link href={link.href}>
            <Button
              variant={link.variant || "link"}
              className="text-nature-600"
            >
              {link.label}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
