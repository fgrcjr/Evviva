"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Box } from "lucide-react";

export default function OurStoryPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Our Story | About Us</title>
        <meta
          name="description"
          content="Discover the journey of our school from its humble beginnings to the present day."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6 font-sans">
                Discover Our Journey<br />in Child Development
              </h1>
              <p className="text-lg text-sage-600 mb-8 font-poppins">
                At our daycare, we believe in nurturing each child's unique potential
                through a Montessori approach. Our dedicated team creates a safe and
                engaging environment that fosters curiosity and a love for learning.
              </p>
              <div className="flex gap-4">
                <Link href="/about">
                  <Button className="bg-nature-600 hover:bg-nature-700">Learn More</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
            <div className="animate-on-scroll">
              <Image
                src="/images/our-story/hero-image.jpg"
                alt="Children learning and playing"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* The Heart Behind Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <Image
                src="/images/our-story/founder-vision.jpg"
                alt="Our founder's vision"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <span className="text-nature-600 font-semibold mb-2 block">Inspire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 font-sans">
                The Heart Behind Our<br />Daycare Journey
              </h2>
              <p className="text-lg text-sage-600 mb-8 font-poppins">
                Our founder's passion for early childhood education ignited a vision to
                create a nurturing space. This daycare embodies a commitment to fostering
                growth and curiosity in every child.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <Box className="h-8 w-8 text-nature-600 mb-4" />
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Founder's Vision</h3>
                  <p className="text-sage-600 font-poppins">
                    Driven by a love for learning and community, our founder's journey began.
                  </p>
                </div>
                <div>
                  <Box className="h-8 w-8 text-nature-600 mb-4" />
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Inspiration Behind</h3>
                  <p className="text-sage-600 font-poppins">
                    The desire to create a safe, engaging environment for children sparked this
                    initiative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="text-nature-600 font-semibold mb-2 block">Nurturing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 font-sans">
                Discover the Benefits of<br />Our Unique Approach
              </h2>
              <p className="text-lg text-sage-600 mb-8 font-poppins">
                Our Montessori-inspired daycare fosters holistic development in children.
                Over the years, we've seen remarkable growth in their emotional, social,
                and intellectual skills.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <Box className="h-8 w-8 text-nature-600 mb-4" />
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Individual Growth</h3>
                  <p className="text-sage-600 font-poppins">
                    Every child receives personalized attention to nurture their unique talents
                    and interests.
                  </p>
                </div>
                <div>
                  <Box className="h-8 w-8 text-nature-600 mb-4" />
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Community Engagement</h3>
                  <p className="text-sage-600 font-poppins">
                    Children learn the importance of teamwork and empathy through
                    collaborative activities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/programs">
                  <Button className="bg-nature-600 hover:bg-nature-700">Learn More</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
            <div className="animate-on-scroll">
              <Image
                src="/images/our-story/benefits.jpg"
                alt="Children engaging in activities"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Journey Together Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Image
                src="/images/our-story/journey.jpg"
                alt="Our journey together"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 font-sans">
                Our Journey Together
              </h2>
              <div className="prose prose-lg text-sage-600 font-poppins">
                <p>
                  At our daycare, we believe that every child's journey is unique and deserves to be
                  celebrated. Our story began with a vision to create a safe and nurturing environment
                  where children can explore, learn, and grow at their own pace.
                </p>
                <p>
                  Our dedicated team of educators is passionate about fostering a love for learning
                  through hands-on experiences. We incorporate the Montessori philosophy, allowing
                  children to engage with materials that spark their curiosity and creativity.
                </p>
                <p>
                  As we continue to evolve, our commitment to building a community of lifelong
                  learners remains steadfast. We strive to instill values of empathy, cooperation,
                  and responsibility in every child.
                </p>
                <p>
                  Join us as we embark on this incredible adventure of discovery and growth. Together,
                  we can inspire the next generation to thrive and make meaningful contributions to
                  the world around them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 font-sans">
              Discover Our Engaging Programs
            </h2>
            <p className="text-lg text-sage-600 mb-8 max-w-2xl mx-auto font-poppins">
              Join our community and give your child the gift of quality education in a
              nurturing environment.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/programs">
                <Button className="bg-nature-600 hover:bg-nature-700">Learn More</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Visit</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}