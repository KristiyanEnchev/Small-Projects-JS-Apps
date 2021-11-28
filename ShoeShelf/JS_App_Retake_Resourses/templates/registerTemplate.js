import { html } from "../node_modules/lit-html/lit-html.js";


export const registerTemplate = (submitHandler) => html`
<h1>Register</h1>
<p class="form-info">Already registered?
    <a href="/login">Login now</a> and have some fun!
</p>

<form @submit=${submitHandler} action="">
    <div>
        <input type="username" name='username' placeholder="Username...">
    </div>
    <div>
        <input type="email" name='email' placeholder="Email...">
    </div>
    <div>
        <input type="password" name='password' placeholder="Password">
    </div>
    <div>
        <input type="password" name='rePass' placeholder="Re-password">
    </div>
    <div>
        <p class="message"></p>
        <button>Register</button>
    </div>
</form>
`;

// @submit=${submitHandler}