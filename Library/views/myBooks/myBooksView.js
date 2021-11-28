import { getMyItems } from "../../requester/requestBuffer.js";
import { myBookTemplate } from "./myBooksTemplate.js";

export async function myBooksView(ctx, next) {
    const data = await getMyItems();
    console.log(data);
    let templateResult = myBookTemplate(data);
    ctx.renderView(templateResult);
    next();
}