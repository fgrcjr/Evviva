"use client";

import { useGsapAnimation } from "@/lib/gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb } from "lucide-react";

export default function About() {
  useGsapAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            About Evviva
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Discover our commitment to nurturing young minds and fostering a
            love for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="animate-on-scroll border-sage-200">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-8 w-8 text-nature-600" />
                <CardTitle className="text-2xl text-sage-800">
                  Our Mission
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sage-700 space-y-4">
              <p>
                Our mission is to cultivate a nurturing and stimulating
                Montessori environment where each child is respected as an
                individual. We are dedicated to fostering emotional,
                intellectual, and social growth, ensuring that every child feels
                valued and secure.
              </p>
              <p>
                Through hands-on learning experiences, we aim to inspire
                curiosity, creativity, and a love for learning, empowering
                children to become compassionate, responsible citizens of the
                world.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll border-sage-200">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="h-8 w-8 text-nature-600" />
                <CardTitle className="text-2xl text-sage-800">
                  Our Vision
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sage-700 space-y-4">
              <p>
                Our vision is to create a community of lifelong learners who
                grow into empathetic leaders and problem solvers. We envision a
                future where children thrive in an environment that promotes
                respect for themselves, others, and the world around them.
              </p>
              <p>
                By instilling values of kindness, cooperation, and
                responsibility, we aspire to prepare our children not only for
                academic success but also for meaningful contributions to
                society.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-sage-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Respect",
                description: "Fostering mutual respect and understanding",
              },
              {
                title: "Growth",
                description: "Nurturing continuous development and learning",
              },
              {
                title: "Community",
                description: "Building strong, supportive relationships",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-lg shadow-sm border border-sage-100"
              >
                <h3 className="text-xl font-semibold text-sage-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sage-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
