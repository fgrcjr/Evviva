import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundOverlay?: string;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  height?: string;
  layout?: "center" | "left" | "right";
}

export const PageHeader = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundOverlay = "bg-black/60",
  className = "",
  contentClassName = "max-w-3xl mx-auto",
  titleClassName = "text-4xl md:text-5xl font-bold text-white mb-4",
  subtitleClassName = "text-lg text-white/90 mb-4",
  descriptionClassName = "text-lg text-white/90",
  height = "h-[400px]",
  layout = "center",
}: PageHeaderProps) => {
  const getTextAlign = () => {
    switch (layout) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  const headerContent = (
    <div
      className={`relative z-20 h-full flex items-center justify-center px-4 ${getTextAlign()}`}
    >
      <div className={contentClassName}>
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        <h1 className={titleClassName}>{title}</h1>
        {description && <p className={descriptionClassName}>{description}</p>}
      </div>
    </div>
  );

  if (backgroundImage) {
    return (
      <section className={`relative ${height} bg-gray-900 ${className}`}>
        <div className={`absolute inset-0 z-10 ${backgroundOverlay}`} />
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />
        {headerContent}
      </section>
    );
  }

  return (
    <section
      className={`${height} bg-gradient-to-b from-sage-50 to-white flex items-center justify-center ${className}`}
    >
      <div className={`px-4 ${getTextAlign()}`}>
        <div className={contentClassName}>
          {subtitle && <p className="text-lg text-sage-600 mb-4">{subtitle}</p>}
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-sage-600">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};
