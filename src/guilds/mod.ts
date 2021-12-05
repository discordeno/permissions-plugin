import { BotWithCache } from "../../deps.ts";
import setupEventsPermChecks from "./events.ts";

export default function setupChannelPermChecks(bot: BotWithCache) {
    setupEventsPermChecks(bot);
}