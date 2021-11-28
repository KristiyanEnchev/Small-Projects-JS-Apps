import { showNotification } from "../Extras/notifications.js";
import { getItems } from "../requester/requestBuffer.js";
import { dashboardTemplate } from "../templates/dashboardTemplate.js";

export async function dashboardView(ctx, next) {
    showNotification("", 'loading', ctx)
    let data = await getItems();

    let templateResult = dashboardTemplate(data);
    ctx.renderView(templateResult);
    next();
}