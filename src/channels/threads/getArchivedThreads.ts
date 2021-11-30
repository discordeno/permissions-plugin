import { Bot } from "../../../deps.ts";
import { requireBotChannelPermissions } from "../../permissions.ts";

export default function getArchivedThreads(bot: Bot) {
  const getArchivedThreadsOld = bot.helpers.getArchivedThreads;

  bot.helpers.getArchivedThreads = async function (channelId, options) {
    const channel = await bot.cache.channels.get(channelId);

    if (channel) {
      await requireBotChannelPermissions(
        bot,
        channel,
        options?.type === "private"
          ? ["READ_MESSAGE_HISTORY", "MANAGE_THREADS"]
          : ["READ_MESSAGE_HISTORY"],
      );
    }

    return getArchivedThreadsOld(channelId, options);
  };
}
