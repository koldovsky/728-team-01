(function () {

    const slides = [
        '<div class="slide"><div class="features__photo"> <img class="features__img " src="img/img_features/team.svg" alt=""> </div><h4 class="features__text">Great team</h4> </div>',

        '<div class="slide"><div class="features__photo"> <img class="features__img " src="img/img_features/lunch.svg" alt=""> </div><h4 class="features__text">Free lunch</h4> </div>',

        '<div class="slide"><div class="features__photo"> <img class="features__img " src="img/img_features/office.svg" alt=""> </div><h4 class="features__text">Beautiful office</h4> </div>',

        '<div class="slide"><div class="features__photo"> <img class="features__img " src="img/img_features/activities.svg" alt=""> </div><h4 class="features__text">Outdoor activities</h4> </div>',

    ]

        
        let currentSlideIdx = 0;

        function renderSlide() {
            const slideContainer = document.querySelector('.main-products__carousel .carousel__slide');
            slideContainer.innerHTML = slides[currentSlideIdx];
            if (window.innerWidth >= 600) {
                const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
                slideContainer.innerHTML += slides[secondSlideIdx];
                if (window.innerWidth >= 900) {
                    const thirdSlideIdx = secondSlideIdx + 1>= slides.length ? 0 : secondSlideIdx + 1;
                    slideContainer.innerHTML += slides[thirdSlideIdx];
                }
            }
        }
    
        function showSlide(idx) {
            currentSlideIdx = idx;
            renderSlide();
        }
    
        function nextSlide() {
            currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            renderSlide();
        }
    
        function prevSlide() {
            currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
            renderSlide();
        }
    
        
    
        renderSlide();
    
        const btnNext = document.querySelector('.main-products__carousel .carousel__next');
        btnNext.addEventListener('click', nextSlide);
    
        const btnPrev = document.querySelector('.main-products__carousel .carousel__prev');
        btnPrev.addEventListener('click', prevSlide);
    
        
    
        window.addEventListener('resize', renderSlide);
    })();