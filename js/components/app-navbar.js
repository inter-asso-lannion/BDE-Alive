export const AppNavbar = {
    props: {
        basePath: { type: String, default: './' }
    },
    data() {
        return { menuOpen: false };
    },
    computed: {
        activePage() {
            const base = new URL(this.basePath, window.location.href).pathname;
            const current = window.location.pathname;
            const relative = current.startsWith(base) ? current.slice(base.length) : current;
            return relative.split('/').filter(Boolean)[0] || '';
        },
        navLinks() {
            return [
                { label: 'Accueil', href: this.basePath, key: '' },
                { label: 'Équipe', href: this.basePath + 'equipe/', key: 'equipe' },
                { label: 'Projets', href: this.basePath + 'projets/', key: 'projets' },
                { label: 'Partenaires', href: this.basePath + 'partenaires/', key: 'partenaires' },
                { label: 'Boutique', href: this.basePath + 'boutique/', key: 'boutique' },
            ];
        },
        contactHref() {
            return this.basePath + '#contact';
        }
    },
    methods: {
        toggleMenu() { this.menuOpen = !this.menuOpen; },
        closeMenu() { this.menuOpen = false; },
        isActive(key) { return this.activePage === key; }
    },
    mounted() {
        this._outsideClick = (e) => {
            if (!e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
                this.closeMenu();
            }
        };
        document.addEventListener('click', this._outsideClick);
    },
    unmounted() {
        document.removeEventListener('click', this._outsideClick);
    },
    template: `
        <nav>
            <a :href="basePath" class="nav-logo-link">
                <div class="nav-logo">
                    <img :src="basePath + 'assets/logo.png'">
                    BDE<span> Alive</span>
                </div>
            </a>
            <ul class="nav-links">
                <li v-for="link in navLinks" :key="link.key">
                    <a :href="link.href" :class="{ active: isActive(link.key) }">{{ link.label }}</a>
                </li>
                <li><a :href="contactHref">Contact</a></li>
            </ul>
            <button class="burger-btn" :class="{ open: menuOpen }" aria-label="Menu" @click.stop="toggleMenu">
                <div class="burger-bar"></div>
                <div class="burger-bar"></div>
                <div class="burger-bar"></div>
            </button>
        </nav>
        <div class="mobile-menu" :class="{ open: menuOpen }">
            <a v-for="link in navLinks" :key="link.key" class="menu-link" :class="{ active: isActive(link.key) }" :href="link.href">
                <div class="menu-dot"></div>{{ link.label }}
            </a>
            <div class="menu-divider"></div>
            <a class="menu-cta" :href="contactHref">Contact</a>
        </div>
    `
};
