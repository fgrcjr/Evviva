
"use client";

import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGsapAnimation } from "@/lib/gsap";

export default function PrimaryPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Pre-school Program | Program</title>
        <meta
          name="description"
          content="Comprehensive education for children aged 3 to 6 years."
        />
        <meta property="og:title" content="Pre-school Program | Program" />
        <meta property="og:description" content="Ages 3 to 6 years." />
        <meta property="og:image" content="/images/our-story.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b to-white pt-24 animate-fade-up">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold text-nature-700">Pre-school Program</h1>
              <p className="text-xl text-sage-700">Ages 3 to 5 years</p>
              <p className="text-gray-700 animate-on-scroll">
                Our Pre-school Program builds upon the foundation established in earlier years, offering children a rich, 
                integrated curriculum that fosters independence, concentration, and a love of learning. In this multi-age 
                classroom, children benefit from peer learning and develop at their own pace across all areas of development.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden animate-on-scroll">
              <Image 
                src="/images/programs/primary.jpg" 
                alt="Children engaged in primary classroom activities" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Curriculum Areas Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 bg-sage-50 py-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4 animate-on-scroll">
              <h2 className="text-2xl font-semibold text-nature-600">Curriculum Areas</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Activities that develop coordination, concentration, independence, and order</li>
                <li>Materials that refine the senses and build the foundation for abstract thinking</li>
                <li>Rich vocabulary development, phonetic awareness, and introduction to reading and writing</li>
                <li>Concrete materials that introduce numerical concepts, operations, and geometry</li>
                <li>Geography, science, botany, zoology, and appreciation of diverse cultures</li>
                <li>Creative expression through various media and musical experiences</li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden animate-on-scroll">
              <Image 
                src="/images/programs/preschool-daily.jpg" 
                alt="Children engaged in daily preschool activities" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Daily Schedule Section with Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4 animate-on-scroll">
              <h2 className="text-2xl font-semibold text-nature-600">A Typical Day</h2>
              <p className="text-gray-700">
                Our Primary day provides a balance of structure and freedom:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Morning greeting and community circle</li>
                <li>Extended work period with individual and small group lessons</li>
                <li>Outdoor exploration and physical activity</li>
                <li>Community lunch and practical life activities</li>
                <li>Rest or quiet time for younger children</li>
                <li>Afternoon work period with enrichment activities</li>
                <li>Closing circle and reflection</li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden animate-on-scroll">
              <Image 
                src="/images/programs/preschool-daily.jpg" 
                alt="Children engaged in daily preschool activities" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Program Benefits Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 bg-sage-50 py-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4 animate-on-scroll">
              <h2 className="text-2xl font-semibold text-nature-600">Program Benefits</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Development of concentration, self-discipline, and intrinsic motivation</li>
                <li>Strong foundation in literacy and numeracy</li>
                <li>Cultivation of curiosity, critical thinking, and problem-solving skills</li>
                <li>Social development through mixed-age interactions</li>
                <li>Respect for self, others, and the environment</li>
                <li>Preparation for elementary education and lifelong learning</li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden animate-on-scroll">
              <Image 
                src="/images/programs/preschool-benefits.jpg" 
                alt="Preschool children developing skills through play" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Enrollment Information */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-sage-200 animate-on-scroll">
            <h3 className="text-xl font-semibold text-nature-600 mb-4">Enrollment Information</h3>
            <p className="text-gray-700 mb-6">
              We offer full-time and part-time enrollment options for our Primary Program. 
              Children typically attend five days per week to benefit fully from the consistency 
              and comprehensive curriculum.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="inline-block bg-nature-600 hover:bg-nature-700 text-white py-3 px-8 rounded-md transition-colors text-center">
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
