import type { Config } from "drizzle-kit";

export default {
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "./db.sqlite3",
  },
  verbose: true,
  strict: true,
} satisfies Config;
