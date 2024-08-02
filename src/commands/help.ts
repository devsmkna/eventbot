import Cmd from "../types/cmd";
import { Context } from "telegraf";
import { cmdError } from "../config/logger";
import { t } from "../config/locale";

/**
 * Handles help command response
 * @param ctx Telegraf context object
 */
const handleCmdHelp = async (ctx: Context) => {
  try {
    const arg = ctx.text && ctx.text.split(" ")[1];
    if (arg && Object.keys(Cmd).includes(arg)) {
      await ctx.reply(`/${arg} - ${t(`${arg}.help`)}`);
      return;
    }
    // generate for each command the string: /<cmd> - <description>
    const commandsWithDesc = Object.keys(Cmd)
      .map((cmd: string) => `/${cmd} - ${t(`${cmd}.help`)}`)
      .join("\n");
    await ctx.reply(
      t(`${Cmd.help}.msg`).replace("<message>", commandsWithDesc),
    );
  } catch (error) {
    cmdError(Cmd.help, ctx, error);
  }
};

export default handleCmdHelp;
