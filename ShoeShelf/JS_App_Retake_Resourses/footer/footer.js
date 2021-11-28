import { footerTemplate } from "./footerTemplate.js";

export async function footer(ctx, next) {
    let templateResult = footerTemplate();
    ctx.renderFooter(templateResult);
    next();
}