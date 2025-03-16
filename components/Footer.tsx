import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Evviva Montessori"
            width={200}
            height={60}
            className="mb-4 max-w-[180px] w-auto"
          />
        </div>
  
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          
          {/* Programs */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Programs</h4>
            <ul className="space-y-2">
              {["Infants", "Toddlers", "Preschool", "School Age"].map((item, index) => (
                <li key={index}>
                  <Link href={`/programs#${item.toLowerCase()}`} className="text-gray-600 hover:text-sage-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "FAQ"].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="text-gray-600 hover:text-sage-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>193A Mallory Ave.</li>
              <li>Jersey City NJ 07304-1288</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@evviva.com</li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }, index) => (
                <a key={index} href="#" className="text-gray-600 hover:text-sage-600" aria-label={label}>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Evviva Montessori. All rights reserved.
          </p>
        </div>
  
      </div>
    </footer>
  );
};

export default Footer;
