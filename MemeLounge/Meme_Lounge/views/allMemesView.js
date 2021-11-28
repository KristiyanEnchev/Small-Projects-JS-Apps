import { getMemes } from "../request/requestBuffer.js";
import { allMemesTemplate} from "../templates/allMemesTemplate.js";

export async function allMemesView(ctx, next) {
    const data = await getMemes();
    let templateResult = allMemesTemplate(data);
    ctx.renderView(templateResult);
    next();
}