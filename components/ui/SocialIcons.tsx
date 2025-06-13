import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  LucideIcon,
} from "lucide-react";

interface SocialLink {
  Icon: LucideIcon;
  label: string;
  href: string;
  ariaLabel?: string;
}

interface SocialIconsProps {
  icons?: SocialLink[];
  className?: string;
  iconClassName?: string;
  layout?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

const defaultIcons: SocialLink[] = [
  {
    Icon: Facebook,
    label: "Facebook",
    href: "#",
    ariaLabel: "Follow us on Facebook",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "#",
    ariaLabel: "Follow us on Instagram",
  },
  {
    Icon: Twitter,
    label: "Twitter",
    href: "#",
    ariaLabel: "Follow us on Twitter",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    ariaLabel: "Connect on LinkedIn",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "#",
    ariaLabel: "Subscribe on YouTube",
  },
];

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export const SocialIcons = ({
  icons = defaultIcons,
  className = "",
  iconClassName = "text-gray-600 hover:text-sage-600",
  layout = "horizontal",
  size = "md",
}: SocialIconsProps) => {
  const containerClass =
    layout === "horizontal" ? "flex space-x-4" : "flex flex-col space-y-4";

  return (
    <div className={`${containerClass} ${className}`}>
      {icons.map(({ Icon, label, href, ariaLabel }, index) => (
        <a
          key={index}
          href={href}
          className={iconClassName}
          aria-label={ariaLabel || `${label} social link`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={sizeClasses[size]} />
        </a>
      ))}
    </div>
  );
};
