import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "./config/env";

const bot = new Telegraf(BOT_TOKEN);
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
