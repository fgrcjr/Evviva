"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Globe } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    position: "Lead Teacher",
    bio: "Alice has over 10 years of experience in Montessori education and loves nurturing young minds.",
    image: "/images/team/alice-johnson.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Mark Smith",
    position: "Assistant Teacher",
    bio: "Mark is passionate about creating engaging learning experiences for children in their formative years.",
    image: "/images/team/mark-smith.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Sarah Lee",
    position: "Curriculum Director",
    bio: "Sarah designs innovative curriculum that inspires creativity and critical thinking in young learners.",
    image: "/images/team/sarah-lee.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Tom Brown",
    position: "Program Coordinator",
    bio: "Tom coordinates programs that promote social skills and emotional development in children.",
    image: "/images/team/tom-brown.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Linda White",
    position: "Office Manager",
    bio: "Linda ensures smooth operations and supports families with their inquiries and needs.",
    image: "/images/team/linda-white.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  }
];

const testimonials = [
  {
    text: "The team has been incredible in nurturing our child's development. We've seen remarkable progress!",
    author: "Emily Johnson",
    role: "Parent",
    image: "/images/testimonials/emily.jpg"
  },
  {
    text: "The dedication and passion of the teachers make this place special. Our kids love coming here!",
    author: "Michael Smith",
    role: "Parent",
    image: "/images/testimonials/michael.jpg"
  },
  {
    text: "We're amazed by the personalized attention and care each child receives. Truly exceptional!",
    author: "Sarah Williams",
    role: "Parent",
    image: "/images/testimonials/sarah.jpg"
  }
];

export default function FacultyStaffPage() {
  useGsapAnimation();

  return (
    <>
      <Head>
        <title>Faculty & Staff | About Us</title>
        <meta
          name="description"
          content="Meet our dedicated team of educators and staff members committed to providing an exceptional educational experience."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gray-900">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/team/hero.jpg"
            alt="Our team"
            fill
            className="object-cover"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center">
            <div className="container px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
                Meet Our Team
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-poppins">
                Our dedicated staff is passionate about nurturing and guiding each child's unique journey.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-800 mb-4 font-sans">Our Team</h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto font-poppins">
              Dedicated professionals passionate about early childhood education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="animate-on-scroll overflow-hidden">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sage-800 mb-1 font-sans">{member.name}</h3>
                  <p className="text-nature-600 mb-3 font-poppins">{member.position}</p>
                  <p className="text-sage-600 mb-4 font-poppins">{member.bio}</p>
                  <div className="flex gap-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-sage-600 hover:text-nature-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-sage-600 hover:text-nature-600">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.website && (
                      <a href={member.social.website} className="text-sage-600 hover:text-nature-600">
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-sage-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 mb-12 text-center font-sans">
              Parent Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="animate-on-scroll">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sage-800 font-sans">{testimonial.author}</h4>
                        <p className="text-sage-600 text-sm font-poppins">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sage-600 italic font-poppins">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-4 font-sans">We're Hiring!</h2>
          <p className="text-lg text-sage-600 mb-8 max-w-2xl mx-auto font-poppins">
            Join our passionate team and make a difference in children's lives.
          </p>
          <Link href="/careers">
            <Button className="bg-nature-600 hover:bg-nature-700">
              View Open Positions
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}