document.addEventListener("DOMContentLoaded", function() {
    
    // 1. CUENTA REGRESIVA
    // Seteamos la fecha (4 de Abril de 2026)
    const targetDate = new Date("April 4, 2026 16:30:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Cálculo de días, horas, min y seg
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizamos el DOM
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 2. EFECTO FADE-IN AL HACER SCROLL
    // se usa el Intersection Observer para detectar visibilidad del 10%
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // 3. LÓGICA DEL BOTÓN DE REGALOS (INTERACTIVO)
    const btnShow = document.getElementById('btn-show-data');
    const msgBlock = document.getElementById('gift-message');
    const dataBlock = document.getElementById('gift-data');

    if(btnShow) {
        btnShow.addEventListener('click', function() {
            // Ocultamos el bloque del mensaje
            msgBlock.style.display = 'none';
            // Mostramos el bloque con CBU/Alias y disparamos la animación
            dataBlock.classList.remove('hidden');
            dataBlock.classList.add('fade-in-data');
        });
    }
});