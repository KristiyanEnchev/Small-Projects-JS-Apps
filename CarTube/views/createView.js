import { create } from "../request/requestBuffer.js";
import { createTemplate} from "../templates/createTemplate.js";

export async function createView(ctx, next) {
    let templateResult = createTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let brand = formData.get('brand');
        let model = formData.get('model');
        let description = formData.get('description');
        let year = Number(formData.get('year'));
        let imageUrl = formData.get('imageUrl');
        let price = Number(formData.get('price'));

        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
            // e.target.reset();
            return alert('All fields must be filed up');
        }

        let body = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        }

        await create(JSON.stringify(body), sessionStorage.getItem('authToken'));
        e.target.reset();
        ctx.page.redirect('/all-list');
    }

    next();
}