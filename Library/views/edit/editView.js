import { edit, getItemsById } from "../../requester/requestBuffer.js";
import { editTemplate } from "./editTemplate.js";

export async function editView(ctx, next) {
    let id = ctx.params.id

    const data = await getItemsById(id);

    let templateResult = editTemplate(data, submitHandler);
    ctx.renderView(templateResult);


    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if (title == data.title && description == data.description && imageUrl == data.imageUrl && type == data.type) {
            ctx.page.redirect('/details/' + id);
            return alert('No changes have been made');
        }
        if (title == '' || description == '' || imageUrl == '' || type == '') {
            return alert('All fields must be filed up');
        }

        let body = {
            title,
            description,
            imageUrl,
            type
        }

        await edit(id, body);
        e.target.reset();

        return alert("Eddited successfully"), ctx.page.redirect('/details/' + id);
    }

    next();
}