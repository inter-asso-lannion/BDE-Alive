export const AppFooter = {
    props: {
        basePath: { type: String, default: './' }
    },
    template: `
        <footer>
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="nav-logo">BDE <span>Alive</span></div>
                    <p>Le BDE qui code autant qu'il fête. Rejoins-nous et fais partie de l'aventure informatique de ta promo.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a :href="basePath + 'equipe/'">Notre équipe</a></li>
                            <li><a :href="basePath + 'projets/'">Projets</a></li>
                            <li><a :href="basePath + 'projets/'">Soirées</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Ressources</h4>
                        <ul>
                            <li><a :href="basePath + 'boutique/'">Boutique</a></li>
                            <li><a href="https://www.instagram.com/bde.info.alive/">Instagram</a></li>
                            <li><a href="https://discord.gg/yeB7ttZG3j">Discord</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Info</h4>
                        <ul>
                            <li><a :href="basePath + '#contact'">Devenir membre</a></li>
                            <li><a :href="basePath + 'partenaires/'">Partenaires</a></li>
                            <li><a :href="basePath + '#contact'">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2025 BDE Alive — Tous droits réservés</span>
                <div class="footer-socials">
                    <a class="social-btn" :href="basePath + '#contact'"><i class="fa-solid fa-envelope"></i></a>
                    <a class="social-btn" href="https://discord.gg/yeB7ttZG3j"><i class="fa-brands fa-discord"></i></a>
                    <a class="social-btn" href="https://www.instagram.com/bde.info.alive/"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    `
};
