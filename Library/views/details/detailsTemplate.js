import { html } from "../../node_modules/lit-html/lit-html.js";


export const detailsTemplate = (book, deleteFunc, isOwner, likes, likeBook, ctx, loged) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    ${loged ? html`
                    ${isOwner ? html`
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a @click=${deleteFunc} href='javascript:void(0)' class="button" href="/delete">Delete</a>
                    ` : html`
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${ctx.likes == 0 ? html`
                    <a  @click=${likeBook} href='javascript:void(0)' class="button" href="#">Like</a>` : ""}`}` : ""}
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">${'Like' + (likes == 1 ? '' : 's') + `: ${likes}`}</span>
                    </div>
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>`;
