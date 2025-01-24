"use client";

import { useGsapAnimation } from "@/lib/gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is Montessori education?",
    answer:
      "Montessori education is a child-centered approach that encourages hands-on learning. It promotes independence and respects each child's unique learning pace. This method nurtures curiosity and creativity, laying the foundation for lifelong learning.",
  },
  {
    question: "What are your hours?",
    answer:
      "Our daycare operates from 7 AM to 6 PM, Monday through Friday. We offer flexible scheduling to accommodate working parents. Please contact us for specific enrollment details.",
  },
  {
    question: "How do I enroll?",
    answer:
      "To enroll your child, please fill out our online application form. After submission, our team will reach out to discuss the next steps. We look forward to welcoming you to our community!",
  },
  {
    question: "What is your philosophy?",
    answer:
      "Our philosophy centers on nurturing the whole child—emotionally, socially, and intellectually. We believe in creating a respectful and stimulating environment that fosters growth. Our goal is to empower children to become compassionate and responsible individuals.",
  },
  {
    question: "Do you offer meals?",
    answer:
      "Yes, we provide nutritious meals and snacks throughout the day. Our menu is designed to support healthy growth and development. We also accommodate dietary restrictions and preferences.",
  },
  {
    question: "What safety measures do you have in place?",
    answer:
      "We maintain strict safety protocols including secure entry systems, regular safety drills, and comprehensive staff training. All our staff members are certified in first aid and CPR.",
  },
];

export default function FAQ() {
  useGsapAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Find answers to common questions about our daycare services and
            Montessori approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-sage-200"
              >
                <AccordionTrigger className="px-6 text-sage-800 hover:text-sage-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sage-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-sage-600 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button className="bg-nature-600 hover:bg-nature-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
