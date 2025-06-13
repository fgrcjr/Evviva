import Link from "next/link";
import { ReactNode } from "react";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterSectionProps {
  title: string;
  links?: FooterLink[];
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  linkClassName?: string;
}

export const FooterSection = ({
  title,
  links,
  children,
  className = "",
  titleClassName = "font-semibold text-gray-900 mb-4",
  linkClassName = "text-gray-600 hover:text-sage-600",
}: FooterSectionProps) => {
  return (
    <div className={className}>
      <h4 className={titleClassName}>{title}</h4>

      {children && children}

      {links && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              {link.external ? (
                <a
                  href={link.href}
                  className={linkClassName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
