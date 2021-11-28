import { showNotification } from "../Extras/notifications.js";
import { edit, getItemsById } from "../requester/requestBuffer.js";
import { editTemplate } from "../templates/editTemplate.js";

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
        let img = formData.get('imageUrl');

        if (title == data.title && description == data.description && img == data.img) {
            ctx.page.redirect('/details/' + id);
            ctx.message = "error";
            return showNotification('No changes have been made', ctx);
        }
        if (title == '' || description == '' || img == '') {
            ctx.message = "error";
            return showNotification('All fields must be filed up', ctx);
        }

        let body = {
            title,
            description,
            img,
        }

        await edit(id, body);
        e.target.reset();

        return showNotification("Eddited successfully", ctx), ctx.page.redirect('/details/' + id);
    }

    next();
}