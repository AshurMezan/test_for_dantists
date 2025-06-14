 document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slider__item');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            
            let currentSlide = 0;
            const slideCount = slides.length;
            
            // Функция перехода к конкретному слайду
            function goToSlide(slideIndex) {
                slider.style.transform = `translateX(-${slideIndex * 100}%)`;
                currentSlide = slideIndex;
            }
            
            // Следующий слайд
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                goToSlide(currentSlide);
            }
            
            // Предыдущий слайд
            function prevSlide() {
                currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                goToSlide(currentSlide);
            }
            
            // Обработчики событий
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Автопрокрутка (опционально)
            let slideInterval = setInterval(nextSlide, 5000);
            
            // Остановка автопрокрутки при наведении
            slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
            slider.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 500000);
            });
            
            // Свайп для мобильных устройств
            let touchStartX = 0;
            let touchEndX = 0;
            
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                clearInterval(slideInterval);
            }, {passive: true});
            
            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                slideInterval = setInterval(nextSlide, 5000);
            }, {passive: true});
            
            function handleSwipe() {
                if (touchEndX < touchStartX - 50) nextSlide();
                if (touchEndX > touchStartX + 50) prevSlide();
            }
        });