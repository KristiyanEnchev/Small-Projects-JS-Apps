import { render } from "../node_modules/lit-html/lit-html.js";

let main;
let nav;
let footer;

function init(viewContainer, navigationContainer, footerContainer) {
    nav = navigationContainer;
    footer = footerContainer;
    main = viewContainer;
}

function renderView(template) {
    render(template, main);
}

function renderNavigation(template) {
    render(template, nav);
}

function renderFooter(template) {
    render(template, footer);
}

function bindContext(ctx, next) {
    ctx.renderView = renderView;
    ctx.renderNavigation = renderNavigation;
    ctx.renderFooter = renderFooter;
    next();
}

export default {
    init,
    renderFooter,
    bindContext,
    renderView,
    renderNavigation,
}