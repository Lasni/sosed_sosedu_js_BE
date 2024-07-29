import { text, pgTable, uuid, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`)
    .notNull(),
  discordId: text("discord_id").notNull(),
  refreshTokenVersion: integer("refresh_token_version").default(1).notNull(),
});
