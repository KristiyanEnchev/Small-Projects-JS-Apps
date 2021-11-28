import { showNotification } from "../Extras/notifications.js";
import { register } from "../requester/requestInitiator.js";
import { registerTemplate } from "../templates/registerTemplate.js";


export async function registerView(ctx, next) {
    let templateResult = registerTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repeatPassword');

        if (email == ''|| password == '' || repass == '') {
            e.target.reset();
            ctx.message = "error";
            return showNotification('All fields must be filed up', ctx);
        }

        if (password != repass) {
            e.target.reset();
            ctx.message = "error";
            return showNotification('Password dont match', ctx);
        }

        await register(email, password);
        e.target.reset();
        showNotification("Successful registration!", ctx )
        ctx.page.redirect('/home');
    }

    next();
}