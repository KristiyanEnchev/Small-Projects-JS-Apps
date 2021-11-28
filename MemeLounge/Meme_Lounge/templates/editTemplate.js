import { html } from "../node_modules/lit-html/lit-html.js";

export const editTemplate = (meme, submitHandler) => html`
<section id="edit-meme">
    <form @submit='${submitHandler}' id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value='${meme.title}'>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value='${meme.description}'>
            </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                .value='${meme.imageUrl}'>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;