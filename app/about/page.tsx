"use client";

import { useGsapAnimation } from "@/lib/gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

export default function About() {
  useGsapAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/about/hero.jpg"
          alt="Welcome to Our Daycare"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
              Welcome to Our Daycare
            </h1>
            <p className="text-lg text-white/90 font-poppins">
              Discover a safe, engaging space where children learn and grow through the Montessori method.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 font-sans">
              Our Commitment to Nurturing Individual Growth in Every Child
            </h2>
            <p className="text-lg text-sage-600 mb-8 font-poppins">
              At our daycare, we prioritize each child's unique journey. Our Montessori approach fosters growth in a supportive environment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2 font-sans">Our Mission</h3>
                <p className="text-sage-600 font-poppins">
                  We inspire curiosity and creativity while nurturing compassionate, responsible citizens.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2 font-sans">Our Vision</h3>
                <p className="text-sage-600 font-poppins">
                  We envision a community of lifelong learners who contribute positively to society.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll">
            <Image
              src="/images/about/commitment.jpg"
              alt="Our commitment to children"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 font-sans">
              Discover Our Unique Features That Make Learning Fun and Engaging for Children
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experience a Safe, Nurturing Environment",
                description: "Our daycare offers a blend of creativity and structured learning.",
                link: "/about/facilities",
                linkText: "Learn More",
              },
              {
                title: "Qualified and Caring Staff",
                description: "Our experienced educators foster a supportive atmosphere for every child.",
                link: "/about/faculty-staff",
                linkText: "Sign Up",
              },
              {
                title: "Hands-On Learning Activities",
                description: "We provide engaging activities that inspire a love for learning.",
                link: "/programs",
                linkText: "Join Us",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <Box className="h-12 w-12 text-nature-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-4 font-sans">
                  {feature.title}
                </h3>
                <p className="text-sage-600 mb-6 font-poppins">{feature.description}</p>
                <Link href={feature.link}>
                  <Button variant="outline" className="hover:bg-nature-50">
                    {feature.linkText} →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="prose prose-lg max-w-none animate-on-scroll">
            <h2 className="text-3xl font-bold text-sage-800 mb-6 font-sans">
              Medium length section heading goes here
            </h2>
            <div className="space-y-6 text-sage-600 font-poppins">
              <p>
                At our daycare, we believe in the power of nurturing each child's unique potential. Our dedicated team creates a warm and inviting environment where children can explore, learn, and grow. We emphasize hands-on experiences that foster creativity and curiosity, allowing children to thrive.
              </p>
              <p>
                Our core values revolve around respect, kindness, and responsibility. We strive to instill these principles in every child, preparing them to be thoughtful and compassionate individuals. Our commitment to a Montessori approach ensures that each child receives personalized attention tailored to their learning style.
              </p>
              <p>
                We envision a community where children not only excel academically but also develop into empathetic leaders. By promoting cooperation and understanding, we aim to cultivate a generation that values both personal growth and social responsibility.
              </p>
              <p>
                Join us in our mission to create a safe and stimulating environment where every child feels valued. Together, we can inspire a love for learning that lasts a lifetime.
              </p>
              <p>
                Explore our programs and see how we can support your child's journey towards becoming a confident and capable individual.
              </p>
            </div>
          </div>
          <div className="space-y-6 animate-on-scroll">
            {[
              { title: "Welcome", link: "/about/story", linkText: "Our Story" },
              { title: "Values", link: "/about/mission-vision", linkText: "Our Commitment" },
              { title: "Faculty", link: "/about/faculty-staff", linkText: "Our Team" },
              { title: "Facilities", link: "/about/facilities", linkText: "Join Us" },
            ].map((item, index) => (
              <div key={index} className="border-b border-sage-200 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-sage-800 font-sans">{item.title}</h3>
                  <Link href={item.link} className="text-nature-600 hover:text-nature-700">
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-sage-200">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-sage-800 mb-4 font-sans">
            Join Our Learning Community
          </h2>
          <p className="text-lg text-sage-600 mb-8 font-poppins">
            Discover how our nurturing environment can support your child's growth and development.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/programs">
              <Button className="bg-nature-600 hover:bg-nature-700">
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">
                Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}