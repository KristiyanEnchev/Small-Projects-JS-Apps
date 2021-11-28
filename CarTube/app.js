import page from "../node_modules/page/page.mjs";
import render from "./renderPasser/renderer.js";
import {navigation} from "./navigation/navigarion.js";
import { homeView } from "./views/homeView.js";
import { registerView } from "./views/registerView.js";
import { loginView } from "./views/loginView.js";
import { logout } from "./request/requestBuffer.js";
import { allListView } from "./views/alListView.js";
import { createView } from "./views/createView.js";
import { myListView } from "./views/myListView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { serchView } from "./views/serchView.js";

const navigationContainer = document.getElementById('navigation');
const viewContainer = document.querySelector('main');
render.init(viewContainer, navigationContainer);

page('/index.html', '/home');
page('/', '/home');

page(render.bindContext);
page(navigation);

page('/home', homeView);
page('/register', registerView);
page('/login', loginView);
page('/all-list', allListView);
page('/my-list', myListView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/by-year', serchView);
page('/logout', async (context) => { await logout(sessionStorage.getItem('authToken')); context.page.redirect('/login'); });



page.start();
