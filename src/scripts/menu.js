// HTML Элементы
const nav = document.querySelector('.header__navigation');
const menuButton = document.querySelector('.header__menu');

// Если JS не загрузится, навигация будет доступна благодаря модификатору класса "--nojs".
function hideNavigation() {
    nav.classList.remove('header__navigation--nojs');
}

// Иконки для меню (Открытое / Закрытое).
const iconAttributes = {
    open: './images/sprite/sprite.svg#menu',
    close: './images/sprite/sprite.svg#close',
}

// Открывает навигацию.
function openMenu() {
    nav.classList.add('header__navigation--opened');

    changeIcon(menuButton, iconAttributes.close);
    menuButton.setAttribute('aria-label', 'Закрыть навигацию сайта.');
}

// Закрывает навигацию.
function closeMenu() {
    nav.classList.remove('header__navigation--opened');

    changeIcon(menuButton, iconAttributes.open);
    menuButton.setAttribute('aria-label', 'Открыть навигацию сайта.');
}

// Функция смены иконки в кнопке меню.
function changeIcon(parentElement, attribute) {
    parentElement.querySelector('use').setAttribute('href', attribute);
}

export {
    hideNavigation,
    openMenu,
    closeMenu,
}
