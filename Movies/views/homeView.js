import { showNotification } from "../Extras/notifications.js";
import { getItems, search } from "../requester/requestBuffer.js";
import { homeTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx, next) {

    let isLogedIn = sessionStorage.getItem('email');
    const data = await getItems();
    let templateResult = homeTemplate(isLogedIn, data, serchFunc);
    ctx.renderView(templateResult);

    async function serchFunc(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let input = formData.get("serch");

        if (input == '') {
            return showNotification("Search field should not be empty", ctx);
        }
        const movie = await search(input);
        ctx.renderView(homeTemplate(isLogedIn, movie, serchFunc));
        event.target.reset();
    }

    next();
}