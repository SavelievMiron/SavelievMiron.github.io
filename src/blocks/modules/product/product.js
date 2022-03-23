import Swiper, {Navigation, Pagination, Thumbs, Autoplay} from "swiper";

const productSlider = document.querySelector('.product__slider');
if (productSlider !== null) {
    Swiper.use([Navigation, Thumbs]);

    const productSlider2 = new Swiper(".product__slider--2", {
        direction: "vertical",
        spaceBetween: 20,
        slidesPerView: 3,
        slideToClickedSlide: true,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    const productSlider1 = new Swiper(".product__slider--1", {
        direction: "vertical",
        slidesPerView: 1,
        thumbs: {
            swiper: productSlider2,
        },
    });
}

const mobileProductSlider = document.querySelector('.mobile-product__slider');
if (mobileProductSlider !== null) {
    const mobileProductSlider2 = new Swiper(".mobile-product__slider--2", {
        direction: "horizontal",
        spaceBetween: 20,
        slidesPerView: 3,
        slideToClickedSlide: true,
        height: 200,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            380: {
                slidesPerView: 3
            },
            320: {
                slidesPerView: 2
            }
        }
    });
    const mobileProductSlider1 = new Swiper(".mobile-product__slider--1", {
        direction: "horizontal",
        slidesPerView: 1,
        centeredSlides: true,
        thumbs: {
            swiper: mobileProductSlider2,
        },
    });
}

/* change product quantity */
const productQuantity = document.getElementById('quantity'),
plus = document.getElementById('plus'),
minus = document.getElementById('minus');

if (productQuantity !== null) {
    plus.addEventListener('click', function (e) {
        const min = productQuantity.getAttribute('min'),
        max = productQuantity.getAttribute('max');
        
        let newVal = Number(productQuantity.value) + 1;
    
        if (newVal > max ) {
            e.target.disabled = true;
            return;
        } else {
            e.target.disabled = false;
    
            if (minus.disabled) {
                minus.disabled = false;
            }
        }
    
        productQuantity.value = newVal;
    });
    
    minus.addEventListener('click', function (e) {
        const min = productQuantity.getAttribute('min'),
        max = productQuantity.getAttribute('max');
        let currentVal = productQuantity.value;
    
        let newVal = Number(productQuantity.value) - 1;
    
        if (newVal < min ) {
            e.target.disabled = true;
            return;
        } else {
            e.target.disabled = false;
    
            if (plus.disabled) {
                plus.disabled = false;
            }
        }
    
        productQuantity.value = newVal;
    });
}

const productTestimonials = document.querySelector('.product-testimonials__slider');
if (productTestimonials !== null) {
    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper(".product-testimonials__slider", {
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
            delay: 10000,
        },
        grabCursor: true,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                loopedSlides: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                loopedSlides: 2,
                spaceBetween: 30,
                centeredSlides: false
            },
            640: {
                slidesPerView: 3,
                loopedSlides: 3,
                spaceBetween: 45
            }
        }
    });
}

const productDescription = document.getElementById('product-description');
if (productDescription !== null) {
    const productDescTabs = document.querySelectorAll('.product-desc__tab'),
    productDescTabsContent = document.querySelectorAll('.product-desc__tab-content');

    if (productDescTabs.length !== 0) {
        productDescTabs.forEach((el) => {
            el.addEventListener('click', function (e) {
                const btn = e.target,
                id = btn.dataset.id,
                content = document.getElementById(id);

                productDescTabs.forEach(function (el) {
                    el.classList.remove('is-active');
                });
                btn.classList.add('is-active');

                productDescTabsContent.forEach(function (el) {
                    el.classList.remove('is-active');
                });
                content.classList.add('is-active');
            });
        });
    }

    Swiper.use([Navigation, Thumbs]);

    var descSlider2 = new Swiper(".description__slider--2", {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            576: {
                slidesPerView: 4
            },
            480: {
                slidesPerView: 3
            },
            320: {
                slidesPerView: 2
            }
        }
    });
    var descSlider1 = new Swiper(".description__slider--1", {
        spaceBetween: 10,
        thumbs: {
            swiper: descSlider2,
        },
    });
}
