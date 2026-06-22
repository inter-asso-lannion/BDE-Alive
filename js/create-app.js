import { AppNavbar } from './components/app-navbar.js';
import { AppFooter } from './components/app-footer.js';
import { initScrollReveal } from './scroll-reveal.js';

export function createBDEApp(options = {}) {
    const app = Vue.createApp(options);
    app.component('app-navbar', AppNavbar);
    app.component('app-footer', AppFooter);
    return app;
}

export { initScrollReveal };
