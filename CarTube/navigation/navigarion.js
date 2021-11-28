import { navigationTemplate } from "../navigation/navigationTemplate.js";

export async function navigation(ctx, next) {
    let isLogedIn = sessionStorage.getItem('username');
    let loged = false;
    if (isLogedIn != null) {
        loged = true;
    }
    ctx.username = isLogedIn;
    let templateResult = navigationTemplate(loged, ctx);
    ctx.renderNavigation(templateResult);
    next();
}