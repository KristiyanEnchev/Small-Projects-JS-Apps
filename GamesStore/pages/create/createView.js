import { create } from "../../requester/requestBuffer.js";
import { createTemplate } from "./createTemplate.js";

export async function createView(ctx, next) {
    let templateResult = createTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        let maxLevel = formData.get('maxLevel');
        let summary = formData.get('summary');

        if (title == '' || category == '' || imageUrl == '' || maxLevel == '' || summary == '') {
            // e.target.reset();
            return alert('All fields must be filed up');
        }

        let body = {
            title,
            category,
            imageUrl,
            maxLevel,
            summary
        }
        await create(body);
        e.target.reset();
        ctx.page.redirect('/home');
    }

    next();
}