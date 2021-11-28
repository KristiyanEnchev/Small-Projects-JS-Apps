import { deleteRequest, getItemsById, getLikesByBookId, getOwnLikesByBookId, likeBookRequest } from "../../requester/requestBuffer.js";
import { detailsTemplate } from "./detailsTemplate.js";


export async function detailsView(ctx, next) {
    let id = ctx.params.id

    let isLogedIn = sessionStorage.getItem('userId');
    let loged = false;
    if (isLogedIn != null) {
        loged = true;
    }

    let [book, likes] = await Promise.all([
        getItemsById(id),
        getLikesByBookId(id),
        // getOwnLikesByBookId(id, isLogedIn)
    ]);

    if (loged) {
        let ownLikes = await getOwnLikesByBookId(id, isLogedIn);
        ctx.likes = ownLikes
    }

    const owner = book._ownerId;
    let isOwner = false;
    if (sessionStorage.getItem('userId') == owner) {
        isOwner = true;
    }

    let templateResult = detailsTemplate(book, deleteFunc, isOwner, likes, likeBook, ctx, loged);
    ctx.renderView(templateResult);

    async function deleteFunc(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            await deleteRequest(id)
            // alert("Deleted successfully");
            ctx.page.redirect('/dashboard');
        }
    }

    async function likeBook(e) {
        let body = {
            bookId: id
        }

        let newOwnLikes = await likeBookRequest(body);
        likes++;

        let data = await getOwnLikesByBookId(id, isLogedIn);

        ctx.renderView(detailsTemplate(book, deleteFunc, isOwner, likes, likeBook, data, loged));
    }

    next();
}