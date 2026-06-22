import { createBDEApp, initScrollReveal } from './create-app.js';
import { products } from './data/products.js';

createBDEApp({
    data() {
        return {
            basePath: '../',
            activeFilter: 'Tous',
            products: products
        };
    },
    computed: {
        categories() {
            return ['Tous', ...new Set(this.products.map(p => p.category))];
        },
        filteredProducts() {
            if (this.activeFilter === 'Tous') return this.products;
            return this.products.filter(p => p.category === this.activeFilter);
        }
    },
    watch: {
        activeFilter() {
            this.$nextTick(() => {
                document.querySelectorAll('.shop-card').forEach(el => el.classList.add('visible'));
            });
        }
    },
    mounted() {
        initScrollReveal();
        this.$nextTick(() => {
            document.querySelectorAll('.shop-card').forEach(el => el.classList.add('visible'));
        });
    }
}).mount('#app');
