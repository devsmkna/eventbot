import Cmd from "../types/cmd";
import { Context } from "telegraf";
import pino from "pino";

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
 * Handles common command error
 * @param cmd command name
 * @param ctx Telegraf context object
 * @param err Error object
 */
export const cmdError = (cmd: Cmd, ctx: Context, err: unknown) => {
  logger.error(
    { err, ctx },
    `Command /${cmd} raised an error. Seek .log file for more info.`,
  );
};

export default logger;
