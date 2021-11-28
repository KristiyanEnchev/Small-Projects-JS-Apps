import { html } from "../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (shoe, deleteFunc, isOwner, buyFunc, ownShoe) => html`
        <div class="offer-details">
            <h1>${shoe.make} ${shoe.model}</h1>
            <div class="info">
                <img src=${shoe.img} alt="">
                <div class="description">${shoe.description}
                    <br>
                    <br>
                    <p class="price">$${shoe.price}</p>
                </div>
            </div>
            ${isOwner ? html`
            <div class="actions">
                <a href="/edit/${shoe._id}">Edit</a>
                <a @click=${deleteFunc} href='javascript:void(0)'>Delete</a>
            </div>
            `: html`<div class="actions">
                ${ownShoe.length == 0 ? html`<a @click=${buyFunc}>Buy</a>` : html`<span>You bought it</span>`}</div>`}
        </div>
    `;
// @click=${buyShoes}
// @click=${deleteFunc} href='javascript:void(0)' -- за функционалност на delete бутона
// ${likes + '  like' + (likes == 1 ? '' : 's')}  -- за смяна на текста при харесване на item