"use client";

import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGsapAnimation } from "@/lib/gsap";

export default function InfantsPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Infant Program | Program</title>
        <meta
          name="description"
          content="Nurturing care and development for infants aged 6 weeks to 18 months."
        />
        <meta property="og:title" content="Infant Program | Program" />
        <meta property="og:description" content="Infant learning program" />
        <meta property="og:image" content="/images/infants-program.jpg" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b to-white pt-24 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-nature-700">Infant Program</h1>
          <p className="text-xl text-sage-700">Ages 6 weeks to 18 months</p>
        </div>

        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image 
            src="/images/programs/infants.jpg" 
            alt="Infants in a nurturing classroom environment" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <p>
            Our Infant Program provides a warm, nurturing environment where babies can explore and develop at their own pace. 
            Our specially trained teachers create personalized care plans in partnership with parents to ensure each child's 
            unique needs are met.
          </p>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Program Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Low teacher-to-child ratios (1:3) ensuring individualized attention</li>
            <li>Sensory-rich environments designed for exploration and discovery</li>
            <li>Daily communication with parents about feeding, sleeping, and developmental milestones</li>
            <li>Introduction to baby sign language to enhance pre-verbal communication</li>
            <li>Age-appropriate activities promoting cognitive, physical, and social development</li>
            <li>Peaceful, calm spaces that respect each child's natural rhythms</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">A Typical Day</h2>
          <p>
            While we follow each infant's individual schedule for feeding and napping, our day includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gentle morning greetings and check-ins with parents</li>
            <li>Sensory play and tummy time</li>
            <li>Outdoor time (weather permitting) in our specially designed infant garden</li>
            <li>Music, movement, and language activities</li>
            <li>One-on-one interaction with caregivers</li>
            <li>Peaceful nap times in our dedicated sleeping area</li>
          </ul>

          <div className="bg-sage-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-nature-600 mb-4">Enrollment Information</h3>
            <p>
              We offer full-time and part-time enrollment options for our Infant Program. 
              To schedule a tour or learn more about availability, please contact our 
              admissions office.
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