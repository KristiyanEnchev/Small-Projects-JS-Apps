import { html } from "../node_modules/lit-html/lit-html.js";

export const navigationTemplate = (loged) => html`
            <h1><a class="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/allGames">All games</a>
                ${loged 
                ? html`
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>` 
                : html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
            </nav>`;