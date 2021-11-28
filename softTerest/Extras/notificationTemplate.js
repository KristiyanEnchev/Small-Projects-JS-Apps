import { html } from "../node_modules/lit-html/lit-html.js";

export const notificationTemplate = (message) => html`
        <section class="notifications" style="background-color:rgba(1, 131, 29, 0.541);">
            <div id="successBox" class="alert alert-success" role="alert">${message}</div>
        </section>`;

export const errorTemplate = (message) => html`
        <section class="notifications">
            <div id="errorBox" class="alert alert-danger" role="alert">${message}</div>
        </section>`;

export const loadingTemplate = () => html`
        <section class="notifications">
            <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
        </section>`;
