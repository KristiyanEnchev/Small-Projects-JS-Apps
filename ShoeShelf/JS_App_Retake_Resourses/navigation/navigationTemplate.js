import { html } from "../node_modules/lit-html/lit-html.js";

export const navigationTemplate = (loged, ctx) => html`
        <nav>
            <ul>
                ${loged
                     ? html`
                <li>
                    <a href="/create">Create new offer</a>
                </li>`
                     : html`
                    <li>
                       <a class='site-logo' href="/register">Register</a>
                    </li>
                <li class="site-logo">Shoe</li>`}
                <li>
                    <a href=${loged ? '/dashboard' : '/home'}>
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li>
            ${loged ? html`
            <li>Welcome, ${ctx.username} |
                <a href="/logout">Logout</a>
            </li>` 
            : html`
                <li class="site-logo">Shelf</li>
                <li>
                     <a class='site-logo' href="/login">Login</a>
                </li>`}
            </ul>
        </nav>`;



// ${ctx.pathname == '/create' ? 'active' : undefined}  ---- за смяна на активен линк

