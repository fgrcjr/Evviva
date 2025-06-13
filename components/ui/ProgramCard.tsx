import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  age: string;
  description: string;
  activities: string[];
  imageSrc: string;
  imageAlt?: string;
  icon?: LucideIcon;
  link?: {
    href: string;
    label: string;
  };
  className?: string;
  imageClassName?: string;
  layout?: "vertical" | "horizontal";
}

export const ProgramCard = ({
  title,
  age,
  description,
  activities,
  imageSrc,
  imageAlt,
  icon: Icon,
  link,
  className = "animate-on-scroll border-sage-200 hover:shadow-lg transition-shadow duration-300",
  imageClassName = "aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t-lg",
  layout = "vertical",
}: ProgramCardProps) => {
  const cardContent = (
    <>
      <div className={imageClassName}>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="h-8 w-8 text-nature-600" />}
          <div>
            <CardTitle className="text-2xl text-sage-800">{title}</CardTitle>
            <CardDescription className="text-sage-600">{age}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sage-700 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start gap-2 text-sage-600">
              <span className="inline-block h-2 w-2 mt-2 rounded-full bg-nature-400" />
              <span>{activity}</span>
            </li>
          ))}
        </ul>
        {link && (
          <Link href={link.href}>
            <Button variant="outline" className="w-full">
              {link.label}
            </Button>
          </Link>
        )}
      </CardContent>
    </>
  );

  if (layout === "horizontal") {
    return (
      <Card className={`${className} md:flex md:flex-row`}>
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover rounded-l-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-3 mb-2">
              {Icon && <Icon className="h-8 w-8 text-nature-600" />}
              <div>
                <CardTitle className="text-2xl text-sage-800">
                  {title}
                </CardTitle>
                <CardDescription className="text-sage-600">
                  {age}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sage-700 mb-4">{description}</p>
            <ul className="space-y-2 mb-6">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sage-600"
                >
                  <span className="inline-block h-2 w-2 mt-2 rounded-full bg-nature-400" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
            {link && (
              <Link href={link.href}>
                <Button variant="outline" className="w-full">
                  {link.label}
                </Button>
              </Link>
            )}
          </CardContent>
        </div>
      </Card>
    );
  }

  return <Card className={className}>{cardContent}</Card>;
};
