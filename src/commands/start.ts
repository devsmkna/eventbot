import Cmd from "../types/cmd";
import { Context } from "telegraf";
import { cmdError } from "../config/logger";
import locale from "../config/locale";

/**
 * Handles start command response
 * @param ctx Telegraf context object
 */
const handleCmdStart = async (ctx: Context) => {
  try {
    await ctx.reply(locale.t(`cmd-${Cmd.Start}`));
  } catch (error) {
    cmdError(Cmd.Start, ctx, error);
  }
};

export default handleCmdStart;
