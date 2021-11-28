import { getItems } from "../../requester/requestBuffer.js";
import { allGamesTemplate } from "./allGamesTemplate.js";

export async function allGamesView(ctx, next) {
    let games = await getItems();
    let templateResult = allGamesTemplate(games);
    ctx.renderView(templateResult);
    next();
}