export const ageRanges = [
  "infant",
  "toddler",
  "preschooler",
  "schoolAge",
] as const;

export const ageRange = {
  infant: "Infant",
  toddler: "Toddler",
  preschooler: "Preschooler",
  schoolAge: "School-Age",
} as const;

export const ageRangeDescription = {
  infant: "6 weeks to 12 months",
  toddler: "12 months to 3 years",
  preschooler: "3 to 5 years",
  schoolAge: "5 years and older",
} as const;
