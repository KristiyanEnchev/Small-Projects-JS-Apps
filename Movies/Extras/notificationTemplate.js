import { html } from "../node_modules/lit-html/lit-html.js";

export const notificationTemplate = (message) => html`
        <section class="notifications" style="background-color:rgba(1, 131, 29, 0.541);">
            <p class="notification-message" id="successBox">${message}</p>
        </section>`;

export const errorTemplate = (message) => html`
        <section class="notifications">
            <p class="notification-message" id="errorBox">${message}</p>
        </section>`;