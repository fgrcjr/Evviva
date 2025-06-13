"use client";

import { useGsapAnimation } from "@/lib/gsap";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

interface HomePageProps {
  heroTitle?: string;
  heroDescription?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroButtons?: Array<{
    href: string;
    label: string;
    variant?:
      | "default"
      | "outline"
      | "secondary"
      | "ghost"
      | "link"
      | "destructive";
  }>;
  featuresTitle?: string;
  features?: Array<{
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    link?: {
      href: string;
      label: string;
    };
  }>;
}

const defaultHeroButtons = [
  {
    href: "/contact",
    label: "Schedule a Tour",
    variant: "default" as const,
  },
  {
    href: "/programs",
    label: "Explore Programs",
    variant: "outline" as const,
  },
];

const defaultFeatures = [
  {
    title: "Safe, Accessible, and Engaging Learning",
    description:
      "Our daycare is fully ADA compliant, ensuring a welcoming space for all.",
    imageSrc: "/feature-1.jpg",
    imageAlt: "Safe learning environment",
    link: {
      href: "/about",
      label: "Learn More →",
    },
  },
  {
    title: "Personalized attention for each child's needs",
    description:
      "Trained professionals passionate about early childhood education.",
    imageSrc: "/feature-2.jpg",
    imageAlt: "User-friendly experience",
    link: {
      href: "/contact",
      label: "Sign Up →",
    },
  },
  {
    title: "Engaging Activities for Learning",
    description:
      "Our attractive visuals create an inviting atmosphere that sparks curiosity.",
    imageSrc: "/feature-3.jpg",
    imageAlt: "Creative activities",
    link: {
      href: "/programs",
      label: "Explore →",
    },
  },
];

export default function Home({
  heroTitle = "Guiding Young Minds",
  heroDescription = "At our daycare, we believe every child deserves a supportive and enriching environment. Join us in fostering curiosity and creativity in your child's early years.",
  heroImageSrc = "/hero-image.jpg",
  heroImageAlt = "Children learning and playing",
  heroButtons = defaultHeroButtons,
  featuresTitle = "Discover Our Daycare's Exceptional Features",
  features = defaultFeatures,
}: HomePageProps) {
  useGsapAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        imageSrc={heroImageSrc}
        imageAlt={heroImageAlt}
        buttons={heroButtons}
      />

      <FeaturesSection title={featuresTitle} features={features} />
    </div>
  );
}
