document.addEventListener('DOMContentLoaded', function() {
    
    // Aquí comienza el código 
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
        
        
        if (slides.length > 0) { 
             slides[currentSlide].classList.add('active');
             dots[currentSlide].classList.add('active');
        }
    }

    function changeSlide(n) {
        showSlide(n);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    
    if (slides.length > 0) {
        // Inicializa el carrusel
        showSlide(currentSlide);

        // Auto-advance slides cada 4 segundos
        setInterval(nextSlide, 4000);
        
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                changeSlide(index);
            });
        });
    }
    
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // ...
    });

    // Add scroll animation 
    const observerOptions = {
        // ...
    };
    // ...
    
    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        // ...
    });

});