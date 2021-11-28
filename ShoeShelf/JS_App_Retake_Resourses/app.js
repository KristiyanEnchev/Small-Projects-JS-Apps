import { footer } from "./footer/footer.js";
import { navigation } from "./navigation/navigarion.js";
import page from "./node_modules/page/page.mjs";
import renderer from "./renderPasser/renderer.js";
import { logout } from "./requester/requestBuffer.js";
import { createView } from "./views/createView.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";


const navigationContainer = document.getElementById('navigation');
const viewContainer = document.querySelector('main');
const footerContainer = document.querySelector('footer');
renderer.init(viewContainer, navigationContainer, footerContainer);

page('/index.html', '/home');
page('/', '/home');

page(renderer.bindContext);
page(navigation);

page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/dashboard', dashboardView);

page('/logout', async (context) => { await logout(); context.page.redirect('/login'); });



page(footer);
page.start();
