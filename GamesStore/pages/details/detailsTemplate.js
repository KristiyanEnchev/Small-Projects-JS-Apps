import { html } from "../../node_modules/lit-html/lit-html.js";


export const detailsTemplate = (game, deleteFunc, isOwner, commentGame, loged, coments) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
        
                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>
        
                <p class="text">
                    ${game.summary}
                </p>
        
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        ${coments.length > 0 ? coments.map(commentTemplate) : html`<p class="no-comment">No comments.</p>`}
                    </ul>
                </div>
                ${isOwner ? html`
                <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${deleteFunc} href='javascript:void(0)' class="button">Delete</a>
                </div>` : ''}
            </div>
        
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${loged && !isOwner ? html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${commentGame} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>` : ''}
        </section>`;

const commentTemplate = (coment) => html`
                        <li class="comment">
                            <p>Content: ${coment.comment}</p>
                        </li>
`;

// @click=${deleteFunc} href='javascript:void(0)' -- за функционалност на delete бутона
// ${likes + '  like' + (likes == 1 ? '' : 's')}  -- за смяна на текста при харесване на item