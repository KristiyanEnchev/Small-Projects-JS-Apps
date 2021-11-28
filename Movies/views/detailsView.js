import { showNotification } from "../Extras/notifications.js";
import { deleteRequest, getItemsById, getLikesByMovieId, getOwnLikesByMovieId, likeMovieRequest } from "../requester/requestBuffer.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

export async function detailsView(ctx, next) {
    let id = ctx.params.id

    let [movie, likes, ownLike] = await Promise.all([
        getItemsById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id)
    ]);

    const owner = movie._ownerId;
    let isOwner = false;
    if (sessionStorage.getItem('userId') == owner) {
        isOwner = true;
    }
    let templateResult = detailsTemplate(movie, deleteFunc, isOwner, likes, likeMovie, ownLike);
    ctx.renderView(templateResult);

    async function deleteFunc(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            await deleteRequest(id)
            showNotification("Deleted successfully", ctx);
            ctx.page.redirect('/home');
        }
    }

    async function likeMovie(e) {
        const userEmail = sessionStorage.getItem('email');
        let body = {
            movieId: id
        }
        let res = await likeMovieRequest(body);
        likes++;

        let neOwnLikes = await getOwnLikesByMovieId(id);
        ctx.renderView(detailsTemplate(movie, deleteFunc, isOwner, likes, likeMovie, neOwnLikes));
        showNotification("Liked successfully", ctx);
    }
    next();
}