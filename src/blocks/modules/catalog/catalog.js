const btnMobileFilters = document.querySelector('button.btn-filters'),
btnMobileFiltersClose = document.querySelector('button.mobile-filters__close');
if (btnMobileFilters !== null) {
    btnMobileFilters.addEventListener('click', function () {
        const mobileFilters = document.querySelector('.mobile-filters');
        mobileFilters.classList.toggle('show');
    });
}
if (btnMobileFiltersClose !== null) {
    btnMobileFiltersClose.addEventListener('click', function () {
        const mobileFilters = document.querySelector('.mobile-filters');
        mobileFilters.classList.toggle('show');
    });
}