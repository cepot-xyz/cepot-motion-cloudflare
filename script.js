document.addEventListener('DOMContentLoaded', function() {
    // Gulir halus untuk tautan anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle FAQ: cari tombol di dalam section #faq lalu toggle visibility jawaban
    document.querySelectorAll('#faq button').forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling; // asumsi struktur: button lalu div jawaban
            if (answer) {
                answer.classList.toggle('hidden');
            }
        });
    });

    // Animasi saat scroll (jika ada elemen dengan kelas .animate-on-scroll)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
