import { showNotification } from "../Extras/notifications.js";
import { login } from "../requester/requestBuffer.js";
import { loginTemplate } from "../templates/loginTemplate.js";
import { validateInput } from "../validator/validateFields.js";


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
            return showNotification('All fields must be filed up', 'error', ctx);
        }
        showNotification("", 'loading', ctx);

        await login(email, password);
        e.target.reset();
        ctx.page.redirect('/dashboard');
        showNotification("Login successful.", 'success', ctx);
    }

    next();
}