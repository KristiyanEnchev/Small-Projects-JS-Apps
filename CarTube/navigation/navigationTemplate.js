import { html } from "../node_modules/lit-html/lit-html.js";

export const navigationTemplate = (loged, ctx) => html`
<nav>
    <a class=${ctx.pathname == '/home' ? 'active' : undefined} href="/home">Home</a>
    <a href="/all-list" class=${ctx.pathname == '/all-list' ? 'active' : undefined}>All Listings</a>
    <a href="/by-year" class=${ctx.pathname == '/by-year' ? 'active' : undefined}>By Year</a>
    <!-- Logged users -->
    ${loged 
    ?
    html`<div id="profile">
        <a>Welcome ${ctx.username}</a>
        <a href="/my-list" class=${ctx.pathname == '/my-list' ? 'active' : undefined}>My Listings</a>
        <a href="/create" class=${ctx.pathname == '/create' ? 'active' : undefined}>Create Listing</a>
        <a href="/logout">Logout</a>
    </div>`
    :
    html`<div id="guest">
        <a href="/login" class=${ctx.pathname == '/login' ? 'active' : undefined}>Login</a>
        <a href="/register" class=${ctx.pathname == '/register' ? 'active' : undefined}>Register</a>
    </div>`}
    <!-- Guest users -->
</nav>`;

