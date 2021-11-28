import { getMyMemes } from "../request/requestBuffer.js";
import { myProfileTemplate} from "../templates/my-profileTemplate.js";

export async function myProfileView(ctx, next) {
    const data = await getMyMemes();
    ctx.email = ctx.username
    ctx.gender = sessionStorage.getItem('gender');
    ctx.username = sessionStorage.getItem('username');
    console.log(ctx.username);
    let templateResult = myProfileTemplate(ctx , data);
    ctx.renderView(templateResult);
    next();
}