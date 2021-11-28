import { html } from "../node_modules/lit-html/lit-html.js";

export const createTemplate = (submitHandler) => html`
        <h1>Create New Offer</h1>
        <p class="message"></p>
        <form @submit=${submitHandler}>
            <div>
                <input type="text" name='make' placeholder="Name...">
            </div>
            <div>
                <input type="text" name='model' placeholder="Brand...">
            </div>
            <div>
                <input type="text" name='price' placeholder="Price...">
            </div>
            <div>
                <input type="text" name='img' placeholder="Image url...">
            </div>
            <div>
                <textarea name='description' placeholder="Give us some description about this offer..."></textarea>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
`;