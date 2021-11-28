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
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        let maxLevel = formData.get('maxLevel');
        let summary = formData.get('summary');

        if (title == data.title && summary == data.summary && imageUrl == data.imageUrl && category == data.category && maxLevel == data.maxLevel) {
            ctx.page.redirect('/details/' + id);
            return alert('No changes have been made');
        }
        if (title == '' || summary == '' || imageUrl == '' || category == '' || maxLevel == '') {
            return alert('All fields must be filed up');
        }

        let body = {
            title,
            category,
            imageUrl,
            maxLevel,
            summary
        }

        await edit(id, body);
        e.target.reset();

        return ctx.page.redirect('/details/' + id);
    }

    next();
}