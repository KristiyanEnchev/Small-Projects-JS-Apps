import { registerTemplate} from "../templates/registerPageTemplate.js";
import { handleRegisterRequest } from "../request/requestBuffer.js";


export async function registerView(ctx, next) {
    let templateResult = registerTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let username = formData.get('username');
        let password = formData.get('password');
        let repass = formData.get('repeatPass');

        if (username == '' || password == '' || repass == '') {
            e.target.reset();
            return alert('All fields must be filed up');
        }

        if (password != repass) {
            e.target.reset();
            return alert('Password dont match');
        }

        let body = {
            username,
            password,
        }

        await handleRegisterRequest(JSON.stringify(body));
        e.target.reset();
        ctx.page.redirect('/all-list');
    }

    next();
}