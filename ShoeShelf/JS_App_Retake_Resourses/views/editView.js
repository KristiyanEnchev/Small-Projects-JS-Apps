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
        let make = formData.get('make');
        let description = formData.get('description');
        let img = formData.get('img');
        let model = formData.get('model');
        let price = formData.get('price');

        if (make == data.make && description == data.description && img == data.img && price == data.price && model == data.model) {
            ctx.page.redirect('/details/' + id);
            // return showNotification('No changes have been made', ctx);
            return alert("No changes have been made");
        }
        if (make == '' || description == '' || img == '' || model == '' || price == '') {
            ctx.message = "error";
            // return showNotification('All fields must be filed up', ctx);
            return alert('All fields must be filed up');
        }

        let body = {
            make,
            description,
            img,
            model,
            price
        }

        await edit(id, body);
        e.target.reset();

        return alert("Eddited successfully"), ctx.page.redirect('/details/' + id);
    }

    next();
}