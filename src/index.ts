import { Telegraf } from "telegraf";
import { BOT_TOKEN, DB_URL } from "./config/env";
import { connect } from "mongoose";

const init = async () => {
  try {
    await connect(DB_URL);
    console.log("Connected to database");
    const bot = new Telegraf(BOT_TOKEN);

    bot.launch();

    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (error) {
    console.error(error);
  }
};

init();
