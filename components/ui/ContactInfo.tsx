import { LucideIcon, MapPin, Phone, Mail } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string | string[];
  href?: string;
}

interface ContactInfoProps {
  items?: ContactItem[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  layout?: "vertical" | "horizontal";
}

const defaultContactItems: ContactItem[] = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: ["193A Mallory Ave.", "Jersey City NJ 07304-1288"],
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@evviva.com",
    href: "mailto:info@evviva.com",
  },
];

export const ContactInfo = ({
  items = defaultContactItems,
  className = "space-y-8",
  itemClassName = "flex flex-col md:flex-row items-center md:items-start gap-4",
  iconClassName = "h-6 w-6 text-nature-600 mt-1",
  titleClassName = "text-xl font-semibold text-sage-800 mb-2",
  contentClassName = "text-sage-600",
  layout = "vertical",
}: ContactInfoProps) => {
  const containerClass =
    layout === "horizontal" ? `flex flex-wrap gap-8 ${className}` : className;

  return (
    <div className={containerClass}>
      {items.map((item, index) => (
        <div key={index} className={itemClassName}>
          <item.icon className={iconClassName} />
          <div className="text-center md:text-left">
            <h2 className={titleClassName}>{item.title}</h2>
            {Array.isArray(item.content) ? (
              <div className={contentClassName}>
                {item.content.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
            ) : item.href ? (
              <a
                href={item.href}
                className={`${contentClassName} hover:text-nature-600 transition-colors`}
              >
                {item.content}
              </a>
            ) : (
              <p className={contentClassName}>{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
