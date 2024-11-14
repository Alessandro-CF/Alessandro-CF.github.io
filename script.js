// script.js
document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('footer p');
    footerText.textContent += " | Gracias por visitar mi página!";

    // Animate progress bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('w-full');
            }
        });
    });

    document.querySelectorAll('.progress-bar').forEach(bar => {
        observer.observe(bar);
    });
});