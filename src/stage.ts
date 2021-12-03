import { BotWithCache } from "../deps.ts";
import { requireBotChannelPermissions } from "./permissions.ts";

export function createStageInstance(bot: BotWithCache) {
  const createStageInstanceOld = bot.helpers.createStageInstance;

  bot.helpers.createStageInstance = function (channelId, topic, privacyLevel) {
    if (!bot.utils.validateLength(topic, { max: 120, min: 1 })) {
      throw new Error(
        "The topic length for creating a stage instance must be between 1-120.",
      );
    }

    requireBotChannelPermissions(bot, channelId, [
      "MANAGE_CHANNELS",
      "MUTE_MEMBERS",
      "MOVE_MEMBERS",
    ]);

    return createStageInstanceOld(channelId, topic, privacyLevel);
  };
}
