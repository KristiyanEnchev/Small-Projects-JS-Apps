import { render } from "../node_modules/lit-html/lit-html.js";

let main;
let nav;
let notification;

function init(viewContainer, navigationContainer, notificationContainer) {
    main = viewContainer;
    nav = navigationContainer;
    notification = notificationContainer;
}

function renderView(template) {
    render(template, main);
}

function renderNavigation(template) {
    render(template, nav);
}

export function renderNotification(template, status) {
    render(template, notification);
    if (status == 'loading') {
        setTimeout(clearNotify, 200);
    } else {
        setTimeout(clearNotify, 4000);
    }
}

function clearNotify() {
    render('', notification);
}

function bindContext(ctx, next) {
    ctx.renderView = renderView;
    ctx.renderNavigation = renderNavigation;
    ctx.renderNotification = renderNotification;

    next();
}

export default {
    init,
    bindContext,
    renderView,
    renderNavigation
}