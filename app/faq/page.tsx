"use client";

import { useGsapAnimation } from "@/lib/gsap";
import { FAQSection } from "@/components/sections/FAQSection";

const defaultFaqs = [
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

export default function Page() {
  useGsapAnimation();

  return (
    <FAQSection
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our daycare services and Montessori approach."
      faqs={defaultFaqs}
      ctaText="Still have questions?"
      ctaButtonText="Contact Us"
      ctaButtonHref="/contact"
    />
  );
}
