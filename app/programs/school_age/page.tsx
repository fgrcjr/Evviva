"use client";

import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGsapAnimation } from "@/lib/gsap";

export default function ElementaryPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>School-Age | Program</title>
        <meta
          name="description"
          content="Engaging education for children aged 6 to 12 years."
        />
        <meta property="og:title" content="Elementary Program | Program" />
        <meta property="og:description" content="Aged 6 to 12 years." />
        <meta property="og:image" content="/images/elementary-program.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b to-white pt-24 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-nature-700">School-Age Program</h1>
          <p className="text-xl text-sage-700">5 years and older</p>
        </div>

        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image 
            src="/images/programs/elementary.jpg" 
            alt="Elementary students engaged in collaborative learning" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <p>
            Our School-Age Program builds on the foundation established in the Primary years, offering an 
            integrated, project-based curriculum that responds to the elementary child's heightened social 
            nature, expanding imagination, and growing capacity for abstract thinking and moral reasoning.
          </p>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Curriculum Approach</h2>
          <p>
            The elementary curriculum is presented as the "Great Lessons" - five key narratives that spark 
            the imagination and provide a framework for exploring all subject areas. These lessons address:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Story of the Universe and Earth</li>
            <li>The Coming of Life</li>
            <li>The Coming of Humans</li>
            <li>The Story of Language</li>
            <li>The Story of Numbers</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Academic Areas</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Language Arts:</span> Advanced reading, writing, grammar, literature, and research skills</li>
            <li><span className="font-medium">Mathematics:</span> Concrete to abstract progression in arithmetic, geometry, algebra, and statistics</li>
            <li><span className="font-medium">Science:</span> Biology, chemistry, physics, astronomy, and ecology through hands-on experiments</li>
            <li><span className="font-medium">History:</span> Timeline studies, civilizations, and cultural development</li>
            <li><span className="font-medium">Geography:</span> Physical, political, and economic geography with map skills</li>
            <li><span className="font-medium">Arts:</span> Visual arts, music, drama, and movement integrated throughout the curriculum</li>
            <li><span className="font-medium">Technology:</span> Responsible use of digital tools for research, creation, and communication</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">Program Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Multi-age classrooms (6-9 and 9-12) that foster leadership and peer learning</li>
            <li>Project-based learning that integrates multiple subjects</li>
            <li>Student-led conferences and portfolio assessments</li>
            <li>Community service and environmental stewardship</li>
            <li>Field trips and "going out" experiences that extend learning beyond the classroom</li>
            <li>Specialized instruction in world languages, physical education, and arts</li>
          </ul>

          <h2 className="text-2xl font-semibold text-nature-600 mt-8">A Typical Day</h2>
          <p>
            While each day varies based on projects and activities, a typical schedule includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Morning community meeting</li>
            <li>Extended work periods with individual and small group lessons</li>
            <li>Collaborative project time</li>
            <li>Outdoor recreation and physical education</li>
            <li>Specialized classes (language, art, music)</li>
            <li>Community service and care of environment</li>
            <li>Reflection and planning time</li>
          </ul>

          <div className="bg-sage-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-nature-600 mb-4">Enrollment Information</h3>
            <p>
              Our Elementary Program operates on a full-day, five-day-per-week schedule. 
              Students typically transition from our Primary Program, though we welcome 
              transfers from other schools with an orientation process.
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