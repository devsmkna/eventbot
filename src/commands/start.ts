import Cmd from "../types/cmd";
import { Context } from "telegraf";
import { cmdError } from "../config/logger";
import { t } from "../config/locale";

/**
 * Handles start command response
 * @param ctx Telegraf context object
 */
const handleCmdStart = async (ctx: Context) => {
  try {
    await ctx.reply(t(`${Cmd.start}.msg`));
  } catch (error) {
    cmdError(Cmd.start, ctx, error);
  }
};

export default handleCmdStart;
