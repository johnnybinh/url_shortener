import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const urlTable = sqliteTable("urlTable", {
  id: text("id").notNull().unique().primaryKey(),
  urlTo: text("url_to").notNull(),
});
