import {registerTemplate} from "../templates/registerTemplate.js";
// import {handleRegisterRequest} from "../request/requestBuffer.js";
import { register } from "../request/requestBuffer.js";


export async function registerView(ctx, next) {
    let templateResult = registerTemplate(submitHandler);
    ctx.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repeatPass');
        let gender = formData.get('gender');

        if (username == '' || email == ''|| password == '' || repass == '' || gender == '') {
            e.target.reset();
            return alert('All fields must be filed up');
        }

        if (password != repass) {
            e.target.reset();
            return alert('Password dont match');
        }

        let body = {
            username,
            email,
            password,
            gender,
        }
console.log(username);
        await register(email, password , gender, username);
        e.target.reset();
        ctx.page.redirect('/all-memes');
    }

    next();
}