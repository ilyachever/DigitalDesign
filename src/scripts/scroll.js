// Проверяет насколько пользователь прокрутил страницу.
function checkPageOffset(element, quantity = 200) {
    if (window.pageYOffset > quantity) {
        element.classList.remove('content__button--hidden');
        element.addEventListener('click', scrollToTop);
    } else {
        element.classList.add('content__button--hidden');
        element.removeEventListener('click', scrollToTop)
    }
}

// Скроллит наверх страницы.
function scrollToTop() {
    window.scrollTo(0,0);
}

export {
    checkPageOffset,
    scrollToTop
}