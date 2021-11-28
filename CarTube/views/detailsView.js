import { deleteRequest, getCarById } from "../request/requestBuffer.js";
import { detailsTemplate} from "../templates/detailsTeplate.js";

export async function detailsView(ctx, next) {
    let id = ctx.params.id
    const data = await getCarById(id);
    let owner = data._ownerId;
    let isOwner = false;
    if (sessionStorage.getItem('userId') == owner) {
        isOwner = true;
    }
    let templateResult = detailsTemplate(data, deleteFunc, isOwner);
    ctx.renderView(templateResult);

    async function deleteFunc(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            await deleteRequest(id, sessionStorage.getItem('authToken'))
            ctx.page.redirect('/all-list');
        }
    }
    next();
}