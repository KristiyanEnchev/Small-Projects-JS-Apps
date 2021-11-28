import { showNotification } from "../Extras/notifications.js";
import { getMyItems } from "../requester/requestBuffer.js";
import { profileTemplate } from "../templates/profileTemplate.js";

export async function profileView(ctx, next) {
    showNotification("", 'loading', ctx);

    const data = await getMyItems();
    let user = sessionStorage.getItem('email');
    console.log( data);
    let templateResult = profileTemplate(data, user);
    ctx.renderView(templateResult);
    next();
}