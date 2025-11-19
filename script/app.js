
let currentSlide = 0;
const slides = document.querySelectorAll('.photo-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Calcula el índice del slide para que sea cíclico (0, 1, 0, 1...)
    const numSlides = slides.length;
    if (n >= numSlides) currentSlide = 0;
    else if (n < 0) currentSlide = numSlides - 1;
    else currentSlide = n;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    // Función llamada por los puntos de navegación
    showSlide(n);
}

function nextSlide() {
    // Función para el avance automático
    showSlide(currentSlide + 1);
}

// Inicializa el carrusel
showSlide(currentSlide);

// Auto-advance slides cada 4 segundos
setInterval(nextSlide, 4000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation (para elementos como tarjetas de experiencia y habilidades)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-item, .skill-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '#999';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#fff';
        }
    });
});