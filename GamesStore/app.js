import page from "./node_modules/page/page.mjs";
import renderer from "./renderPasser/renderer.js";
import { navigation } from "./navigation/navigarion.js";
import { loginView } from "./pages/login/loginView.js";
import { registerView } from "./pages/register/registerView.js";
import { logout } from "./requester/requestBuffer.js";
import { homeView } from "./pages/home/homeView.js";
import { allGamesView } from "./pages/allGames/allGamesView.js";
import { createView } from "./pages/create/createView.js";
import { detailsView } from "./pages/details/detailsView.js";
import { editView } from "./pages/edit/editView.js";

const navigationContainer = document.getElementById('navigation');
const viewContainer = document.querySelector('main');
renderer.init(viewContainer, navigationContainer);

page('/index.html', '/home');
page('/', '/home');

page(renderer.bindContext);
page(navigation);

page('/home', homeView);
page('/allGames', allGamesView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
page('/logout', async (context) => { await logout(); context.page.redirect('/login'); });



page.start();
