"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  dropdown?: { href: string; label: string }[];
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (href: string) => {
    setActiveDropdown(activeDropdown === href ? null : href);
  };

  const handleLogoError = () => {
    console.error("Failed to load logo image");
    setLogoError(true);
  };

  const navLinks: NavItem[] = [
    { 
      href: "/about", 
      label: "About Us",
      dropdown: [
        { href: "/about/story", label: "Our Story" },
        { href: "/about/mission-vision", label: "Mission & Vision" },
        { href: "/about/faculty-staff", label: "Faculty & Staff" },
        { href: "/about/facilities", label: "Our Facilities" }
      ]
    },
    { 
      href: "/programs", 
      label: "Programs",
      dropdown: [
        { href: "/programs/infants", label: "Infant" }, 
        { href: "/programs/toddler", label: "Toddler" },
        { href: "/programs/preschool", label: "Preschoolers" },
        { href: "/programs/school_age", label: "School-Age" },
      ]
    },
    { 
      href: "/contact", 
      label: "Contact Us",
      dropdown: [
        { href: "/contact/locations", label: "Our Locations" },
        { href: "/contact/form", label: "Contact Form" }
      ]
    },
    { 
      href: "/admissions", 
      label: "Admission",
      dropdown: [
        { href: "/admission/how-to-apply", label: "How to Apply" },
        { href: "/admission/register", label: "Registration" }
      ]
    },
    { 
      href: "/faq", 
      label: "FAQs",
      dropdown: [
        { href: "/faq/admissions", label: "Admissions FAQs" },
        { href: "/faq/montessori", label: "Montessori Method" },
        { href: "/faq/general", label: "General Questions" }
      ]
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex justify-center items-center space-x-2">
            {logoError ? (
              <div className="font-bold text-xl text-sage-700">Evviva Montessori</div>
            ) : (
              <Image
                src="/logo_only.png"
                alt="Evviva Montessori"
                width={691}
                height={254}
                className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
                priority={true}
                onError={handleLogoError}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div 
                key={link.href}
                className="relative group"
              >
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.href)}
                    className={`text-sm transition-colors hover:text-sage-600 flex items-center ${
                      pathname === link.href || pathname?.startsWith(link.href + '/')
                        ? "text-sage-700 font-semibold"
                        : "text-gray-600"
                    }`}
                    aria-expanded={activeDropdown === link.href}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === link.href ? "rotate-180" : ""
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-lg transition-colors hover:text-sage-600 flex items-center ${
                      pathname === link.href || pathname?.startsWith(link.href + '/')
                        ? "text-sage-700 font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                
                {link.dropdown && activeDropdown === link.href && (
                  <div className="absolute left-0 mt-1 w-56 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2 z-10">
                    {link.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.href} 
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === subItem.href
                            ? "bg-sage-50 text-sage-700 font-medium"
                            : "text-gray-600 hover:bg-sage-50 hover:text-sage-700"
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact">
              <Button className="bg-nature-600 hover:bg-nature-700">
                Schedule a Tour
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
                <div key={link.href}>
                  {link.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(link.href)}
                      className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.href || pathname?.startsWith(link.href + '/')
                          ? "text-sage-700 bg-sage-50"
                          : "text-gray-600 hover:text-sage-600 hover:bg-sage-50"
                      }`}
                      aria-expanded={activeDropdown === link.href}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeDropdown === link.href ? "rotate-180" : ""
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.href || pathname?.startsWith(link.href + '/')
                          ? "text-sage-700 bg-sage-50"
                          : "text-gray-600 hover:text-sage-600 hover:bg-sage-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                  
                  {link.dropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            pathname === subItem.href
                              ? "text-sage-700 bg-sage-50"
                              : "text-gray-500 hover:text-sage-600 hover:bg-sage-50"
                          }`}
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-nature-600 hover:bg-nature-700 mt-4">
                  Schedule a Tour
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
