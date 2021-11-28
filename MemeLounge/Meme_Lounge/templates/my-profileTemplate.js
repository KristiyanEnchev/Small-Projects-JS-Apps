import { html } from "../node_modules/lit-html/lit-html.js";

const memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

export const myProfileTemplate = (ctx, memes) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src=${ctx.gender == 'male' ? "/images/male.png" : "/images/female.png"}>
                <div class="user-content">
                    <p>Username: ${ctx.username}</p>
                    <p>Email:  ${ctx.email}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${memes.length > 0
        ? html`${memes.map(memeTemplate)}`
        : html`<p class="no-memes">No memes in database.</p>`}
            </div>
        </section>`;