document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.imput');
    const emailInput = document.querySelector('.email');
    const errorEmail = document.querySelector('.email-error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            errorEmail.classList.remove('hide');
        } else {
            errorEmail.classList.add('hide');
        }
    });
});