import { Logo } from "@/components/ui/Logo";
import { FooterSection } from "@/components/ui/FooterSection";
import { SocialIcons } from "@/components/ui/SocialIcons";

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  companyName?: string;
  address?: string[];
  phone?: string;
  email?: string;
  programLinks?: { href: string; label: string }[];
  quickLinks?: { href: string; label: string }[];
  socialLinks?: Array<{
    Icon: any;
    label: string;
    href: string;
    ariaLabel?: string;
  }>;
  copyrightText?: string;
  className?: string;
  gridClassName?: string;
}

const defaultProgramLinks = [
  { href: "/programs/infants", label: "Infants" },
  { href: "/programs/toddler", label: "Toddlers" },
  { href: "/programs/preschool", label: "Preschool" },
  { href: "/programs/school_age", label: "School Age" },
];

const defaultQuickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const Footer = ({
  logoSrc = "/logo.png",
  logoAlt = "Evviva Montessori",
  logoWidth = 200,
  logoHeight = 60,
  companyName = "Evviva Montessori",
  address = ["193A Mallory Ave.", "Jersey City NJ 07304-1288"],
  phone = "(555) 123-4567",
  email = "info@evviva.com",
  programLinks = defaultProgramLinks,
  quickLinks = defaultQuickLinks,
  socialLinks,
  copyrightText,
  className = "bg-sage-50",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center md:text-left",
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} ${companyName}. All rights reserved.`;

  return (
    <footer className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Logo
            href={null}
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="mb-4 max-w-[180px] w-auto"
            fallbackText={companyName}
          />
        </div>

        {/* Footer Links Grid */}
        <div className={gridClassName}>
          {/* Programs */}
          <FooterSection title="Programs" links={programLinks} />

          {/* Quick Links */}
          <FooterSection title="Quick Links" links={quickLinks} />

          {/* Contact Info */}
          <FooterSection title="Contact Info">
            <ul className="space-y-2 text-gray-600">
              {address.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
              <li>Phone: {phone}</li>
              <li>Email: {email}</li>
            </ul>
          </FooterSection>

          {/* Social Media */}
          <FooterSection title="Follow Us">
            <SocialIcons
              icons={socialLinks}
              className="flex justify-center md:justify-start space-x-4"
            />
          </FooterSection>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            {copyrightText || defaultCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
