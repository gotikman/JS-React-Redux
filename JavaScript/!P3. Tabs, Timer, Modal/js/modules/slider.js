function slider() {
    
    //! СЛАЙДЕР prof
    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    function addZeroCurrent() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    //! слайди в ряд
    slidesField.style.width = 100 * slides.length + '%';  // ширина обгортки * к-ть слайд \400%
    slidesField.style.display = 'flex';                   // слайди в ряд
    slidesField.style.transition = '0.5s all';            // перехід

    slidesWrapper.style.overflow = 'hidden';              // обрізаєм інші слайди

    slides.forEach(slide => {
        slide.style.width = width;
    });

    //! створюю точки слайдера
    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    for (let i = 0; i< slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);              // добавляю в масив кожну точку
    }

    //! вішаю події на кнопки next/prev

    function deleteNotDigits(str) {          // функція отримання цифр без "px"
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        // width = '500px', треба чисте число, тому обрізаєм
        if(offset == deleteNotDigits(width) * (slides.length - 1)) { 
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZeroCurrent();
        dotsOpacity();
    });

    prev.addEventListener('click', () => {
        // width = '500px', треба чисте число, тому обрізаєм
        if(offset == 0) { 
            offset = deleteNotDigits(width) * (slides.length - 1);            
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZeroCurrent();
        dotsOpacity();

    });

    // клікабельність дотсів слайдера
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo- 1);  

            slidesField.style.transform = `translateX(-${offset}px)`;

            addZeroCurrent();
            dotsOpacity();
        });
    });

}

module.exports = slider;