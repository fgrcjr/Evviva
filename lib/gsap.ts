"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = () => {
  useEffect(() => {
    // Create a context to properly manage animations
    const ctx = gsap.context(() => {
      // Simple fade-in animation for all pages
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Additional animation for facility descriptions
      const facilityDescriptions = document.querySelectorAll(".facility-description");
      facilityDescriptions.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    // Cleanup function
    return () => {
      ctx.revert(); // This will clean up all animations created in this context
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
    };
  }, []);
};