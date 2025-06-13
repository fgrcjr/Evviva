"use client";

import { useGsapAnimation } from "@/lib/gsap";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactInfo } from "@/components/ui/ContactInfo";
import { ContactForm } from "@/components/ui/ContactForm";

interface ContactPageProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  contactItems?: Array<{
    icon: any;
    title: string;
    content: string | string[];
    href?: string;
  }>;
  formTitle?: string;
  className?: string;
}

export default function Contact({
  title = "Contact Us",
  subtitle = "We'd love to hear from you. Get in touch with us for any questions about our programs.",
  imageSrc = "/contact-image.jpg",
  imageAlt = "Our Facility",
  contactItems,
  formTitle = "Schedule a Tour",
  className = "min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24",
}: ContactPageProps) {
  useGsapAnimation();

  return (
    <div className={className}>
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            {title}
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Image */}
          <div className="space-y-8 animate-on-scroll text-center md:text-left">
            {/* Image */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto mb-8"
            />

            <ContactInfo items={contactItems} />
          </div>

          {/* Form Section */}
          <div className="animate-on-scroll">
            <ContactForm title={formTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
