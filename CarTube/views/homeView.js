import { homeTemplate} from "../templates/homePageTemplate.js";

export async function homeView(ctx, next) {
    let templateResult = homeTemplate();
    ctx.renderView(templateResult);
    next();
}