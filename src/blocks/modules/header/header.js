import customSelect from 'custom-select';

const header = document.getElementsByTagName('header')[0];
if (typeof header !== 'undefined') {
  customSelect('.language-switcher', {
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

  window.onscroll = () => {
    if (window.scrollY > (header.offsetTop + 30)) {
      header.classList.add('hide-topbar');
    } else {
      header.classList.remove('hide-topbar');
    }
  }

  const mobileMenu = document.querySelector('header .mobile-menu'),
  mobileSidebar = document.querySelector('header .mobile-sidebar');
  mobileMenu.onclick = () => {
    mobileMenu.classList.toggle('is-active');
    mobileSidebar.classList.toggle('show');
  }

  const infoMenu = document.querySelector('header .info-menu .hamburger');
  infoMenu.onclick = () => {
    infoMenu.classList.toggle('is-active');
  }

  const authBtn = header.querySelector('button.user-auth'),
  authModal = document.querySelector('.modal--authorization');
  if (authBtn !== null) {
    authBtn.addEventListener('click', (e) => {
      authModal.classList.remove('hide')
    });
  }

  const cart = document.querySelector('button.cart-dropdown__basket'),
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
  })

  clearCart.addEventListener('click', (e) => {
    dropdownProducts.innerHTML = '<li class="no-products">Корзина пуста</li>'; 
    totalPrice.innerHTML = '0';
    cartAmount.innerHTML = '0';
    cartActions.classList.add('hide');
  });
}
