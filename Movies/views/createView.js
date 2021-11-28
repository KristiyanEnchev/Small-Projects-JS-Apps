import { showNotification } from "../Extras/notifications.js";
import { create } from "../requester/requestBuffer.js";
import { createTemplate } from "../templates/createTemplate.js";

export async function createView(ctx, next) {
    let templateResult = createTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description').split('\n').map(l => l.trim()).filter(l => l != '');
        let img = formData.get('imageUrl');

        if (title == '' || description == '' || img == '') {
            // e.target.reset();
            ctx.message = "error";
            return showNotification('All fields must be filed up', ctx);
        }

        let body = {
            title,
            description,
            img,
        }
        await create(body);
        e.target.reset();
        ctx.page.redirect('/home');
    }

    next();
}