import { showNotification } from "../Extras/notifications.js";
import { register } from "../requester/requestBuffer.js";
import { registerTemplate } from "../templates/registerTemplate.js";
import { validateInput } from "../validator/validateFields.js";


export async function registerView(ctx, next) {
    let templateResult = registerTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repeatPassword');


        let data = {
            email,
            password,
            repass
        }

        if (email == '' && password == '' && repass == '') {
            validateInput(e.target, data);
            return showNotification('All fields must be filed up', 'error', ctx);
        }
        if (data.email.length < 3) {
            validateInput(e.target, data);
            return showNotification('Username should be at least 3 characters long!', 'error', ctx);
        }
        if (data.password.length < 3) {
            validateInput(e.target, data);
            return showNotification('Password should be at least 3 characters long!', 'error', ctx);
        }
        if (data.password != data.repass) {
            validateInput(e.target, data);
            return showNotification('Passwords don\'t match!', 'error', ctx);
        }
        let isValid = validateInput(e.target, data);

        if (isValid) {
            showNotification("", 'loading', ctx);

            await register(email, password);
            e.target.reset();
            ctx.page.redirect('/dashboard');
            showNotification("User registration successful.", 'success', ctx);
        }
    }

    next();
}