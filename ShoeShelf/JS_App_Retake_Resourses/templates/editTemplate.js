import { html } from "../node_modules/lit-html/lit-html.js";

export const editTemplate = (data ,submitHandler) => html`
        <h1>Edit Offer</h1>
        <p class="message"></p>
        <form @submit=${submitHandler}>
            <div>
                <input type="text" name="make" placeholder="Name..." .value=${data.make}>
            </div>
            <div>
                <input type="text" name="price" placeholder="Price..." .value=${data.price}>
            </div>
            <div>
                <input type="text" name="img" placeholder="Image url..." .value=${data.img}>
            </div>
            <div>
                <textarea name="description" placeholder="Give us some description about this offer..." .value=${data.description}></textarea>
            </div>
            <div>
                <input type="text" name="model" placeholder="Brand..." .value=${data.model}>
            </div>
            <div>
                <button>Edit</button>
            </div>
        </form>
`;
// @submit=${submitHandler}
// .value=${data.parameter}