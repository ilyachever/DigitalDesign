import { hideNavigation, handlerClick } from './menu.js';
import { changeTheme, getPreviousTheme } from './theme.js';
import { checkPageOffset, scrollToTop } from './scroll.js';
import { data } from './server.js';
import { view } from "./view.js";
import { controller } from './controller.js';

// HTML Элементы
const menuButton = document.querySelector('.header__menu');

const themeButton = document.querySelector('.ui-button[data-theme]');

const scrollButton = document.querySelector('.content__button');

const contentContainer = document.querySelector('.content__list');
const contentTitle = document.querySelector('.content__title');
const navigationLinks = Array.from(document.querySelectorAll('.ui-link[data-category]'));

// Инитиализация загрузки скрипта
hideNavigation();
getPreviousTheme(themeButton);

if (localStorage.getItem('data') !== null) {
    controller.getLocalStorage(contentTitle, contentContainer);
} else {
    controller.renderDefaultData(contentContainer, data);
    view.setCategoryTitle(contentTitle, 'Экзотические');
}

// Меню
menuButton.addEventListener('click', handlerClick);

// Смена темы
themeButton.addEventListener('click', changeTheme);

// Скролл
window.addEventListener('scroll', () => checkPageOffset(scrollButton));
scrollButton.addEventListener('click', scrollToTop);

// Контент
for (let i = 0; i < navigationLinks.length; i++) {
    const link = navigationLinks[i];

    link.addEventListener('click', (evt) => {
        evt.preventDefault();

        const linkTitle = evt.target.textContent;

        switch (link.dataset.category) {
            case 'exotic':
                controller.setLocalStorage('Экзотические', data['exotic']);
                controller.renderData(contentContainer, data, 'exotic');
                view.setCategoryTitle(contentTitle, linkTitle);
                break;
            case 'wild':
                controller.setLocalStorage('Дикие', data['wild']);
                controller.renderData(contentContainer, data, 'wild');
                view.setCategoryTitle(contentTitle, linkTitle);
                break;
            case 'pet':
                controller.setLocalStorage('Домашние', data['pet']);
                controller.renderData(contentContainer, data, 'pet');
                view.setCategoryTitle(contentTitle, linkTitle);
                break;
        }
    })
}
