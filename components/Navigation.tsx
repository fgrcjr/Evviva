"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NavigationDropdown } from "@/components/ui/NavigationDropdown";

interface NavItem {
  href: string;
  label: string;
  dropdown?: { href: string; label: string }[];
}

interface NavigationProps {
  logoSrc?: string;
  logoAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  navLinks?: NavItem[];
  className?: string;
  scrolledBg?: string;
  transparentBg?: string;
}

const defaultNavLinks: NavItem[] = [
  {
    href: "/about",
    label: "About Us",
    dropdown: [
      { href: "/about/story", label: "Our Story" },
      { href: "/about/mission-vision", label: "Mission & Vision" },
      { href: "/about/faculty-staff", label: "Faculty & Staff" },
      { href: "/about/facilities", label: "Our Facilities" },
    ],
  },
  {
    href: "/programs",
    label: "Programs",
    dropdown: [
      { href: "/programs/infants", label: "Infant" },
      { href: "/programs/toddler", label: "Toddler" },
      { href: "/programs/preschool", label: "Preschoolers" },
      { href: "/programs/school_age", label: "School-Age" },
    ],
  },
  {
    href: "/contact",
    label: "Contact Us",
    dropdown: [
      { href: "/contact/locations", label: "Our Locations" },
      { href: "/contact/form", label: "Contact Form" },
    ],
  },
  {
    href: "/admissions",
    label: "Admission",
    dropdown: [
      { href: "/admission/how-to-apply", label: "How to Apply" },
      { href: "/admission/register", label: "Registration" },
    ],
  },
  {
    href: "/faq",
    label: "FAQs",
    dropdown: [
      { href: "/faq/admissions", label: "Admissions FAQs" },
      { href: "/faq/montessori", label: "Montessori Method" },
      { href: "/faq/general", label: "General Questions" },
    ],
  },
];

const Navigation = ({
  logoSrc = "/logo_only.png",
  logoAlt = "Evviva Montessori",
  ctaLabel = "Schedule a Tour",
  ctaHref = "/contact",
  navLinks = defaultNavLinks,
  className = "",
  scrolledBg = "bg-white/90 backdrop-blur-md shadow-sm",
  transparentBg = "bg-transparent",
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? scrolledBg : transparentBg
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo logoSrc={logoSrc} logoAlt={logoAlt} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavigationDropdown
                key={link.href}
                label={link.label}
                href={link.href}
                dropdown={link.dropdown}
              />
            ))}
            <Link href={ctaHref}>
              <Button className="bg-nature-600 hover:bg-nature-700">
                {ctaLabel}
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavigationDropdown
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  dropdown={link.dropdown}
                  isMobile={true}
                  onClose={() => setIsOpen(false)}
                />
              ))}
              <Link href={ctaHref} onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-nature-600 hover:bg-nature-700 mt-4">
                  {ctaLabel}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
