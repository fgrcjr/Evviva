"use client";

import { useGsapAnimation } from "@/lib/gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  useGsapAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-auto md:h-[90vh] flex items-center justify-center bg-gradient-to-b from-sage-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-sage-800">
                Guiding Young Minds
              </h1>
              <p className="text-lg sm:text-xl text-sage-600">
                At our daycare, we believe every child deserves a supportive and
                enriching environment. Join us in fostering curiosity and
                creativity in your child&apos;s early years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact">
                  <Button className="bg-nature-600 hover:bg-nature-700 text-lg px-6 py-4">
                    Schedule a Tour
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" className="text-lg px-6 py-4">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-on-scroll">
              <Image
                src="/hero-image.jpg"
                alt="Children learning and playing"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full max-w-sm md:max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
  
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-sage-800 mb-12">
            Discover Our Daycare&apos;s Exceptional Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                src: "/feature-1.jpg",
                alt: "Safe learning environment",
                title: "Safe, Accessible, and Engaging Learning",
                description: "Our daycare is fully ADA compliant, ensuring a welcoming space for all.",
                link: "/about",
                linkText: "Learn More →",
              },
              {
                src: "/feature-2.jpg",
                alt: "User-friendly experience",
                title: "Easy-to-Use Website for Parents",
                description: "Our mobile-responsive design allows parents to access information anytime, anywhere.",
                link: "/contact",
                linkText: "Sign Up →",
              },
              {
                src: "/feature-3.jpg",
                alt: "Creative activities",
                title: "Engaging Activities for Learning",
                description: "Our attractive visuals create an inviting atmosphere that sparks curiosity.",
                link: "/programs",
                linkText: "Explore →",
              },
            ].map((feature, index) => (
              <div key={index} className="animate-on-scroll text-center">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mb-6 w-full max-w-[300px] mx-auto"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-sage-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sage-600 mb-4">{feature.description}</p>
                <Link href={feature.link}>
                  <Button variant="link" className="text-nature-600">
                    {feature.linkText}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
  
}
