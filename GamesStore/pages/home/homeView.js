import { getMostRecentItems } from "../../requester/requestBuffer.js";
import { homeTemplate } from "./homeTemplate.js";

export async function homeView(ctx, next) {
    let games = await getMostRecentItems();
    let templateResult = homeTemplate(games);
    ctx.renderView(templateResult);
    next();
}