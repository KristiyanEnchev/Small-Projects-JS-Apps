import { login } from "../../requester/requestBuffer.js";
import { loginTemplate } from "./loginTemplate.js";


export async function loginView(ctx, next) {
    let templateResult = loginTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');

        if (email == '' || password == '') {
            e.target.reset();
            return alert('All fields must be filed up');
        }

        await login(email, password);
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }

    next();
}