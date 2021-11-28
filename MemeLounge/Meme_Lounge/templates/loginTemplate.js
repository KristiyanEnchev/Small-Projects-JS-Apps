import { html } from "../node_modules/lit-html/lit-html.js";


export const loginTemplate = (submitHandler) => html`
<section id="login">
    <form @submit=${submitHandler} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;





{/* <section id="login">
    <div class="container">
        <form @submit=${submitHandler} id="login-form">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
        </form>
                    <div class="signin">
                        <p>Dont have an account?
                            <a href="/register">Sign up</a>.
                        </p>
                    </div>
    </div>
</section> */}