import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow])

if (document.querySelector('.main-slider') !== null) {
  const mainSLider = new Swiper(".main-slider", {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 10000,
    },
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  });

  mainSLider.on('slideChange', function () {
    const activeSlide = mainSLider.slides[swiper.activeIndex],
    currentTitle = mainSLider.wrapperEl.parentElement.querySelector('.swiper-navigation .product__title');

    if (activeSlide.classList.contains('swiper-slide_double')) {
      currentTitle.innerText = activeSlide.querySelector('.double-product__left-info-title h3').innerText + ' + ' + activeSlide.querySelector('.double-product__right-info-title h3').innerText;
    } else {
      currentTitle.innerText = activeSlide.querySelector('.product__info-title h3').innerText;
    }
  });
}

if (document.querySelector('.top-banner') !== null) {
    const topBanner = new Swiper(".top-banner", {
        loop: true,
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 100000,
        },
        grabCursor: true,
        height: 300,
        lazy: {
            checkInView: true,
            loadPrevNext: true
        },
    });
}
