"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "Primary Classrooms",
    description: "Our primary classrooms are designed for children ages 3-6 and feature child-sized furniture, accessible materials, and distinct areas for different types of activities.",
    image: "/images/facilities/primary-classroom.jpg",
    features: [
      "Natural lighting and plants",
      "Low shelves with carefully arranged materials",
      "Practical life area",
      "Sensorial materials section",
      "Language and mathematics areas",
      "Art and music spaces"
    ]
  },
  {
    id: 2,
    name: "Elementary Classrooms",
    description: "Our elementary environments serve children ages 6-12 and are designed to support collaborative work, research, and exploration of complex concepts.",
    image: "/images/facilities/elementary-classroom.jpg",
    features: [
      "Research stations with reference materials",
      "Group work tables",
      "Advanced mathematics materials",
      "Science exploration area",
      "Reading corner with diverse literature",
      "Technology resources"
    ]
  },
  {
    id: 3,
    name: "Outdoor Learning Spaces",
    description: "Our campus includes thoughtfully designed outdoor areas that extend the learning environment beyond the classroom walls.",
    image: "/images/facilities/outdoor-space.jpg",
    features: [
      "Natural playground with climbing structures",
      "Gardening areas for each class",
      "Outdoor art space",
      "Nature trail with indigenous plants",
      "Weather station",
      "Covered outdoor classroom"
    ]
  },
  {
    id: 4,
    name: "Art Studio",
    description: "Our dedicated art studio provides space for children to explore various artistic media and express their creativity.",
    image: "/images/facilities/art-studio.jpg",
    features: [
      "Natural light from skylights",
      "Variety of art materials and tools",
      "Display space for student work",
      "Pottery wheel and kiln",
      "Washable surfaces for easy cleanup",
      "Storage for ongoing projects"
    ]
  },
  {
    id: 5,
    name: "Library",
    description: "Our school library offers a rich collection of books and resources to support research, literacy, and a love of reading.",
    image: "/images/facilities/library.jpg",
    features: [
      "Age-appropriate book collections",
      "Comfortable reading nooks",
      "Research computers",
      "Storytelling area",
      "Reference materials",
      "Rotating themed displays"
    ]
  },
  {
    id: 6,
    name: "Multi-Purpose Hall",
    description: "This flexible space hosts community gatherings, performances, physical education, and special events.",
    image: "/images/facilities/multipurpose-hall.jpg",
    features: [
      "Stage for performances",
      "Audio-visual equipment",
      "Sports equipment storage",
      "Flexible seating arrangements",
      "Natural lighting",
      "Indoor garden area"
    ]
  }
];

export default function FacilitiesPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Our Facilities | About Us</title>
        <meta
          name="description"
          content="Explore our thoughtfully designed campus featuring primary and elementary classrooms, outdoor learning spaces, art studio, library, and multi-purpose hall."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6 font-sans">
                Our Facilities
              </h1>
              <p className="text-lg text-sage-600 max-w-2xl mx-auto font-poppins">
                Explore our thoughtfully designed campus where every space is carefully 
                prepared to meet the developmental needs of our students.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12 font-poppins">
              <p>
                Our campus is thoughtfully designed to support children's natural development 
                and curiosity. Each space is carefully prepared to meet the developmental needs 
                of the children who use it, with appropriate materials that invite exploration, 
                concentration, and independence.
              </p>
              
              <p>
                From our classrooms to our outdoor spaces, every environment reflects our 
                commitment to providing beautiful, orderly spaces where children can engage 
                in meaningful work and develop a sense of care for their surroundings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {facilities.map(facility => (
                <div key={facility.id} className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
                  <div className="relative h-64 w-full">
                    <Image 
                      src={facility.image}
                      alt={facility.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-sage-800 font-sans">{facility.name}</h2>
                    <p className="mb-4 text-sage-600 font-poppins">{facility.description}</p>
                    
                    <h3 className="text-lg font-medium mb-2 text-sage-800 font-sans">Features:</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {facility.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-nature-500 mr-2">✓</span>
                          <span className="text-sage-600 font-poppins">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage-50 p-8 rounded-lg animate-on-scroll">
              <h2 className="text-2xl font-semibold mb-4 text-sage-800 font-sans">Schedule a Tour</h2>
              <p className="mb-6 text-sage-600 font-poppins">
                We invite you to visit our campus and experience our facilities firsthand. 
                Our admissions team would be happy to show you around and answer any questions 
                you may have about our learning environments.
              </p>
              <Link href="/contact">
                <Button className="bg-nature-600 hover:bg-nature-700">
                  Request a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}