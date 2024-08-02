import "dotenv-safe/config.js";
import Express from "express";
import passport from "passport";
import { Strategy } from "passport-discord-auth";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { DbUser, db } from "./db";
import path from "path";
import { eq } from "drizzle-orm";
import { usersTable } from "./schema";
// import { sendAuthCookies } from "./createAuthTokens";
// import { addTrpc } from "./appRouter";
// import { __prod__ } from "./constants";

const app = Express();

app.use(Express.json());

app.listen(8800, () => {
  console.log("connected to backend");
});
