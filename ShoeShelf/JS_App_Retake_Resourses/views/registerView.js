import { register } from "../requester/requestBuffer.js";
import { registerTemplate } from "../templates/registerTemplate.js";


export async function registerView(ctx, next) {
    let templateResult = registerTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let username = formData.get('username');
        let password = formData.get('password');
        let repass = formData.get('rePass');

        if (email == ''|| password == '' || repass == ''|| username == '') {
            e.target.reset();
            // return showNotification('All fields must be filed up');
            return
        }

        if (password != repass) {
            e.target.reset();
            return
            // return showNotification('Password dont match');
        }

        await register(email, username, password);
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }

    next();
}