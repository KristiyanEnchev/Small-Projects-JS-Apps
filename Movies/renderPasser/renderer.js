import { render } from "../node_modules/lit-html/lit-html.js"

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

export function renderNotification(template){
    render(template, notification);
    setTimeout(clearNotify, 3000);
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