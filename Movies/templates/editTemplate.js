import { html } from "../node_modules/lit-html/lit-html.js";

export const editTemplate = (movie ,submitHandler) => html`
        <form @submit=${submitHandler} class="text-center border border-light p-5" action="#" method="">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" .value=${movie.title}>
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description" .value=${movie.description}></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value=${movie.img}>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
`;