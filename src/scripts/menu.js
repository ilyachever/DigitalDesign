// HTML Элементы
const nav = document.querySelector('.header__navigation');
const menuButton = document.querySelector('.header__menu');

// Если JS не загрузится, навигация будет доступна благодаря модификатору класса "--nojs"
function hideNavigation() {
    nav.classList.remove('header__navigation--nojs');
}

// Функция открыть/закрыть меню при нажатии на кнопку.
function handlerClick() {
    const iconAttributes = {
        open: './images/sprite/sprite.svg#menu',
        close: './images/sprite/sprite.svg#close',
    }

    nav.classList.toggle('header__navigation--opened');

    if(nav.classList.contains('header__navigation--opened')) {
        changeIcon(menuButton, iconAttributes.close);
        menuButton.setAttribute('aria-label', 'Закрыть навигацию сайта.');
    } else {
        changeIcon(menuButton, iconAttributes.open);
        menuButton.setAttribute('aria-label', 'Открыть навигацию сайта.');
    }
}

// Функция смены иконки в кнопке меню
function changeIcon(parentElement, attribute) {
    const iconContainer = parentElement.querySelector('use');

    iconContainer.setAttribute('href', attribute);
}

export {
    hideNavigation,
    handlerClick
}
