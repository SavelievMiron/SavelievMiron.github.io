const registrationModal = document.querySelector('.modal--registration');
if (registrationModal !== null) {
    const showPass = registrationModal.querySelectorAll('.show-pass');

    if (showPass.length !== 0) {
        showPass.forEach((el) => {
            el.addEventListener('click', (e) => {
                const icon = e.target,
                field = icon.previousElementSibling;
                if (!icon.classList.contains('is-active')) {
                    field.setAttribute('type','text');
                    icon.classList.add('is-active');
                } else {
                    field.setAttribute('type','password');
                    icon.classList.remove('is-active');
                }
            })
        })
    }

    const closeModal = registrationModal.querySelector('.modal__close');
    if (closeModal !== null) {
        closeModal.onclick = function (e) {
            registrationModal.classList.add('hide');
        };
    }

    window.onclick = function(e) {
        if (e.target == registrationModal) {
            registrationModal.classList.add('hide');
        }
    }
}