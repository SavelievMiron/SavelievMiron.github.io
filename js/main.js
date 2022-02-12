/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/campaign/archive/archive.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/campaign/archive/archive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var archiveCampaign = document.querySelector('.archive-campaign');

if (archiveCampaign !== null) {
  var cards = archiveCampaign.querySelectorAll('.campaign-card');

  if (cards.length !== 0) {
    cards.forEach(function (el) {
      var startDate = el.querySelector('.campaign-card__info--date').dataset.start,
          countDownDate = new Date(startDate * 1000).getTime(),
          deadline = el.querySelector('.campaign-card__deadline');
      var refresh = setInterval(function () {
        var now = new Date().getTime();
        var distance = now - countDownDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(distance % (1000 * 60) / 1000);
        deadline.innerHTML = "".concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");

        if (distance < 0) {
          clearInterval(refresh);
          deadline.innerHTML = "expired";
        }
      }, 1000);
    });
  }

  var loadMore = document.getElementById('loadmore');

  if (loadMore !== null) {
    loadMore.onclick = function (e) {};
  }
}

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/catalog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnMobileFilters = document.querySelector('button.btn-filters'),
    btnMobileFiltersClose = document.querySelector('button.mobile-filters__close');

if (btnMobileFilters !== null) {
  btnMobileFilters.addEventListener('click', function () {
    var mobileFilters = document.querySelector('.mobile-filters');
    mobileFilters.classList.toggle('show');
  });
}

if (btnMobileFiltersClose !== null) {
  btnMobileFiltersClose.addEventListener('click', function () {
    var mobileFilters = document.querySelector('.mobile-filters');
    mobileFilters.classList.toggle('show');
  });
}

/***/ }),

/***/ "./src/blocks/modules/catalog/sidebar/sidebar.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/catalog/sidebar/sidebar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sidebar = document.querySelector('.catalog-sidebar');

if (sidebar !== null) {
  var categories = document.querySelectorAll('.categories__heading');

  if (categories.length !== 0) {
    categories.forEach(function (el) {
      el.onclick = function (e) {
        e.target.classList.toggle('open');
      };
    });
  }

  var categoryItems = document.querySelectorAll('.categories__item');

  if (categoryItems.length !== 0) {
    categoryItems.forEach(function (el) {
      el.onclick = function (e) {
        e.target.classList.toggle('checked');
      };
    });
  }
}

/***/ }),

/***/ "./src/blocks/modules/components/about-banner/about-banner.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/components/about-banner/about-banner.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Autoplay"]]);

if (document.getElementsByClassName('about-banner').length !== 0) {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".about-banner", {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 10000
    },
    grabCursor: true,
    lazy: true
  });
}

/***/ }),

/***/ "./src/blocks/modules/components/pagination/pagination.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/components/pagination/pagination.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tui_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tui-pagination */ "./node_modules/tui-pagination/dist/tui-pagination.js");
/* harmony import */ var tui_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tui_pagination__WEBPACK_IMPORTED_MODULE_0__);

var container = document.getElementById('pagination');

if (typeof container !== 'undefined' && container !== null) {
  var options = {
    totalItems: 4,
    itemsPerPage: 1,
    visiblePages: 4,
    page: 1,
    centerAlign: true,
    usageStatistics: false,
    firstItemClassName: 'pagination__link-first',
    lastItemClassName: 'pagination__link-last',
    template: {
      page: '<a href="#" class="pagination__link" aria-label="Goto Page {{page}}">{{page}}</a>',
      currentPage: '<strong class="pagination__link pagination__link-current" aria-current="true">{{page}}</strong>',
      moveButton: '<a href="#" class="pagination__link pagination__link-{{type}}">' + '<span class="pagination__icon-{{type}}"></span>' + '</a>',
      disabledMoveButton: '<span class="pagination__link pagination__link-{{type}} pagination__link-disabled">' + '<span class="pagination__icon-{{type}}"></span>' + '</span>',
      moreButton: '<a href="#" class="pagination__link pagination__link-more">' + '<span>...</span>' + '</a>'
    }
  };
  var pagination = new tui_pagination__WEBPACK_IMPORTED_MODULE_0___default.a(container, options);
}

/***/ }),

/***/ "./src/blocks/modules/components/search/search.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/components/search/search.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-select */ "./node_modules/custom-select/build/index.js");
/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_select__WEBPACK_IMPORTED_MODULE_0__);

custom_select__WEBPACK_IMPORTED_MODULE_0___default()('.search-form select#category', {
  containerClass: 'search-category-container',
  openerClass: 'search-category-opener',
  panelClass: 'search-category-panel',
  optionClass: 'search-category-option',
  optgroupClass: 'search-category-optgroup',
  isSelectedClass: 'is-selected',
  hasFocusClass: 'has-focus',
  isDisabledClass: 'is-disabled',
  isOpenClass: 'is-open'
});

/***/ }),

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var topics = document.getElementsByClassName("hot-topic");

if (topics.length !== 0) {
  for (var i = 0; i < topics.length; i++) {
    topics[i].addEventListener("click", function () {
      for (var _i = 0; _i < topics.length; _i++) {
        topics[_i].classList.remove('is-active');
      }

      this.classList.toggle("is-active");
    });
  }
}

var questions = document.getElementsByClassName("faq__question");

if (questions.length !== 0) {
  for (var _i2 = 0; _i2 < questions.length; _i2++) {
    questions[_i2].addEventListener("click", function () {
      this.classList.toggle("is-active");
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-select */ "./node_modules/custom-select/build/index.js");
/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_select__WEBPACK_IMPORTED_MODULE_0__);

var header = document.getElementsByTagName('header')[0];

if (typeof header !== 'undefined') {
  custom_select__WEBPACK_IMPORTED_MODULE_0___default()('.language-switcher', {
    containerClass: 'language-switcher-container',
    openerClass: 'language-switcher-opener',
    panelClass: 'language-switcher-panel',
    optionClass: 'language-switcher-option',
    optgroupClass: 'language-switcher-optgroup',
    isSelectedClass: 'is-selected',
    hasFocusClass: 'has-focus',
    isDisabledClass: 'is-disabled',
    isOpenClass: 'is-open'
  });

  window.onscroll = function () {
    if (window.scrollY > header.offsetTop + 30) {
      header.classList.add('hide-topbar');
    } else {
      header.classList.remove('hide-topbar');
    }
  };

  var mobileMenu = document.querySelector('header .mobile-menu'),
      mobileSidebar = document.querySelector('header .mobile-sidebar');

  mobileMenu.onclick = function () {
    mobileMenu.classList.toggle('is-active');
    mobileSidebar.classList.toggle('show');
  };

  var infoMenu = document.querySelector('header .info-menu .hamburger');

  infoMenu.onclick = function () {
    infoMenu.classList.toggle('is-active');
  };

  var authBtn = header.querySelector('button.user-auth'),
      authModal = document.querySelector('.modal--authorization');

  if (authBtn !== null) {
    authBtn.addEventListener('click', function (e) {
      authModal.classList.remove('hide');
    });
  }

  var cart = document.querySelector('button.cart-dropdown__basket'),
      cartIcon = cart.querySelector('i'),
      cartDropdown = document.querySelector('.cart-dropdown__menu'),
      dropdownProducts = cartDropdown.querySelector('#dropdown-products'),
      cartActions = cartDropdown.querySelector('.cart-dropdown__hide'),
      clearCart = cartDropdown.querySelector('#clearCart'),
      cartAmount = cart.querySelector('.cart-dropdown__amount'),
      totalPrice = cartDropdown.querySelector('.cart-total-price');
  cart.addEventListener('click', function (e) {
    if (cartDropdown.classList.contains('hide')) {
      cartDropdown.classList.remove('hide');
      cartIcon.classList.add('toggle-up');
    } else {
      cartDropdown.classList.add('hide');
      cartIcon.classList.remove('toggle-up');
    }
  });
  clearCart.addEventListener('click', function (e) {
    dropdownProducts.innerHTML = '<li class="no-products">Корзина пуста</li>';
    totalPrice.innerHTML = '0';
    cartAmount.innerHTML = '0';
    cartActions.classList.add('hide');
  });
}

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_0__["EffectCoverflow"]]);

if (document.querySelector('.main-slider') !== null) {
  var mainSLider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".main-slider", {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 10000
    },
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
  mainSLider.on('slideChange', function () {
    var activeSlide = mainSLider.slides[swiper.activeIndex],
        currentTitle = mainSLider.wrapperEl.parentElement.querySelector('.swiper-navigation .product__title');

    if (activeSlide.classList.contains('swiper-slide_double')) {
      currentTitle.innerText = activeSlide.querySelector('.double-product__left-info-title h3').innerText + ' + ' + activeSlide.querySelector('.double-product__right-info-title h3').innerText;
    } else {
      currentTitle.innerText = activeSlide.querySelector('.product__info-title h3').innerText;
    }
  });
}

if (document.querySelector('.top-banner') !== null) {
  var topBanner = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".top-banner", {
    loop: true,
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 100000
    },
    grabCursor: true,
    height: 300,
    lazy: {
      checkInView: true,
      loadPrevNext: true
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/modals/authorization/authorization.js":
/*!******************************************************************!*\
  !*** ./src/blocks/modules/modals/authorization/authorization.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var authorizationModal = document.querySelector('.modal--authorization');

if (authorizationModal !== null) {
  var showPass = authorizationModal.querySelectorAll('.show-pass');

  if (showPass.length !== 0) {
    showPass.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var icon = e.target,
            field = icon.previousElementSibling;

        if (!icon.classList.contains('is-active')) {
          field.type = 'text';
          icon.classList.add('is-active');
        } else {
          field.type = 'password';
          icon.classList.remove('is-active');
        }
      });
    });
  }

  var closeModal = authorizationModal.querySelector('.modal__close');

  if (closeModal !== null) {
    closeModal.addEventListener('click', function (e) {
      authorizationModal.classList.add('hide');
    });
  }

  var signUpBtn = authorizationModal.querySelector('.user-sign-up');
  signUpBtn.addEventListener('click', function (e) {
    var registrationModal = document.querySelector('.modal--registration');

    if (registrationModal !== null) {
      authorizationModal.classList.add('hide');
      registrationModal.classList.remove('hide');
    }
  });

  window.onclick = function (e) {
    if (e.target == authorizationModal) {
      authorizationModal.classList.add('hide');
    }
  };
}

/***/ }),

/***/ "./src/blocks/modules/modals/registration/registration.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/modals/registration/registration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registrationModal = document.querySelector('.modal--registration');

if (registrationModal !== null) {
  var showPass = registrationModal.querySelectorAll('.show-pass');

  if (showPass.length !== 0) {
    showPass.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var icon = e.target,
            field = icon.previousElementSibling;

        if (!icon.classList.contains('is-active')) {
          field.setAttribute('type', 'text');
          icon.classList.add('is-active');
        } else {
          field.setAttribute('type', 'password');
          icon.classList.remove('is-active');
        }
      });
    });
  }

  var closeModal = registrationModal.querySelector('.modal__close');

  if (closeModal !== null) {
    closeModal.onclick = function (e) {
      registrationModal.classList.add('hide');
    };
  }

  window.onclick = function (e) {
    if (e.target == registrationModal) {
      registrationModal.classList.add('hide');
    }
  };
}

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var productSlider = document.querySelector('.product__slider');

if (productSlider !== null) {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"]]);
  var productSlider2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product__slider--2", {
    direction: "vertical",
    spaceBetween: 20,
    slidesPerView: 3,
    slideToClickedSlide: true,
    autoplay: {
      delay: 10000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var productSlider1 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product__slider--1", {
    direction: "vertical",
    slidesPerView: 1,
    thumbs: {
      swiper: productSlider2
    }
  });
}
/* change product quantity */


var productQuantity = document.getElementById('quantity'),
    plus = document.getElementById('plus'),
    minus = document.getElementById('minus');

if (productQuantity !== null) {
  plus.addEventListener('click', function (e) {
    var min = productQuantity.getAttribute('min'),
        max = productQuantity.getAttribute('max');
    var newVal = Number(productQuantity.value) + 1;

    if (newVal > max) {
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
    var min = productQuantity.getAttribute('min'),
        max = productQuantity.getAttribute('max');
    var currentVal = productQuantity.value;
    var newVal = Number(productQuantity.value) - 1;

    if (newVal < min) {
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

var productTestimonials = document.querySelector('.product-testimonials__slider');

if (productTestimonials !== null) {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product-testimonials__slider", {
    loop: true,
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 10000
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
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 45
      }
    }
  });
}

var productDescription = document.getElementById('product-description');

if (productDescription !== null) {
  var productDescTabs = document.querySelectorAll('.product-desc__tab'),
      productDescTabsContent = document.querySelectorAll('.product-desc__tab-content');

  if (productDescTabs.length !== 0) {
    productDescTabs.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var btn = e.target,
            id = btn.dataset.id,
            content = document.getElementById(id);
        productDescTabs.forEach(function (el) {
          el.classList.remove('is-active');
        });
        productDescTabsContent.forEach(function (el) {
          el.classList.remove('is-active');
        });
        btn.classList.add('is-active');
        content.classList.add('is-active');
      });
    });
  }

  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"]]);
  var descSlider2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".description__slider--2", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  });
  var descSlider1 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".description__slider--1", {
    spaceBetween: 10,
    thumbs: {
      swiper: descSlider2
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/profile/profile.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/profile/profile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.getElementById('profile') !== null) {
  var sidebarTabs = document.querySelectorAll('.profile-sidebar__tab'),
      panels = document.querySelectorAll('.profile-panel__tabs'),
      panelTabs = document.querySelectorAll('.profile-panel__tab'),
      tabContents = document.querySelectorAll('.profile-panel__content');

  if (sidebarTabs.length !== 0) {
    sidebarTabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        var tab = e.target,
            panel = document.querySelector("[data-panel=".concat(tab.dataset.tab, "]")),
            tabContent = document.querySelector("[data-tab-content=".concat(tab.dataset.tab, "]"));
        sidebarTabs.forEach(function (el) {
          return el.classList.remove('is-active');
        });
        panels.forEach(function (el) {
          return el.classList.remove('is-active');
        });
        tabContents.forEach(function (el) {
          return el.classList.remove('is-active');
        });
        tab.classList.add('is-active');
        panel.classList.add('is-active');
        tabContent.classList.add('is-active');
      });
    });
  }

  if (panelTabs.length !== 0) {
    panelTabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        var tab = e.target,
            panel = tab.closest('.profile-panel__tabs'),
            panelTabContent = document.querySelector("[data-panel-content=".concat(tab.dataset.panel_tab, "]")),
            panelContent = panelTabContent.closest('.profile-panel__content');
        Array.prototype.forEach.call(panel.children, function (el) {
          el.classList.remove('is-active');
        });
        Array.prototype.forEach.call(panelContent.children, function (el) {
          el.classList.remove('is-active');
        });
        tab.classList.add('is-active');
        panelTabContent.classList.add('is-active');
      });
    });
  }
}

/***/ }),

/***/ "./src/js/import/main.js":
/*!*******************************!*\
  !*** ./src/js/import/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/catalog/catalog */ "./src/blocks/modules/catalog/catalog.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_profile_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/profile/profile */ "./src/blocks/modules/profile/profile.js");
/* harmony import */ var _modules_profile_profile__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_profile_profile__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_catalog_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/catalog/sidebar/sidebar */ "./src/blocks/modules/catalog/sidebar/sidebar.js");
/* harmony import */ var _modules_catalog_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_campaign_archive_archive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/campaign/archive/archive */ "./src/blocks/modules/campaign/archive/archive.js");
/* harmony import */ var _modules_campaign_archive_archive__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_campaign_archive_archive__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_components_search_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/components/search/search */ "./src/blocks/modules/components/search/search.js");
/* harmony import */ var _modules_components_about_banner_about_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/components/about-banner/about-banner */ "./src/blocks/modules/components/about-banner/about-banner.js");
/* harmony import */ var _modules_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/components/pagination/pagination */ "./src/blocks/modules/components/pagination/pagination.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_modals_authorization_authorization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/modals/authorization/authorization */ "./src/blocks/modules/modals/authorization/authorization.js");
/* harmony import */ var _modules_modals_authorization_authorization__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_modals_authorization_authorization__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_modals_registration_registration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/modals/registration/registration */ "./src/blocks/modules/modals/registration/registration.js");
/* harmony import */ var _modules_modals_registration_registration__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_modals_registration_registration__WEBPACK_IMPORTED_MODULE_13__);















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/main */ "./src/js/import/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map