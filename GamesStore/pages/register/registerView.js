import { register } from "../../requester/requestBuffer.js";
import { registerTemplate } from "./registerTemplate.js";


export async function registerView(ctx, next) {
    let templateResult = registerTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('confirm-password');

        if (email == ''|| password == '' || repass == '') {
            e.target.reset();
            return alert('All fields must be filed up');
        }

        if (password != repass) {
            e.target.reset();
            return alert('Password dont match');
        }

        await register(email, password);
        e.target.reset();
        ctx.page.redirect('/home');
    }

    next();
}