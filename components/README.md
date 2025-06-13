# Visual Edit Compatible Components

This directory contains modular, reusable components designed to be easily editable in visual editors like Builder.io, Webflow, or other similar tools.

## Component Structure

### UI Components (Basic Building Blocks)

- **Logo**: Configurable logo component with fallback text
- **NavigationDropdown**: Modular navigation item with dropdown support
- **SocialIcons**: Reusable social media icons component
- **FooterSection**: Modular footer section with links
- **FeatureCard**: Configurable feature/service card
- **ContactInfo**: Contact information display component
- **ContactForm**: Flexible contact form component
- **ProgramCard**: Educational program display card
- **PageHeader**: Reusable page header with optional background image

### Section Components (Complex Layouts)

- **HeroSection**: Hero section with configurable layout and content
- **FeaturesSection**: Features showcase section
- **FAQSection**: FAQ section with accordion

### Main Components (Full Components)

- **Navigation**: Complete navigation bar
- **Footer**: Complete footer component

## Usage Examples

### Basic Hero Section

```tsx
import { HeroSection } from "@/components";

<HeroSection
  title="Your Title"
  description="Your description"
  imageSrc="/hero.jpg"
  imageAlt="Hero image"
  buttons={[
    { href: "/contact", label: "Get Started" },
    { href: "/about", label: "Learn More", variant: "outline" },
  ]}
/>;
```

### Features Section

```tsx
import { FeaturesSection } from "@/components";

<FeaturesSection
  title="Our Features"
  features={[
    {
      title: "Feature 1",
      description: "Description of feature 1",
      imageSrc: "/feature1.jpg",
      link: { href: "/feature1", label: "Learn More" },
    },
  ]}
/>;
```

### Contact Form

```tsx
import { ContactForm } from "@/components";

<ContactForm
  title="Contact Us"
  fields={[
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ]}
  submitLabel="Send Message"
/>;
```

### Navigation

```tsx
import { Navigation } from "@/components";

<Navigation
  logoSrc="/logo.png"
  ctaLabel="Get Started"
  ctaHref="/contact"
  navLinks={[
    {
      href: "/about",
      label: "About",
      dropdown: [
        { href: "/about/story", label: "Our Story" },
        { href: "/about/team", label: "Our Team" },
      ],
    },
  ]}
/>;
```

## Props Interface Examples

### HeroSection Props

```typescript
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  buttons?: HeroButton[];
  backgroundClass?: string;
  layout?: "left" | "right" | "center";
}
```

### FeatureCard Props

```typescript
interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: {
    href: string;
    label: string;
    variant?: ButtonVariant;
  };
  icon?: LucideIcon;
  layout?: "vertical" | "horizontal";
}
```

## Visual Editor Benefits

1. **Modularity**: Each component handles a specific purpose
2. **Configurability**: Props allow easy customization without code changes
3. **Reusability**: Components can be reused across different pages
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Flexibility**: Optional props with sensible defaults
6. **Consistency**: Shared design tokens and styling patterns

## Design Tokens

The components use consistent design tokens:

- `sage-*`: Primary brand colors
- `nature-*`: Accent colors
- `text-*`: Typography scales
- `space-*`: Consistent spacing

## Best Practices

1. Always provide default values for optional props
2. Use semantic HTML elements
3. Include proper accessibility attributes
4. Maintain consistent naming conventions
5. Export components from the main index file
6. Document component interfaces with TypeScript
