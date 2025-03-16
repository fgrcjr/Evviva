"use client";

import { useState } from "react";
import { useGsapAnimation } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { createTourRequest } from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ageRange, ageRanges } from "@/lib/constants";

export default function Contact() {
  useGsapAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await createTourRequest(formData);

      toast.success(`Thank you, ${res.fullName}! We'll be in touch soon.`);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24">
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us for any
            questions about our programs.
          </p>
        </div>
  
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info & Image */}
          <div className="space-y-8 animate-on-scroll text-center md:text-left">
            
            {/* Image */}
            <Image
              src="/contact-image.jpg"
              alt="Our Facility"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto mb-8"
            />
  
            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <MapPin className="h-6 w-6 text-nature-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-sage-800 mb-2">
                  Visit Us
                </h2>
                <p className="text-sage-600">193A Mallory Ave.<br />Jersey City NJ 07304-1288</p>
              </div>
            </div>
  
            {/* Phone */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Phone className="h-6 w-6 text-nature-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-sage-800 mb-2">
                  Call Us
                </h2>
                <p className="text-sage-600">(555) 123-4567</p>
              </div>
            </div>
  
            {/* Email */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Mail className="h-6 w-6 text-nature-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-sage-800 mb-2">
                  Email Us
                </h2>
                <p className="text-sage-600">info@evviva.com</p>
              </div>
            </div>
          </div>
  
          {/* Form Section */}
          <div className="bg-white p-10 rounded-lg shadow-md border border-sage-200 animate-on-scroll w-full md:max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 mb-6 text-center md:text-left">
              Schedule a Tour
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="YOUR-WEB3FORMS-ACCESS-KEY" />
              <input type="hidden" name="subject" value="New Tour Request - Evviva Montessori" />
  
              {/* Full Name */}
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xl font-medium text-sage-800">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg"
                />
              </div>
  
              {/* Email Address */}
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xl font-medium text-sage-800">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg"
                />
              </div>
  
              {/* Phone Number */}
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-xl font-medium text-sage-800">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg"
                />
              </div>
  
              {/* Child's Age */}
              <div className="space-y-1">
                <Label htmlFor="child_age_range" className="text-xl font-medium text-sage-800">
                  Child&apos;s Age
                </Label>
                <Select name="child_age_range" required>
                  <SelectTrigger className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg">
                    <SelectValue placeholder="Select an item" />
                    <SelectContent>
                      {Object.entries(ageRange).map(([key, val]) => (
                        <SelectItem key={key} value={key}>{val}</SelectItem>
                      ))}
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
  
              {/* Additional Information */}
              <div className="space-y-1">
                <Label htmlFor="message" className="text-xl font-medium text-sage-800">
                  Additional Information
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Please share any specific questions or preferences for the tour."
                  className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg"
                />
              </div>
  
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-3 bg-nature-600 hover:bg-nature-700 text-white font-semibold text-xl rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Tour"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
}
