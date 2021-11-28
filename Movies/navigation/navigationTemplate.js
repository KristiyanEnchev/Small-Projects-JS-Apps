import { html } from "../node_modules/lit-html/lit-html.js";

export const navigationTemplate = (loged, ctx) => html`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="#">Movies</a>
    <ul class="navbar-nav ml-auto ">
        ${loged 
        ? 
            html`
        <li class="nav-item">
            <a class="nav-link">Welcome, ${ctx.username}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
        </li>` 
        : 
        html`
        <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
        </li>`}
    </ul>
</nav>`;

{/* <nav>
    ${loged
         ? 
         html`
    <div class="user">
        <a class=${ctx.pathname == '/create' ? 'active' : undefined} href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${ctx.username}</span>
            <a class=${ctx.pathname == '/my-profile' ? 'active' : undefined} href="/my-profile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>`
    :
    html`
    <div class="guest">
        <div class="profile">
            <a class=${ctx.pathname == '/login' ? 'active' : undefined} href="/login">Login</a>
            <a class=${ctx.pathname == '/register' ? 'active' : undefined} href="/register">Register</a>
        </div>
        <a class=${ctx.pathname == '/home' ? 'active' : undefined} class="active" href="/home">Home Page</a>
    </div>`}
    <a class=${ctx.pathname == '/all-memes' ? 'active' : undefined} href="/all-memes">All Memes</a>
</nav> */}

