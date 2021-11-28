import { html } from "../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (idea, deleteFunc, isOwner, likes, likeIdea, ownLike, comentIdea, coments, email) => html`
<div class="container home some">
    <img class="det-img" src=${idea.img} />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
        <p class="infoType">Likes: ${likes + '  like' + (likes == 1 ? '' : 's')}</p>
        <p class="infoType">Comments:</p>
        <ul>
            ${coments.length > 0 ? html`${coments.map(c => coment(c, email))}` : html`<li class="comment">No comments yet :(</li>`}
        </ul>
    </div>
        ${isOwner 
    ? 
    html`
    <div class="text-center">
        <a class="btn detb" @click=${deleteFunc} href='javascript:void(0)'>Delete</a>
        <a class="btn detb" href='/edit/${idea._id}'>Edit</a>
    </div> `
    : 
    html`
    <form @submit=${comentIdea} class="text-center" method="" action="">
        <button type="submit" class="btn detb">Comment</button>
        ${ownLike.length == 0
        ? html`<a class="btn detb" @click=${likeIdea} href='javascript:void(0)'>Like</a>` : ''}
        <textarea class="textarea-det" name="newComment" id=""></textarea>
    </form>`}
</div>`;

const coment = (coment, email) => html`<li class="comment">${email}: ${coment.content}</li>`;

// @click=${deleteFunc} href='javascript:void(0)' -- за функционалност на delete бутона
// ${likes + '  like' + (likes == 1 ? '' : 's')}  -- за смяна на текста при харесване на item