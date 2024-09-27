import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const urlTable = sqliteTable("urlTable", {
  id: text("id").notNull().unique().primaryKey(),
  urlTo: text("url_to").notNull(),
  timestamp: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
  qrBase64: text("qr_base_64").unique().notNull(),
});
