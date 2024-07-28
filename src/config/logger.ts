import pino from "pino";

/**
 * Logger object for better log messages
 */
const logger = pino({
  transport: {
    targets: [
      { target: "pino-pretty" },
      {
        target: "pino/file",
        options: { destination: `.log` },
      },
    ],
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
