import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  ctaText?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  className?: string;
  accordionClassName?: string;
  maxWidth?: string;
}

export const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our daycare services and Montessori approach.",
  faqs,
  ctaText = "Still have questions?",
  ctaButtonText = "Contact Us",
  ctaButtonHref = "/contact",
  className = "min-h-screen bg-gradient-to-b from-sage-50 to-white pt-24",
  accordionClassName = "space-y-4",
  maxWidth = "max-w-3xl",
}: FAQSectionProps) => {
  return (
    <div className={className}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            {title}
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className={`${maxWidth} mx-auto animate-on-scroll`}>
          <Accordion type="single" collapsible className={accordionClassName}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-sage-200"
              >
                <AccordionTrigger className="px-6 text-sage-800 hover:text-sage-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sage-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {ctaText && ctaButtonText && (
            <div className="text-center mt-12">
              <p className="text-sage-600 mb-4">{ctaText}</p>
              <Link href={ctaButtonHref}>
                <Button className="bg-nature-600 hover:bg-nature-700">
                  {ctaButtonText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
