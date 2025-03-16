"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";

export default function MissionVisionPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Mission & Vision | About Us</title>
        <meta
          name="description"
          content="Our mission, vision, and core values that guide our educational approach"
        />
        <meta property="og:title" content="Mission & Vision | About Us" />
        <meta property="og:description" content="Learn about our journey, mission, and vision." />
        <meta property="og:image" content="/images/mission-vision.jpg" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-on-scroll">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <div className="bg-blue-50 p-8 rounded-lg shadow-sm mb-8">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
                  <p className="text-lg">
                    To provide a nurturing and stimulating environment where children develop a 
                    passion for learning, independence, and respect for themselves and others, 
                    preparing them to become confident, creative, and responsible members of society.
                  </p>
                </div>
                
                <div className="bg-green-50 p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Vision</h2>
                  <p className="text-lg">
                    To be recognized as a leading educational institution that empowers children 
                    to reach their full potential intellectually, emotionally, and socially, 
                    fostering a lifelong love of learning and contributing to a more peaceful 
                    and harmonious world.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <h3 className="text-xl font-medium mb-2">Respect</h3>
                    <p>
                      We foster mutual respect among children, staff, and families, 
                      honoring each person's unique qualities and contributions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <h3 className="text-xl font-medium mb-2">Independence</h3>
                    <p>
                      We encourage children to think and act for themselves, 
                      developing self-reliance and confidence in their abilities.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                    <h3 className="text-xl font-medium mb-2">Community</h3>
                    <p>
                      We build a supportive community where collaboration, 
                      empathy, and social responsibility are valued and practiced.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h3 className="text-xl font-medium mb-2">Excellence</h3>
                    <p>
                      We strive for excellence in all aspects of our educational 
                      program, continuously improving our methods and environment.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Our Educational Philosophy</h2>
                <p>
                  Our educational approach is based on the belief that children are naturally 
                  curious and capable learners. We provide a carefully prepared environment 
                  that allows children to explore, discover, and develop at their own pace.
                </p>
                <p className="mt-4">
                  We believe in:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Respecting each child's individual development and learning style</li>
                  <li>Fostering independence and self-discipline</li>
                  <li>Encouraging curiosity, creativity, and critical thinking</li>
                  <li>Promoting peace, global awareness, and environmental stewardship</li>
                  <li>Building strong partnerships between school and family</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}