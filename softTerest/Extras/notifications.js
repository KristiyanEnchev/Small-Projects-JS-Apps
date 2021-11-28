import { errorTemplate, loadingTemplate, notificationTemplate } from "./notificationTemplate.js";

export function showNotification(message, status, ctx) {
    let templateResult;
    if (status == 'error') {
        templateResult = errorTemplate(message);
    } else if (status == 'success') {
        templateResult = notificationTemplate(message);
    } else if (status == 'loading') {
        templateResult = loadingTemplate();
    }
    ctx.renderNotification(templateResult, status);
}

