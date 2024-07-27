import { connect } from "mongoose";
import { Telegraf } from "telegraf";
import { BOT_TOKEN, DB_URL, logger } from "./config/env";

const init = async () => {
  try {
    await connect(DB_URL);
    logger.info("Connected to database");
    const bot = new Telegraf(BOT_TOKEN);

    bot.launch();
    logger.info("Bot started");

    process.once("SIGINT", () => {
      bot.stop("SIGINT");
      logger.info("SIGINT: Bot stopped");
    });
    process.once("SIGTERM", () => {
      bot.stop("SIGTERM");
      logger.info("SIGTERM: Bot stopped");
    });
  } catch (error) {
    logger.error(error);
  }
};

init();
