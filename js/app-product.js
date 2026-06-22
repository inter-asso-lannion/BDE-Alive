import { createBDEApp } from './create-app.js';

const { ref, computed } = Vue;

createBDEApp({
    setup() {
        const basePath = ref('../../');

        const product = {
            title: 'Pochette BDE Alive',
            category: 'Pochettes',
            emoji: '🎒',
            price: 15,
            priceNote: 'Livraison incluse à l\'IUT',
            helloAssoUrl: 'https://www.helloasso.com/',
            desc: 'La pochette officielle du BDE Alive. Gravure Laser. Matière 100% polyester. La livraison se fait directement à l\'IUT avec les membres du BDE.',
            sizes: [
                { label: '13-14', available: true },
                { label: '15-16', available: true },
                { label: '17-18', available: false },
            ],
            colors: [
                {
                    name: 'Marine',
                    hex: '#1B2A4A',
                    images: ['../../assets/shop/pochette.jpg']
                },
            ],
            details: [
                { icon: 'fa-solid fa-shirt', text: '100% polyester' },
                { icon: 'fa-solid fa-weight-hanging', text: 'Poids : 237g' },
                { icon: 'fa-solid fa-location-dot', text: 'Livraison à l\'IUT avec les membres du BDE' },
                { icon: 'fa-solid fa-clock', text: 'Délai de livraison : 3 à 4 semaines après commande' },
            ]
        };

        const selectedColor = ref(product.colors[0]);
        const selectedSize = ref(null);
        const activeImageIndex = ref(0);
        const mainImg = ref(null);

        const currentImages = computed(() =>
            selectedColor.value?.images?.length ? selectedColor.value.images : []
        );
        const activeImage = computed(() =>
            currentImages.value.length ? currentImages.value[activeImageIndex.value] : null
        );

        function selectColor(color) {
            if (selectedColor.value?.name === color.name) return;
            if (mainImg.value) mainImg.value.classList.add('fade-out');
            setTimeout(() => {
                selectedColor.value = color;
                activeImageIndex.value = 0;
                if (mainImg.value) mainImg.value.classList.remove('fade-out');
            }, 280);
        }

        function selectImage(index) {
            if (activeImageIndex.value === index) return;
            if (mainImg.value) mainImg.value.classList.add('fade-out');
            setTimeout(() => {
                activeImageIndex.value = index;
                if (mainImg.value) mainImg.value.classList.remove('fade-out');
            }, 280);
        }

        return {
            basePath, product, selectedColor, selectedSize,
            activeImageIndex, activeImage, currentImages,
            mainImg, selectColor, selectImage
        };
    }
}).mount('#app');
