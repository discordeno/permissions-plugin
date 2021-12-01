import { Bot, Cache } from "./deps.ts";
import setupAddToThread from "./src/channels/threads/addToThread.ts";
import setupGetArchivedThreads from "./src/channels/threads/getArchivedThreads.ts";
import setupDeleteChannel from "./src/deleteChannel.ts";
import setupEditMember from "./src/editMember.ts";

// PLUGINS MUST TAKE A BOT ARGUMENT WHICH WILL BE MODIFIED
export function enablePermissionsPlugin(bot: Bot<Cache>) {
  // PERM CHECKS REQUIRE CACHE DUH!
  if (!bot.enabledPlugins?.has("CACHE")) {
    throw new Error("The PERMISSIONS plugin requires the CACHE plugin first.");
  }

  // MARK THIS PLUGIN BEING USED
  bot.enabledPlugins.add("PERMISSIONS");

  // BEGIN OVERRIDING HELPER FUNCTIONS
  setupAddToThread(bot);
  setupDeleteChannel(bot);
  setupEditMember(bot);
  setupGetArchivedThreads(bot);

  // PLUGINS MUST RETURN THE BOT
  return bot;
}

// EXPORT ALL UTIL FUNCTIONS
export * from "./src/permissions.ts";
// DEFAULT MAKES IT SLIGHTLY EASIER TO USE
export default enablePermissionsPlugin;
