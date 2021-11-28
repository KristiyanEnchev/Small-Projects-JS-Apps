import { buyShoeRequest, deleteRequest, getItemsById, getOwnShoes } from "../requester/requestBuffer.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";


export async function detailsView(ctx, next) {
    let id = ctx.params.id
    const userId = sessionStorage.getItem('userId');


    let [shoe, ownShoe] = await Promise.all([
        getItemsById(id),
        getOwnShoes(id, userId)
    ]);
    // let shoe = await getItemsById(id)

    const owner = shoe._ownerId;
    let isOwner = false;
    if (sessionStorage.getItem('userId') == owner) {
        isOwner = true;
    }

    let templateResult = detailsTemplate(shoe, deleteFunc, isOwner, buyFunc, ownShoe);
    ctx.renderView(templateResult);

    async function deleteFunc(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            await deleteRequest(id)
            alert("Deleted successfully");
            // showNotification("Deleted successfully", ctx);
            ctx.page.redirect('/dashboard');
        }
    }

    async function buyFunc(е) {

        let body = {
            shoeId: id
        }

        let newOwnShoe = await buyShoeRequest(body, id, userId);

        ctx.renderView(detailsTemplate(shoe, deleteFunc, isOwner, buyFunc, newOwnShoe));
    }

    next();
}