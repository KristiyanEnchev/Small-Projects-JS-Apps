import { handleSerchRequest } from "../request/requestBuffer.js";
import { serchTemplate } from "../templates/serchTemplate.js";

export async function serchView(ctx, next) {
    // const data = await getCars();

    let templateResult = serchTemplate(handleSerch, []);
    ctx.renderView(templateResult);

    async function handleSerch(e) {
        let input = Number(document.getElementById('search-input').value);
        if (isNaN(input) || input == '') {
            return alert("Input should be a year");
        }
        let cars = await handleSerchRequest(input);
        ctx.renderView(serchTemplate(handleSerch, cars));
    }

    next();
}