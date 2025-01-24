import { z } from "zod";
import { ageRanges } from "./constants";

export const tourRequestSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  childAgeRange: z.enum(ageRanges),
  message: z.string().optional(),
});
