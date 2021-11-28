import { editCar, getCarById } from "../request/requestBuffer.js";
import { editTemplate } from "../templates/editPageTeplate.js";

export async function editView(ctx, next) {
    let id = ctx.params.id
    const data = await getCarById(id);
    let templateResult = editTemplate(data ,submitHandler);
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

        if (brand == data.brand && model == data.model && description == data.description && year == data.year && imageUrl == data.imageUrl && price == data.price) {
            // e.target.reset();
            ctx.page.redirect('/details/' + id);
            return alert('No changes have been made');
        }
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


        await editCar(JSON.stringify(body), sessionStorage.getItem('authToken'), id);
        e.target.reset();
        ctx.page.redirect('/details/' + id);
    }
   
    next();
}