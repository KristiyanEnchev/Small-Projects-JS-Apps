import { errorTemplate, notificationTemplate } from "./notificationTemplate.js";

export function showNotification(message, ctx) {
    let templateResult;
    if (ctx.message == 'error') {
        templateResult = errorTemplate(message);
    } else {
        templateResult = notificationTemplate(message);
    }
    ctx.renderNotification(templateResult);
}



