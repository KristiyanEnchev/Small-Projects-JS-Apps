import { html } from "../node_modules/lit-html/lit-html.js";

export const navigationTemplate = (loged, ctx) => html`
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
        <a class="navbar-brand" href=${loged ? "/profile" : "/home"}>
            <img src="/images/idea.png" alt="">
        </a>
        ${loged ? html`<div>Wellcome ${ctx.username}</div>` : ''}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                ${loged ? logedUser : guestUser}
            </ul>
        </div>
    </div>
</nav>
`;

const logedUser = html`     
        <li class="nav-item active">
            <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="/create">Create</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
        </li>`;

const guestUser = html`
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>`;


