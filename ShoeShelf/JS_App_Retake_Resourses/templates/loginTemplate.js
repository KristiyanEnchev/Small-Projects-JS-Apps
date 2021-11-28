import { html } from "../node_modules/lit-html/lit-html.js";


export const loginTemplate = (submitHandler) => html`
        <h1>Login</h1>
        <p class="form-info">Don't have account?
            <a href="/register">Register now</a> and fix that!
        </p>
        <form @submit=${submitHandler} action="">
            <div>
                <input type="email" name='email' placeholder="Email...">
            </div>

            <div>
                <input type="password" name='password' placeholder="Password...">
            </div>
            <div> 
                <button>Login</button>
            </div>
        </form>
`;

// @submit=${submitHandler}