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
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us for any
            questions about our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-on-scroll">
            <Image
              src="/contact-image.jpg"
              alt="Our Facility"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-8"
            />

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-nature-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-sage-800 mb-2">
                  Visit Us
                </h2>
                <p className="text-sage-600">
                  123 Education Lane
                  <br />
                  Anytown, ST 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-nature-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-sage-800 mb-2">
                  Call Us
                </h2>
                <p className="text-sage-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-nature-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-sage-800 mb-2">
                  Email Us
                </h2>
                <p className="text-sage-600">info@evviva.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sage-100 animate-on-scroll">
            <h2 className="text-2xl font-bold text-sage-800 mb-6">
              Schedule a Tour
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value="YOUR-WEB3FORMS-ACCESS-KEY"
              />
              <input
                type="hidden"
                name="subject"
                value="New Tour Request - Evviva Montessori"
              />

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="child_age_range">Child&apos;s Age</Label>
                <Select name="child_age_range" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an item" />
                    <SelectContent>
                      {Object.entries(ageRange).map(([key, val]) => (
                        <SelectItem key={key} value={key}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please share any specific questions or preferences for the tour."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-nature-600 hover:bg-nature-700"
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
