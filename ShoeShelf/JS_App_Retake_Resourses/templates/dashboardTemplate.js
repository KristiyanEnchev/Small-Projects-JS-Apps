import { html } from "../node_modules/lit-html/lit-html.js";

export const dashboardTemplate = (shoes) => html`
        <div class="shoes">
            ${shoes.length > 0 ? shoes.map(shoeTemplate) : html`<div>No shoes to display. BE the first to create a new offer...
            </div>`}
        </div>`;

const shoeTemplate = (shoe) => html`
            <div class="shoe">
                <a href='/details/${shoe._id}'>
                    <img src=${shoe.img}>
                </a>
                <h3>${shoe.make} ${shoe.model}</h3>
                <a>Buy it for $${shoe.price}</a>
            </div>`;