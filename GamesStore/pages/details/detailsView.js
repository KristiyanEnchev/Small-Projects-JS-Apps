import { createComentRequest, deleteRequest, getComentsByPostId, getItemsById } from "../../requester/requestBuffer.js";
import { detailsTemplate } from "./detailsTemplate.js";


export async function detailsView(ctx, next) {
    let id = ctx.params.id

    let [game, coments] = await Promise.all([
        getItemsById(id),
        getComentsByPostId(id)
    ]);
console.log(coments);
    let isLogedIn = sessionStorage.getItem('email');
    let loged = false;
    if (isLogedIn != null) {
        loged = true;
    }

    const owner = game._ownerId;
    let isOwner = false;
    if (sessionStorage.getItem('userId') == owner) {
        isOwner = true;
    }

    let templateResult = detailsTemplate(game, deleteFunc, isOwner, commentGame, loged, coments);
    ctx.renderView(templateResult);

    async function commentGame(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let comentText = formData.get('comment');
        console.log(comentText);
        if (comentText == "") {
            return;
        }
        let body = {
            gameId: id,
            comment: comentText

        }

        let createdComment = await createComentRequest(body, id);
        e.target.reset();
        ctx.renderView(detailsTemplate(game, deleteFunc, isOwner, commentGame, loged, createdComment));
        alert("Comented successfully");
    }

    async function deleteFunc(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            await deleteRequest(id)
            ctx.page.redirect('/home');
        }
    }

    next();
}