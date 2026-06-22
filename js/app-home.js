import { createBDEApp, initScrollReveal } from './create-app.js';
import { projects } from './data/projects.js';
import { events } from './data/events.js';
import { partners } from './data/partners.js';

createBDEApp({
    data() {
        return {
            basePath: './',
            formSent: false,
            formSending: false,
            form: { name: '', email: '', subject: '', message: '' },
            activeFilter: 'Tous',
            projects: projects.filter(p => p.status !== 'Terminé'),
            parties: events,
            partners: partners
        };
    },
    computed: {
        categories() {
            return ['Tous', ...new Set(this.partners.map(p => p.category))];
        },
        filteredPartners() {
            if (this.activeFilter === 'Tous') return this.partners;
            return this.partners.filter(p => p.category === this.activeFilter);
        }
    },
    watch: {
        activeFilter() {
            this.$nextTick(() => {
                document.querySelectorAll('.partner-card-full').forEach(el => el.classList.add('visible'));
            });
        }
    },
    methods: {
        async sendForm() {
            if (!this.form.name || !this.form.email || !this.form.message) return;
            this.formSending = true;
            try {
                const res = await fetch('https://formspree.io/f/xlgawzrg', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(this.form)
                });
                if (res.ok) this.formSent = true;
            } catch (e) {
                console.error(e);
            } finally {
                this.formSending = false;
            }
        }
    },
    mounted() {
        initScrollReveal(0.12);
        this.$nextTick(() => {
            document.querySelectorAll('.partner-card-full').forEach(el => el.classList.add('visible'));
        });
    }
}).mount('#app');
