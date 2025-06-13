"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { createTourRequest } from "@/lib/actions";
import { ageRange } from "@/lib/constants";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  fields?: FormField[];
  submitLabel?: string;
  className?: string;
  onSubmit?: (formData: FormData) => Promise<any>;
  successMessage?: string;
  errorMessage?: string;
}

const defaultFields: FormField[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
  },
  {
    name: "child_age_range",
    label: "Child's Age",
    type: "select",
    required: true,
    options: Object.entries(ageRange).map(([key, val]) => ({
      value: key,
      label: val,
    })),
  },
  {
    name: "message",
    label: "Additional Information",
    type: "textarea",
    placeholder:
      "Please share any specific questions or preferences for the tour.",
    rows: 5,
  },
];

export const ContactForm = ({
  title = "Schedule a Tour",
  subtitle,
  fields = defaultFields,
  submitLabel = "Request Tour",
  className = "bg-white p-10 rounded-lg shadow-md border border-sage-200 w-full md:max-w-2xl mx-auto",
  onSubmit = createTourRequest,
  successMessage,
  errorMessage = "Failed to send message. Please try again.",
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await onSubmit(formData);
      const name = formData.get("name") as string;
      const message =
        successMessage || `Thank you, ${name || ""}! We'll be in touch soon.`;
      toast.success(message);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const baseProps = {
      id: field.name,
      name: field.name,
      required: field.required,
      className: "w-full py-3 px-4 text-lg border border-gray-300 rounded-lg",
    };

    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            {...baseProps}
            rows={field.rows}
            placeholder={field.placeholder}
          />
        );
      case "select":
        return (
          <Select name={field.name} required={field.required}>
            <SelectTrigger className="w-full py-3 px-4 text-lg border border-gray-300 rounded-lg">
              <SelectValue placeholder="Select an item" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            {...baseProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <div className={className}>
      <h2 className="text-3xl font-bold text-sage-800 mb-6 text-center md:text-left">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sage-600 mb-6 text-center md:text-left">
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="hidden"
          name="access_key"
          value="YOUR-WEB3FORMS-ACCESS-KEY"
        />
        <input
          type="hidden"
          name="subject"
          value="New Tour Request - Evviva Montessori"
        />

        {fields.map((field) => (
          <div key={field.name} className="space-y-1">
            <Label
              htmlFor={field.name}
              className="text-xl font-medium text-sage-800"
            >
              {field.label}
            </Label>
            {renderField(field)}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full py-3 bg-nature-600 hover:bg-nature-700 text-white font-semibold text-xl rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : submitLabel}
        </Button>
      </form>
    </div>
  );
};
