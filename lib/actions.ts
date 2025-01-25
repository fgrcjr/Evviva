"use server";

import { tourRequests } from "@/db/schema";
import { tourRequestSchema } from "./schema";
import { db } from "@/db";

export async function createTourRequest(formData: FormData) {

  try {
    const data = {
      fullName: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      childAgeRange: formData.get("child_age_range") as string,
      message: formData.get("message") as string,
    };
  
    const parsed = tourRequestSchema.safeParse(data);
  
    if (!parsed.success) {
      throw new Error("Failed to parse form data");
    }
  
    const tourRequest = await db
      .insert(tourRequests)
      .values({
        ...parsed.data,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning()
      .get();

      return tourRequest;
  } catch(error) {
      return error;
  } 

}
