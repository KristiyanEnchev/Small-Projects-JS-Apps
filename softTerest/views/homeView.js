import { homeTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx, next) {
    let isLogedIn = sessionStorage.getItem('email');
    let loged = false;
    if (isLogedIn != null) {
        loged = true;
    }
    let templateResult = homeTemplate(loged);
    ctx.renderView(templateResult);
    next();
}