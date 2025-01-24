import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "./helpers";

export const tourRequests = sqliteTable("tour_requests", {
  id: integer(),
  fullName: text("full_name"),
  email: text(),
  phone: text(),
  childAge: integer("child_age"),
  message: text(),
  ...timestamps,
});
