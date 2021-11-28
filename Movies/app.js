import { showNotification } from "./Extras/notifications.js";
import { navigation } from "./navigation/navigarion.js";
import page from "./node_modules/page/page.mjs";
import renderer from "./renderPasser/renderer.js";
import { logout } from "./requester/requestBuffer.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";

const navigationContainer = document.getElementById('navigation');
const viewContainer = document.querySelector('main');
const notificationContainer = document.querySelector('#notificationsContainer');
renderer.init(viewContainer, navigationContainer, notificationContainer);

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
page('/logout', async (context) => { await logout(showNotification("Successful logout", context)); context.page.redirect('/login'); });


page.start();
