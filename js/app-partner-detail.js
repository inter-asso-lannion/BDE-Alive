import { createBDEApp, initScrollReveal } from './create-app.js';

createBDEApp({
    data() {
        return {
            basePath: '../../'
        };
    },
    mounted() {
        initScrollReveal();
    }
}).mount('#app');
