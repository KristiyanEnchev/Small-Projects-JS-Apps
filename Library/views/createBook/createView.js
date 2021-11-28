import { create } from "../../requester/requestBuffer.js";
import { createTemplate } from "./createTemplate.js";

export async function createView(ctx, next) {
    let templateResult = createTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if (title == '' || description == '' || imageUrl == '' || type == '') {
            // e.target.reset();
            return alert('All fields must be filed up');
        }

        let body = {
            title,
            description,
            imageUrl,
            type
        }
        await create(body);
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }

    next();
}

// .split('\n').map(l => l.trim()).filter(l => l != '');