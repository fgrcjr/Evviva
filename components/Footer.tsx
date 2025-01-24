import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="Evviva Montessori"
            width={200}
            height={60}
            className="mb-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs#infants"
                  className="text-gray-600 hover:text-sage-600"
                >
                  Infants
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#toddlers"
                  className="text-gray-600 hover:text-sage-600"
                >
                  Toddlers
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#preschool"
                  className="text-gray-600 hover:text-sage-600"
                >
                  Preschool
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#school-age"
                  className="text-gray-600 hover:text-sage-600"
                >
                  School Age
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-sage-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-sage-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-sage-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>123 Education Lane</li>
              <li>Anytown, ST 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@evviva.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-sage-600"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sage-600"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sage-600"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sage-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sage-600"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Evviva Montessori. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
