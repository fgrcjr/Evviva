"use client";

import React from 'react';
import Head from "next/head";
import { useGsapAnimation } from "@/lib/gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, Users, BookOpen, Target, Sparkles } from "lucide-react";

export default function MissionVisionPage() {
  useGsapAnimation();

  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "Fostering mutual respect among children, staff, and families",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, supportive relationships",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Promoting continuous growth and development",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in education",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Encouraging imagination and innovative thinking",
    },
  ];

  return (
    <>
      <Head>
        <title>Mission & Vision | About Us</title>
        <meta
          name="description"
          content="Our mission, vision, and core values that guide our educational approach"
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6 font-sans">
                Mission & Vision
              </h1>
              <p className="text-lg text-sage-600 max-w-2xl mx-auto font-poppins">
                Discover our commitment to nurturing young minds and fostering a
                love for learning.
              </p>
            </div>

            <div className="grid gap-8 mb-16">
              <Card className="animate-on-scroll border-sage-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-8 w-8 text-nature-600" />
                    <CardTitle className="text-2xl text-sage-800 font-sans">
                      Our Mission
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sage-700 space-y-4 font-poppins">
                  <p>
                    Our mission is to cultivate a nurturing and stimulating Montessori 
                    environment where each child is respected as an individual. We are 
                    dedicated to fostering emotional, intellectual, and social growth, 
                    ensuring that every child feels valued and secure.
                  </p>
                  <p>
                    Through hands-on learning experiences, we aim to inspire curiosity, 
                    creativity, and a love for learning, empowering children to become 
                    compassionate, responsible citizens of the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll border-sage-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="h-8 w-8 text-nature-600" />
                    <CardTitle className="text-2xl text-sage-800 font-sans">
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sage-700 space-y-4 font-poppins">
                  <p>
                    Our vision is to create a community of lifelong learners who grow 
                    into empathetic leaders and problem solvers. We envision a future 
                    where children thrive in an environment that promotes respect for 
                    themselves, others, and the world around them.
                  </p>
                  <p>
                    By instilling values of kindness, cooperation, and responsibility, 
                    we aspire to prepare our children not only for academic success but 
                    also for meaningful contributions to society.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 animate-on-scroll">
              <h2 className="text-3xl font-bold text-sage-800 mb-8 text-center font-sans">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    className="animate-on-scroll border-sage-200 hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="pt-6">
                      <value.icon className="h-10 w-10 text-nature-600 mb-4" />
                      <h3 className="text-xl font-semibold text-sage-800 mb-2 font-sans">
                        {value.title}
                      </h3>
                      <p className="text-sage-600 font-poppins">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}