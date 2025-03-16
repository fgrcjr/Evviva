"use client";

import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGsapAnimation } from "@/lib/gsap";

export default function ToddlerPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Toddler Program | Program</title>
        <meta
          name="description"
          content="Supporting independence and exploration for children aged 18 months to 3 years."
        />
        <meta property="og:title" content="Toddler Program | Program" />
        <meta property="og:description" content="Aged 18 months to 3 years." />
        <meta property="og:image" content="/images/toddler-program.jpg" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b to-white pt-24 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-nature-700">Toddler Program</h1>
          <p className="text-xl text-sage-700">Ages 18 months to 3 years</p>
        </div>

        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image 
            src="/images/programs/toddler.jpg" 
            alt="Toddlers engaged in hands-on learning activities" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <p>
            Our Toddler Program is designed to nurture your child's natural curiosity and growing independence. 
            This is a time of tremendous growth and development, and our carefully prepared environments offer 
            toddlers the freedom to explore, create, and learn through hands-on experiences.
          </p>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Program Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Low teacher-to-child ratios (1:4) ensuring personalized guidance</li>
            <li>Carefully designed environments that promote independence and exploration</li>
            <li>Focus on developing language, fine and gross motor skills, and social interactions</li>
            <li>Introduction to practical life activities like self-care and care of the environment</li>
            <li>Gentle toilet learning support in partnership with families</li>
            <li>Rich sensory experiences and creative expression opportunities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">A Typical Day</h2>
          <p>
            Our toddler day follows a consistent rhythm that provides security while allowing for flexibility:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Morning welcome and free choice of activities</li>
            <li>Group time with songs, stories, and movement</li>
            <li>Snack preparation and community mealtime</li>
            <li>Outdoor exploration in our toddler playground</li>
            <li>Rest time followed by afternoon activities</li>
            <li>Art, music, and sensory experiences throughout the day</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Developmental Focus</h2>
          <p>
            During these formative years, we place special emphasis on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Language development and communication skills</li>
            <li>Social-emotional growth and developing positive relationships</li>
            <li>Fine and gross motor skill refinement</li>
            <li>Building concentration and focus through engaging activities</li>
            <li>Fostering independence and self-confidence</li>
          </ul>

          <div className="bg-sage-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-nature-600 mb-4">Enrollment Information</h3>
            <p>
              We offer full-time and part-time enrollment options for our Toddler Program. 
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