import { view } from "./view.js";

// Взаимодействие пользователя с входящими данными.
const controller = {
    // renderData - рендер данных на HTML страницу.
    renderData(contentContainer, data, key) {
        view.clearData(contentContainer);

        try {
            const currentCategory = data[key];

            view.addProduct(contentContainer, currentCategory);
        } catch (e) {
            console.log(e)
        }
    },
    // renderDefaultData - рендер данных при загрузке сайта в первый раз.
    renderDefaultData(contentContainer, data, key = 'exotic') {
        try {
            const defaultCategory = data[key];

            view.addProduct(contentContainer, defaultCategory);
        } catch (e) {
            console.log(e)
        }
    },
    // setLocalStorage - помещает в localStorage информацию о текущей категории и данных о ней.
    setLocalStorage(title, data) {
        localStorage.setItem('title', title)
        localStorage.setItem('data', JSON.stringify(data))
    },
    // getLocalStorage - рендерит из localStorage информацию о текущей категории и данных о ней.
    getLocalStorage(titleContainer, contentContainer) {
        const storageData = JSON.parse(localStorage.getItem('data'));
        const title = localStorage.getItem('title');

        view.addProduct(contentContainer, storageData);
        view.setCategoryTitle(titleContainer, title);
    },
}

export { controller };
