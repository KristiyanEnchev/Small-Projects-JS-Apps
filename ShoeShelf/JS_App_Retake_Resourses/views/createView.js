import { create } from "../requester/requestBuffer.js";
import { createTemplate } from "../templates/createTemplate.js";

export async function createView(ctx, next) {
    let templateResult = createTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let make = formData.get('make');
        let description = formData.get('description').split('\n').map(l => l.trim()).filter(l => l != '');
        let img = formData.get('img');
        let model = formData.get('model');
        let price = formData.get('price');

        if (make == '' || description == '' || img == '' || model =='' || price == '') {
            // e.target.reset();
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
        await create(body);
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }

    next();
}