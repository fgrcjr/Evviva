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
        <title>Primary Program | Program</title>
        <meta
          name="description"
          content="Comprehensive education for children aged 3 to 6 years."
        />
        <meta property="og:title" content="Primary Program | Program" />
        <meta property="og:description" content="Ages 3 to 6 years." />
        <meta property="og:image" content="/images/our-story.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b to-white pt-24 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-nature-700">Primary Program</h1>
          <p className="text-xl text-sage-700">Ages 3 to 6 years</p>
        </div>

        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image 
            src="/images/programs/primary.jpg" 
            alt="Children engaged in primary classroom activities" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <p>
            Our Primary Program builds upon the foundation established in earlier years, offering children a rich, 
            integrated curriculum that fosters independence, concentration, and a love of learning. In this multi-age 
            classroom, children benefit from peer learning and develop at their own pace across all areas of development.
          </p>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Curriculum Areas</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Practical Life:</span> Activities that develop coordination, concentration, independence, and order</li>
            <li><span className="font-medium">Sensorial:</span> Materials that refine the senses and build the foundation for abstract thinking</li>
            <li><span className="font-medium">Language:</span> Rich vocabulary development, phonetic awareness, and introduction to reading and writing</li>
            <li><span className="font-medium">Mathematics:</span> Concrete materials that introduce numerical concepts, operations, and geometry</li>
            <li><span className="font-medium">Cultural Studies:</span> Geography, science, botany, zoology, and appreciation of diverse cultures</li>
            <li><span className="font-medium">Art and Music:</span> Creative expression through various media and musical experiences</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">A Typical Day</h2>
          <p>
            Our Primary day provides a balance of structure and freedom:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Morning greeting and community circle</li>
            <li>Extended work period with individual and small group lessons</li>
            <li>Outdoor exploration and physical activity</li>
            <li>Community lunch and practical life activities</li>
            <li>Rest or quiet time for younger children</li>
            <li>Afternoon work period with enrichment activities</li>
            <li>Closing circle and reflection</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Program Benefits</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Development of concentration, self-discipline, and intrinsic motivation</li>
            <li>Strong foundation in literacy and numeracy</li>
            <li>Cultivation of curiosity, critical thinking, and problem-solving skills</li>
            <li>Social development through mixed-age interactions</li>
            <li>Respect for self, others, and the environment</li>
            <li>Preparation for elementary education and lifelong learning</li>
          </ul>

          <div className="bg-sage-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-nature-600 mb-4">Enrollment Information</h3>
            <p>
              We offer full-time and part-time enrollment options for our Primary Program. 
              Children typically attend five days per week to benefit fully from the consistency 
              and comprehensive curriculum.
            </p>
            <Link href="/contact" className="inline-block mt-4 bg-nature-600 hover:bg-nature-700 text-white py-2 px-6 rounded-md transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}