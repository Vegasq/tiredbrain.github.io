document.addEventListener("DOMContentLoaded", function() {
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.swiper-container').style.opacity = 1;
                entry.target.querySelector('.swiper-container').style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);
    document.querySelectorAll('.game').forEach(game => {
        observer.observe(game);
    });

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: "auto",
            },
            768: {
                slidesPerView: "auto",
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        }
    });
});
