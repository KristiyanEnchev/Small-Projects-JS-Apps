import { html } from "../node_modules/lit-html/lit-html.js";

export const profileTemplate = (ideas, user) => html`
<div class="container home wrapper  my-md-5 pl-md-5">
    <div class="profile home-text col-md-6 text-center col-lg">
        <img class="profile-img" src="/images/user.png" />
        <div class="profile-info">
            <p>Username: <small>${user}</small></p>
            <p class="infoType">Has ${ideas.length + ' idea' + (ideas.length == 1 ? '' : 's')} =)</p>
            ${ideas.length > 0 ? ideas.map(ideasTemplate) : html` <p>No ideas yet</p>`}
        </div>
    </div>
</div>`;

const ideasTemplate = (idea) => html`<p>${idea.title}</p>`;