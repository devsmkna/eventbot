import { connect } from "mongoose";
import { pino } from "pino";
import { Telegraf } from "telegraf";
import { BOT_TOKEN, DB_URL } from "./config/env";

export const log = pino();

const init = async () => {
  try {
    await connect(DB_URL);
    log.info("Connected to database");
    const bot = new Telegraf(BOT_TOKEN);

    bot.launch();

    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (error) {
    log.error(error);
  }
};

init();
