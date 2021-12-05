import { BotWithCache } from "../../deps.ts";
import setupEventsPermChecks from "./events.ts";
import createGuild from "./createGuild.ts";
import deleteGuild from "./deleteGuild.ts";
import editGuild from "./editGuild.ts";

export default function setupChannelPermChecks(bot: BotWithCache) {
    setupEventsPermChecks(bot);
    createGuild(bot);
    deleteGuild(bot);
    editGuild(bot);
}