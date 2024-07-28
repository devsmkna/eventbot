import pino from "pino";
import { Context } from "telegraf";
import { Commands } from "../commands/commands";

/**
 * Logger object for better log messages
 */
const logger = pino({
  transport: {
    targets: [
      {
        target: "pino-pretty",
        options: {
          ignore: "err,ctx",
        },
      },
      {
        target: "pino/file",
        options: { destination: `.log` },
      },
    ],
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

/**
 * Handle common command error
 * @param cmd command name
 * @param ctx Telegraf context object
 * @param err Error object
 */
export const cmdError = (cmd: Commands, ctx: Context, err: unknown) => {
  logger.error(
    { err, ctx },
    `Command /${cmd} raised an error. Seek .log file for more info.`,
  );
};

export default logger;
