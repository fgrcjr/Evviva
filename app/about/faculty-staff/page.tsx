"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";
import Image from 'next/image';

interface StaffMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  education: string[];
  certifications?: string[];
}


const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Head of School",
    bio: "Sarah has over 20 years of experience in education and has been with our school since its founding. She is passionate about creating an environment where children can thrive.",
    image: "/images/staff/sarah-johnson.jpg",
    education: ["M.Ed. in Educational Leadership", "B.A. in Child Development"],
    certifications: ["AMI Montessori Certification", "Educational Leadership Certificate"]
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Primary Program Director",
    bio: "Michael brings 15 years of experience in Montessori education. He specializes in creating engaging learning environments for young children.",
    image: "/images/staff/michael-chen.jpg",
    education: ["M.A. in Early Childhood Education", "B.S. in Psychology"],
    certifications: ["AMS Montessori Certification"]
  },
  {
    id: 3,
    name: "Aisha Patel",
    position: "Elementary Program Lead",
    bio: "Aisha has been teaching for 12 years and is dedicated to fostering independence and critical thinking in elementary-aged children.",
    image: "/images/staff/aisha-patel.jpg",
    education: ["M.Ed. in Elementary Education", "B.A. in Liberal Arts"],
    certifications: ["AMI Elementary Certification", "STEM Education Certificate"]
  },
  {
    id: 4,
    name: "Robert Martinez",
    position: "Administrative Director",
    bio: "Robert oversees the day-to-day operations of our school, ensuring that our environment supports both students and staff.",
    image: "/images/staff/robert-martinez.jpg",
    education: ["MBA", "B.S. in Business Administration"]
  },
  {
    id: 5,
    name: "Emily Wilson",
    position: "Primary Classroom Teacher",
    bio: "Emily creates a nurturing classroom environment where children develop independence and a love for learning.",
    image: "/images/staff/emily-wilson.jpg",
    education: ["B.A. in Education"],
    certifications: ["AMS Primary Certification"]
  },
  {
    id: 6,
    name: "David Thompson",
    position: "Elementary Classroom Teacher",
    bio: "David specializes in project-based learning and helps students develop critical thinking skills through hands-on experiences.",
    image: "/images/staff/david-thompson.jpg",
    education: ["M.Ed. in Curriculum Development", "B.S. in Environmental Science"],
    certifications: ["AMI Elementary Certification"]
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
          content="Meet our dedicated team of educators and staff members committed to providing an exceptional educational experience for every child."
        />
        <meta property="og:title" content="Faculty & Staff | About Us" />
        <meta property="og:description" content="Meet our experienced educators and staff who bring passion and expertise to our school community." />
        <meta property="og:image" content="/images/staff/sarah-johnson.jpg" />
        <meta name="keywords" content="Montessori teachers, school staff, education professionals, certified educators, AMI certification, AMS certification" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faculty & Staff | About Us" />
        <meta name="twitter:description" content="Meet our experienced educators and staff who bring passion and expertise to our school community." />
        <meta name="twitter:image" content="/images/staff/sarah-johnson.jpg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-on-scroll">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Faculty & Staff</h1>
            <p className="text-lg mb-8">
              Our dedicated team of educators and staff members are committed to providing 
              an exceptional educational experience for every child. Each member brings unique 
              skills, experience, and passion to our school community.
            </p>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffMembers.slice(0, 3).map(member => (
                  <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-blue-600 mb-3">{member.position}</p>
                      <p className="mb-4">{member.bio}</p>
                      
                      <div className="mt-4">
                        <h4 className="font-medium mb-1">Education</h4>
                        <ul className="list-disc pl-5 text-sm">
                          {member.education.map((edu, index) => (
                            <li key={index}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {member.certifications && (
                        <div className="mt-3">
                          <h4 className="font-medium mb-1">Certifications</h4>
                          <ul className="list-disc pl-5 text-sm">
                            {member.certifications.map((cert, index) => (
                              <li key={index}>{cert}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Teaching Staff</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffMembers.slice(3).map(member => (
                  <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-blue-600 mb-3">{member.position}</p>
                      <p className="mb-4">{member.bio}</p>
                      
                      <div className="mt-4">
                        <h4 className="font-medium mb-1">Education</h4>
                        <ul className="list-disc pl-5 text-sm">
                          {member.education.map((edu, index) => (
                            <li key={index}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {member.certifications && (
                        <div className="mt-3">
                          <h4 className="font-medium mb-1">Certifications</h4>
                          <ul className="list-disc pl-5 text-sm">
                            {member.certifications.map((cert, index) => (
                              <li key={index}>{cert}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
              <p className="mb-4">
                We're always looking for passionate educators to join our community. 
                If you're interested in working with us, please visit our careers page 
                to see current openings.
              </p>
              <a 
                href="/careers" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}