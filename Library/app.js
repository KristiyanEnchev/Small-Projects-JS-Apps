import { navigation } from "./navigation/navigarion.js";
import page from "./node_modules/page/page.mjs";
import renderer from "./renderPasser/renderer.js";
import { logout } from "./requester/requestBuffer.js";
import { createView } from "./views/createBook/createView.js";
import { dashboardView } from "./views/dashboard/dashboardView.js";
import { detailsView } from "./views/details/detailsView.js";
import { editView } from "./views/edit/editView.js";
import { loginView } from "./views/login/loginView.js";
import { myBooksView } from "./views/myBooks/myBooksView.js";
import { registerView } from "./views/register/registerView.js";

const navigationContainer = document.getElementById("site-header");
const viewContainer = document.querySelector('main');
renderer.init(viewContainer, navigationContainer);

page('/index.html', '/dashboard');
page('/', '/dashboard');

page(renderer.bindContext);
page(navigation);

page('/dashboard', dashboardView);
page('/my-books', myBooksView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/logout', async (context) => { await logout(); context.page.redirect('/dashboard'); });



page.start();
