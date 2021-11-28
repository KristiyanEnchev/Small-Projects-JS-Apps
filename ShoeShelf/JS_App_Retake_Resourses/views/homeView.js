import { homeTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx, next) {
    let templateResult = homeTemplate();
    ctx.renderView(templateResult);
    next();
}