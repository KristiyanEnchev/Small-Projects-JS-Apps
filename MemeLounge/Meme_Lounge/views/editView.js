import { editMeme, getMemesById } from "../request/requestBuffer.js";
import { editTemplate } from "../templates/editTemplate.js";

export async function editView(ctx, next) {
    let id = ctx.params.id
    const data = await getMemesById(id);
    let templateResult = editTemplate(data, submitHandler);
    ctx.renderView(templateResult);


    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        if (title == data.title && description == data.description && imageUrl == data.imageUrl) {
            // e.target.reset();
            ctx.page.redirect('/details/' + id);
            return alert('No changes have been made');
        }
        if (title == '' || description == '' || imageUrl == '') {
            // e.target.reset();
            return alert('All fields must be filed up');
        }

        let body = {
            title,
            description,
            imageUrl,
        }

        await editMeme(id, body);
        e.target.reset();
        ctx.page.redirect('/details/' + id);
    }

    next();
}