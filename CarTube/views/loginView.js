import { handleLoginRequest } from "../request/requestBuffer.js";
import { loginTemplate } from "../templates/loginPageTemplate.js";

export async function loginView(ctx, next) {
    let templateResult = loginTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let username = formData.get('username');
        let password = formData.get('password');

        if (username == '' || password == '') {
            e.target.reset();
            return alert('All fields must be filed up');
        }

        let body = {
            username,
            password
        }

        await handleLoginRequest(JSON.stringify(body));
        e.target.reset();
        ctx.page.redirect('/all-list');
    }

    next();
}