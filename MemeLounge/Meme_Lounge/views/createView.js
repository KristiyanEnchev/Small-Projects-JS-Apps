import { create } from "../request/requestBuffer.js";
import { createTemplate} from "../templates/createTemplate.js";

export async function createView(ctx, next) {
    let templateResult = createTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        if (title == '' || description == '' || imageUrl == '') {
            // e.target.reset();
            return alert('All fields must be filed up');
        }

        let body = {
            title,
            description,
            imageUrl,
        }

        await create(body);
        e.target.reset();
        ctx.page.redirect('/all-memes');
    }

    next();
}