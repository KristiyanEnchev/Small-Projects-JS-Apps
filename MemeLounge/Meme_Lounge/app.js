import page from "./node_modules/page/page.mjs";
import renderer from "./renderPasser/renderer.js";
import { navigation } from "./navigation/navigarion.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logout } from "./request/requestBuffer.js";
import { allMemesView } from "./views/allMemesView.js";
import { createView } from "./views/createView.js";
import { myProfileView } from "./views/my-profileView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";

const navigationContainer = document.getElementById('navigation');
const viewContainer = document.querySelector('main');
renderer.init(viewContainer, navigationContainer);

page('/index.html', '/home');
page('/', '/home');

page(renderer.bindContext);
page(navigation);

page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/all-memes', allMemesView);
page('/create', createView);
page('/my-profile', myProfileView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
// page('/logout', async (context) => { await logout(sessionStorage.getItem('authToken')); context.page.redirect('/login'); });
page('/logout', async (context) => {await logout(); context.page.redirect('/login');});


page.start();