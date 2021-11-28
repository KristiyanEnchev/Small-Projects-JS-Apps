import { getCars } from "../request/requestBuffer.js";
import { allListTemplate} from "../templates/allListingsTeplate.js";

export async function allListView(ctx, next) {
    const data = await getCars();
    let templateResult = allListTemplate(data);
    ctx.renderView(templateResult);
    next();
}