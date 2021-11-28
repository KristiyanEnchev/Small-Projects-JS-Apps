import { render } from "../node_modules/lit-html/lit-html.js"


let notification;

function init(notificationContainer) {
    notification = notificationContainer;
}

export function renderNotification(template){
    render(template, notification);
    setTimeout(clearNotify, 3000);
}

function clearNotify() {
    render('', notification);
}

function bindContext(ctx, next) {
    ctx.renderNotification = renderNotification;
    next();
}