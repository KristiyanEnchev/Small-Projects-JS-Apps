import { navigationTemplate } from "./navigationTemplate.js";

export async function navigation(ctx, next) {
    let isLogedIn = sessionStorage.getItem('email');
    let loged = false;
    if (isLogedIn != null) {
        loged = true;
    }
    ctx.email = isLogedIn;
    let templateResult = navigationTemplate(loged, ctx);
    ctx.renderNavigation(templateResult);
    next();
}