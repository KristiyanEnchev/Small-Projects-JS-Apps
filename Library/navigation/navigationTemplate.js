import { html } from "../node_modules/lit-html/lit-html.js";

export const navigationTemplate = (loged, ctx) => html`
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/dashboard">Dashboard</a>
                    ${loged 
                    ? html`
                    <div id="user">
                        <span>Welcome, ${ctx.email}</span>
                        <a class="button" href="/my-books">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>` 
                    : html`
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`}
                </section>
            </nav>`;