import { createBDEApp, initScrollReveal } from './create-app.js';
import { projects } from './data/projects.js';

createBDEApp({
    data() {
        return {
            basePath: '../',
            projects: projects
        };
    },
    computed: {
        enCours()       { return this.projects.filter(p => p.status === 'En cours'); },
        prochainement() { return this.projects.filter(p => p.status === 'Prochainement'); },
        termines()      { return this.projects.filter(p => p.status === 'Terminé'); },
    },
    mounted() {
        initScrollReveal();
    }
}).mount('#app');
