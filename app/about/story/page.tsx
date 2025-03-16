"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";

export default function OurStoryPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Our Story | About Us</title>
        <meta
          name="description"
          content="Discover the journey of our school from its humble beginnings to the present day. Learn about our mission, vision, and commitment to quality education."
        />
        <meta property="og:title" content="Our Story | About Us" />
        <meta property="og:description" content="Learn about our journey, mission, and vision." />
        <meta property="og:image" content="/images/our-story.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-on-scroll">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-4">
                Our journey began in 2025 with a vision to create an educational environment 
                that nurtures the whole child and fosters a love of learning that lasts a lifetime.
              </p>
              
              <div className="my-8">
                <img 
                  src="/images/our-story.jpg" 
                  alt="Our school's founding moment" 
                  className="rounded-lg w-full h-auto shadow-md"
                />
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">The Beginning</h2>
              <p>
                Founded by a group of passionate educators and parents, our school started as a small 
                classroom with just 15 students. Our founders were united by a common belief in the 
                potential of every child and the importance of providing an environment where children 
                could develop naturally according to their individual needs and capabilities.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Growth</h2>
              <p>
                Over the years, we've grown from that single classroom to our current campus, 
                expanding our programs while maintaining our commitment to excellence in education. 
                Each step of our growth has been guided by our founding principles and the needs 
                of our community.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Today</h2>
              <p>
                Today, we serve hundreds of students across multiple age groups, providing a 
                nurturing environment where children develop independence, critical thinking skills, 
                and a genuine love for learning. Our dedicated staff continues to uphold the vision 
                of our founders while embracing innovative approaches to education.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <p className="italic">
                  "We believe that education is not just about academic achievement, but about 
                  developing well-rounded individuals who will contribute positively to society."
                </p>
                <p className="mt-2 font-medium">— Our Founder</p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Looking Forward</h2>
              <p>
                As we look to the future, we remain committed to our core values while continuously 
                evolving to meet the changing needs of our students and community. We're excited 
                about the journey ahead and invite you to be part of our story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}
