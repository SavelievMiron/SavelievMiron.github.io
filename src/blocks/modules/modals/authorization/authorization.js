const authorizationModal = document.querySelector('.modal--authorization');
if (authorizationModal !== null) {
    const showPass = authorizationModal.querySelectorAll('.show-pass');
    if (showPass.length !== 0) {
        showPass.forEach((el) => {
            el.addEventListener('click', (e) => {
                const icon = e.target,
                field = icon.previousElementSibling;
                if (!icon.classList.contains('is-active')) {
                    field.type = 'text';
                    icon.classList.add('is-active');
                } else {
                    field.type = 'password';
                    icon.classList.remove('is-active');
                }
            })
        })
    }

    const closeModal = authorizationModal.querySelector('.modal__close');
    if (closeModal !== null) {
        closeModal.addEventListener('click', (e) => {
            authorizationModal.classList.add('hide');
        })
    }

    const signUpBtn = authorizationModal.querySelector('.user-sign-up');
    signUpBtn.addEventListener('click', (e) => {
        const registrationModal = document.querySelector('.modal--registration');
        if (registrationModal !== null) {
            authorizationModal.classList.add('hide');
            registrationModal.classList.remove('hide');
        }
    })

    window.onclick = function(e) {
        if (e.target == authorizationModal) {
            authorizationModal.classList.add('hide');
        }
    }
}
