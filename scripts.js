document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

AOS.init({
    duration: 1200, // Duración de las animaciones
    easing: 'ease-in-out',
    once: true // Se ejecuta solo una vez
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        feedback.textContent = 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
        form.reset();
    });

    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = items.length;

    function showNextItem() {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % totalItems;
        items[currentItem].classList.add('active');
    }

    setInterval(showNextItem, 5000);
});
