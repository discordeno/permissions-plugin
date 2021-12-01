import { Bot, Cache } from "../../../deps.ts";

export default function leaveThread(bot: Bot<Cache>) {
  const leaveThreadOld = bot.helpers.leaveThread;

  bot.helpers.leaveThread = function (threadId) {
    const channel = bot.cache.channels.get(threadId);

    if (channel && !channel.archived) {
      throw new Error("You can not leave an archived channel.");
    }

    return leaveThreadOld(threadId);
  };
}
