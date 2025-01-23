"use client";

import { useGsapAnimation } from '@/lib/gsap';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Brain, GraduationCap, School } from 'lucide-react';

const programs = [
  {
    title: "Infants",
    age: "6 weeks to 12 months",
    icon: Baby,
    image: "https://source.unsplash.com/random/800x600?infant,daycare",
    description: "Focus on creating a safe and nurturing environment with individualized attention.",
    activities: [
      "Sensory Play: Using soft toys, textures, and sounds to stimulate senses",
      "Tummy Time: Encouraging physical development and motor skills",
      "Story Time: Reading simple books to promote language development"
    ]
  },
  {
    title: "Toddlers",
    age: "12 months to 3 years",
    icon: Brain,
    image: "https://source.unsplash.com/random/800x600?toddler,play",
    description: "Programs designed to foster independence and social skills.",
    activities: [
      "Creative Arts: Simple crafts using safe materials to encourage creativity",
      "Music and Movement: Engaging in songs and dances to develop rhythm and coordination",
      "Play-Based Learning: Structured playtime that promotes sharing and cooperation among peers"
    ]
  },
  {
    title: "Preschoolers",
    age: "3 to 5 years",
    icon: GraduationCap,
    image: "https://source.unsplash.com/random/800x600?preschool,learning",
    description: "Focus on enhancing cognitive, emotional, and social skills.",
    activities: [
      "Literacy Activities: Storytelling, phonics games, and letter recognition exercises",
      "Math Concepts: Simple counting games, sorting activities, and pattern recognition",
      "Physical Activities: Outdoor play, obstacle courses, and group games"
    ]
  },
  {
    title: "School-Age",
    age: "5 years and older",
    icon: School,
    image: "https://source.unsplash.com/random/800x600?school,children",
    description: "Designed for children who need care before or after school hours.",
    activities: [
      "Homework Help: Providing support for school assignments in a quiet environment",
      "Recreational Activities: Sports, arts and crafts, and group games to promote teamwork",
      "Field Trips: Organizing outings to local museums or parks for experiential learning"
    ]
  }
];

export default function Programs() {
  useGsapAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            At Evviva, we offer age-appropriate programs designed to nurture your child's development at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={program.title} className="animate-on-scroll border-sage-200 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t-lg">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <program.icon className="h-8 w-8 text-nature-600" />
                  <div>
                    <CardTitle className="text-2xl text-sage-800">{program.title}</CardTitle>
                    <CardDescription className="text-sage-600">{program.age}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sage-700 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start gap-2 text-sage-600">
                      <span className="inline-block h-2 w-2 mt-2 rounded-full bg-nature-400" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}