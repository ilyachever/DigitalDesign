// HTML Элементы
const nav = document.querySelector('.header__navigation');

// Если JS не загрузится, навигация будет доступна благодаря модификатору класса "--nojs"
function hideNavigation() {
    nav.classList.remove('header__navigation--nojs');
}

// Функция открыть/закрыть меню
function handlerClick() {
    const iconAttributes = {
        open: './images/sprite/sprite.svg#menu',
        close: './images/sprite/sprite.svg#close',
    }

    nav.classList.toggle('header__navigation--opened');

    if(nav.classList.contains('header__navigation--opened')) {
        changeIcon(this, iconAttributes.close)
        this.setAttribute('aria-label', 'Закрыть навигацию сайта.')
    } else {
        changeIcon(this, iconAttributes.open)
        this.setAttribute('aria-label', 'Открыть навигацию сайта.')
    }
}

// Функция смены иконки в кнопке меню
function changeIcon(parentElement, attribute) {
    const iconContainer = parentElement.querySelector('use');

    iconContainer.setAttribute('href', attribute)
}

// Функция закрытия навигации.
function closeNavigation() {
    nav.classList.remove('header__navigation--opened');
}

export {
    hideNavigation,
    closeNavigation,
    handlerClick
}
