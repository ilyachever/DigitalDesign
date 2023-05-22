import {
    isJsLoaded,
    handlerClick
} from './menu.js'

// Инитиализация загрузки скрипта
isJsLoaded()

// Меню
const button = document.querySelector('.header__menu');
button.addEventListener('click', handlerClick)