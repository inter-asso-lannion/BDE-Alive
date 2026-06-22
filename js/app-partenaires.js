import { createBDEApp, initScrollReveal } from './create-app.js';
import { partners } from './data/partners.js';

createBDEApp({
    data() {
        return {
            basePath: '../',
            activeFilter: 'Tous',
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
    mounted() {
        initScrollReveal();
        this.$nextTick(() => {
            document.querySelectorAll('.partner-card-full').forEach(el => el.classList.add('visible'));
        });
    }
}).mount('#app');
