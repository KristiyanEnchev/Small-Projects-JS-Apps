import { getItems } from "../../requester/requestBuffer.js";
import { dashboardTemplate } from "./dashboardTemplate.js";

export async function dashboardView(ctx, next) {
    let books = await getItems();
    let templateResult = dashboardTemplate(books);
    ctx.renderView(templateResult);
    next();
}