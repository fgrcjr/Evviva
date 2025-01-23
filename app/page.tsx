"use client";

import { useGsapAnimation } from '@/lib/gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  useGsapAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-sage-800">
                Guiding Young Minds
              </h1>
              <p className="text-xl text-sage-600">
                At our daycare, we believe every child deserves a supportive and enriching environment. Join us in fostering curiosity and creativity in your child's early years.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-nature-600 hover:bg-nature-700 text-lg px-8 py-6">
                    Schedule a Tour
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" className="text-lg px-8 py-6">
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
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sage-800 mb-16">
            Discover Our Daycare's Exceptional Features for Your Child's Growth and Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-on-scroll text-center">
              <Image
                src="/feature-1.jpg"
                alt="Safe learning environment"
                width={400}
                height={300}
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-semibold text-sage-800 mb-4">
                Experience a Safe, Accessible, and Engaging Learning Environment for Every Child
              </h3>
              <p className="text-sage-600 mb-4">
                Our daycare is fully ADA compliant, ensuring a welcoming space for all.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-nature-600">
                  Learn More →
                </Button>
              </Link>
            </div>
            <div className="animate-on-scroll text-center">
              <Image
                src="/feature-2.jpg"
                alt="User-friendly experience"
                width={400}
                height={300}
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-semibold text-sage-800 mb-4">
                Navigate Our User-Friendly Website with Ease and Convenience
              </h3>
              <p className="text-sage-600 mb-4">
                Our mobile-responsive design allows parents to access information anytime, anywhere.
              </p>
              <Link href="/contact">
                <Button variant="link" className="text-nature-600">
                  Sign Up →
                </Button>
              </Link>
            </div>
            <div className="animate-on-scroll text-center">
              <Image
                src="/feature-3.jpg"
                alt="Creative activities"
                width={400}
                height={300}
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-semibold text-sage-800 mb-4">
                Engaging Activities That Spark Curiosity and Learning
              </h3>
              <p className="text-sage-600 mb-4">
                Our attractive visuals create an inviting atmosphere that sparks children's curiosity.
              </p>
              <Link href="/programs">
                <Button variant="link" className="text-nature-600">
                  Explore →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}