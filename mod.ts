import { Bot } from "./deps.ts";
import setupDeleteChannel from "./src/deleteChannel.ts";
import setupEditMember from "./src/editMember.ts";

// PLUGINS MUST TAKE A BOT ARGUMENT WHICH WILL BE MODIFIED
export function enablePermissionsPlugin(bot: Bot) {
  // PERM CHECKS REQUIRE CACHE DUH!
  if (!bot.enabledPlugins?.has("CACHE")) {
    throw new Error("The PERMISSIONS plugin requires the CACHE plugin first.");
  }

  // MARK THIS PLUGIN BEING USED
  bot.enabledPlugins.add("PERMISSIONS");

  // BEGIN OVERRIDING HELPER FUNCTIONS
  setupDeleteChannel(bot);
  setupEditMember(bot);

  // PLUGINS MUST RETURN THE BOT
  return bot;
}

// EXPORT ALL UTIL FUNCTIONS
export * from "./src/permissions.ts"
// DEFAULT MAKES IT SLIGHTLY EASIER TO USE
export default enablePermissionsPlugin;
