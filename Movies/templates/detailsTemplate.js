import { html } from "../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (movie, deleteFunc, isOwner, likes, likeFunc, ownLike) => html`
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${movie.title}</h1>
        
                <div class="col-md-8">
                    <img class="img-thumbnail" src=${movie.img} alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${movie.description}</p>
                    ${isOwner ?
                     html`
                    <a @click=${deleteFunc} href='javascript:void(0)' class="btn btn-danger" href="/delete">Delete</a>
                    <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` 
                    :
                    html`${ownLike.length == 0 ? html`
                    <a @click=${likeFunc} href='javascript:void(0)' class="btn btn-primary">Like</a>` : ''}`}
                    <span class="enrolled-span">${likes + '  like' + (likes == 1 ? '' : 's')}</span>
                </div>
            </div>
        </div>`;