import dotenv from "dotenv";
import env from "env-var";
import fs from "node:fs";
import path from "node:path";

/**
 * Node enviroment, used to load the corresponding .env file
 */
const NODE_ENV = env.get("NODE_ENV").required().asString().trim();

/**
 * Path of the .env file
 */
const envFilePath = path.join(__dirname, "..", "..", `.env.${NODE_ENV}`);

// throw error if .env file is not found
if (!fs.existsSync(envFilePath)) {
  throw Error(`No .env.${NODE_ENV} file found in: ${envFilePath}`);
}

// load .env file
dotenv.config({ path: envFilePath });

// TELEGRAM BOT

/**
 * Bot token provided by [@BotFather](https://t.me/BotFather) on bot creation
 */
export const BOT_TOKEN = env.get("BOT_TOKEN").required().asString().trim();

// DATABASE

/**
 * Database connection URL
 */
export const DB_URL = env.get("DB_URL").required().asUrlString().trim();
