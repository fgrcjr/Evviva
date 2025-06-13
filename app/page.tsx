"use client";

import { useGsapAnimation } from "@/lib/gsap";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

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

export default function Page() {
  useGsapAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Guiding Young Minds"
        description="At our daycare, we believe every child deserves a supportive and enriching environment. Join us in fostering curiosity and creativity in your child's early years."
        imageSrc="/hero-image.jpg"
        imageAlt="Children learning and playing"
        buttons={defaultHeroButtons}
      />

      <FeaturesSection 
        title="Discover Our Daycare's Exceptional Features" 
        features={defaultFeatures} 
      />
    </div>
  );
}
