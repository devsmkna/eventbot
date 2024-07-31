import { BOT_TOKEN, DB_URL } from "./config/env";
import Cmd from "./types/cmd";
import { Telegraf } from "telegraf";
import { connect } from "mongoose";
import handleCmdStart from "./commands/start";
import logger from "./config/logger";

const init = async () => {
  try {
    await connect(DB_URL);
    logger.info("Connected to database");
    const bot = new Telegraf(BOT_TOKEN);

    bot.command(Cmd.Start, handleCmdStart);

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
