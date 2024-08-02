import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { usersTable } from "./schema";

const queryClient = postgres(String(process.env.DATABASE_URL));

export type DbUser = typeof usersTable.$inferSelect;

export const db = drizzle(queryClient, {
  schema: {
    users: usersTable,
  },
});
