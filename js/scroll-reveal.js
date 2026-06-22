export function initScrollReveal(threshold = 0.1) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: threshold });
    document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
    });
}
