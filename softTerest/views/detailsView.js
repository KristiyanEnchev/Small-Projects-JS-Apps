import { showNotification } from "../Extras/notifications.js";
import { createComentRequest, deleteRequest, getComentsByPostId, getItemsById, getLikesByIdeaId, getOwnLikesByIdeaId, likeIdeaRequest } from "../requester/requestBuffer.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";


export async function detailsView(ctx, next) {
    let id = ctx.params.id
    showNotification("", 'loading', ctx);
    let [ideas, likes, ownLike, coments] = await Promise.all([
        getItemsById(id),
        getLikesByIdeaId(id),
        getOwnLikesByIdeaId(id),
        getComentsByPostId(id)
    ]);
    showNotification("", 'loading', ctx);

    const owner = ideas._ownerId;
    let isOwner = false;
    if (sessionStorage.getItem('userId') == owner) {
        isOwner = true;
    }
    let email = sessionStorage.getItem('email');
    let templateResult = detailsTemplate(ideas, deleteFunc, isOwner, likes, likeIdea, ownLike, comentIdea, coments, email);
    ctx.renderView(templateResult);

    async function deleteFunc(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            showNotification("", 'loading', ctx);
            await deleteRequest(id)
            showNotification("Deleted successfully", 'success', ctx);
            ctx.page.redirect('/dashboard');
        }
    }

    async function likeIdea(e) {
        let body = {
            ideaId: id
        }
        showNotification("", 'loading', ctx);

        let newOwnLikes = await likeIdeaRequest(body, id);
        likes++;

        ctx.renderView(detailsTemplate(ideas, deleteFunc, isOwner, likes, likeIdea, newOwnLikes, comentIdea, coments, email));
        showNotification("Liked successfully", 'success', ctx);
    }

    async function comentIdea(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let comentText = formData.get('newComment');
        if (comentText == "") {
            return;
        }
        let body = {
            recipeId: id,
            content: comentText

        }
        showNotification("", 'loading', ctx);

        let createdComment = await createComentRequest(body, id);
        e.target.reset();
        ctx.renderView(detailsTemplate(ideas, deleteFunc, isOwner, likes, likeIdea, likes, comentIdea, createdComment, email));
        showNotification("Comented successfully", 'success', ctx);
    }
    next();
}