import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Programs",
  description: "Our comprehensive educational programs for children of all ages",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}