import { html } from "../node_modules/lit-html/lit-html.js";

export const homeTemplate = () => html`
        <div class="container">
            <div class="about-us">
                <div>
                    <img src="../public/shoes.jpg" alt="">
                    <img src="../public/shoes2.jpg" alt="">
                </div>
                <p>
                    <a href="/register">Register Now</a> and Try it!
                </p>
            </div>
        </div>
`;