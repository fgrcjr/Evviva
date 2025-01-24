import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "./helpers";
import { InferSelectModel } from "drizzle-orm";

export const tourRequests = sqliteTable("tour_requests", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  fullName: text("full_name"),
  email: text(),
  phone: text(),
  childAgeRange: text("child_age_range"),
  message: text(),
  ...timestamps,
});

export type TourRequest = InferSelectModel<typeof tourRequests>;
