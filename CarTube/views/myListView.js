import { getMyCars } from "../request/requestBuffer.js";
import { myListTemplate} from "../templates/my-listingsTemplate.js";

export async function myListView(ctx, next) {
    const data = await getMyCars();
    console.log(data);
    let templateResult = myListTemplate(data);
    ctx.renderView(templateResult);
    next();
}