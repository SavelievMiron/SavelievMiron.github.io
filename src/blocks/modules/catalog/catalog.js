const btnMobileFilters = document.querySelector('button.btn-filters'),
btnMobileFiltersClose = document.querySelector('button.mobile-filters__close');
if (btnMobileFilters !== null) {
    btnMobileFilters.addEventListener('click', function () {
        const mobileFilters = document.querySelector('.mobile-filters');
        mobileFilters.classList.toggle('show');
        document.querySelector("body").classList.add("lock");
    });
}
if (btnMobileFiltersClose !== null) {
    btnMobileFiltersClose.addEventListener('click', function () {
        const mobileFilters = document.querySelector('.mobile-filters');
        mobileFilters.classList.toggle('show');
        document.querySelector("body").classList.remove("lock");
    });
}