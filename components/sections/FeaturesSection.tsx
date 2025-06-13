import { FeatureCard } from "@/components/ui/FeatureCard";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: {
    href: string;
    label: string;
    variant?:
      | "default"
      | "outline"
      | "link"
      | "ghost"
      | "secondary"
      | "destructive";
  };
  icon?: LucideIcon;
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  backgroundClass?: string;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  gridClass?: string;
  cardLayout?: "vertical" | "horizontal";
}

export const FeaturesSection = ({
  title,
  subtitle,
  features,
  backgroundClass = "py-16 bg-white",
  containerClass = "container mx-auto px-4",
  titleClass = "text-3xl sm:text-4xl font-bold text-center text-sage-800 mb-12",
  subtitleClass = "text-lg text-sage-600 text-center mb-12 max-w-3xl mx-auto",
  gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12",
  cardLayout = "vertical",
}: FeaturesSectionProps) => {
  return (
    <section className={backgroundClass}>
      <div className={containerClass}>
        <h2 className={titleClass}>{title}</h2>

        {subtitle && <p className={subtitleClass}>{subtitle}</p>}

        <div className={gridClass}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              link={feature.link}
              icon={feature.icon}
              layout={cardLayout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
