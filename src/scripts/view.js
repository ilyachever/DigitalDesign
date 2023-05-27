// Рендер элементов (продуктов) на основе входящих данных.

const view = {
    // clearData - отчистка данных на HTML странице.
    clearData(contentContainer) {
        contentContainer.innerHTML = "";
    },
    // getDate - преобразование входящих данных о времени публикации в человекочитаемый вид.
    getDate(time) {
        const dateComponents = time.split('.');
        const [dateDay, dateMonth, dateYear] = dateComponents;
        
        const date = new Date(`${dateYear}-${dateMonth}-${dateDay}`);

        const currentDay = date.getDay();
        const currentDayOfMonth = date.getDate();
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();

        // Возвращает день недели в зависимости от его номера.
        function getDay(day = currentDay) {
            switch (day) {
                case 0:
                    return 'Воскресенье';
                case 1:
                    return 'Понедельник';
                case 2:
                    return 'Вторник';
                case 3:
                    return 'Среда';
                case 4:
                    return 'Четверг';
                case 5:
                    return 'Пятница';
                case 6:
                    return 'Суббота';
                default:
                    return 'Неизвестный день недели';
            }
        }
        // Возвращает номер недели в зависимости от числа месяца.
        function getWeek(dayOfMonth = currentDayOfMonth) {
            if (dayOfMonth >= 1 && dayOfMonth <= 7) {
                return '1 неделя';
            } else if (dayOfMonth >= 8 && dayOfMonth <= 14) {
                return '2 неделя';
            } else if (dayOfMonth >= 15 && dayOfMonth <= 21) {
                return '3 неделя';
            } else if (dayOfMonth >= 22 && dayOfMonth <= 28) {
                return '4 неделя';
            } else {
                return '5 неделя';
            }
        }
        // Возвращает месяц в зависимости от его номера.
        function getMonth(month = currentMonth) {
            switch (month) {
                case 0:
                    return 'Января';
                case 1:
                    return 'Февраля';
                case 2:
                    return 'Марта';
                case 3:
                    return 'Апреля';
                case 4:
                    return 'Мая';
                case 5:
                    return 'Июня';
                case 6:
                    return 'Июля';
                case 7:
                    return 'Августа';
                case 8:
                    return 'Сентября';
                case 9:
                    return 'Октября';
                case 10:
                    return 'Ноября';
                case 11:
                    return 'Декабря';
                default:
                    return 'Неизвестный месяц';
            }
        }
        // Возвращает текущий год.
        function getYear(year = currentYear) {
            return `${year} года`
        }

        return `${getDay()}, ${getWeek()} ${getMonth()} ${getYear()}`;
    },
    // renderTemplate - рендер HTML шаблона для продукта.
    renderTemplate(src, title, time) {
        const template = `
            <li class="content__item">
                <article class="product">
                <figure class="product__figure">
                    <img src=${src} width="128" height="128" alt=${title}>
                    <figcaption>
                    <h3 class="product__title">${title}</h3>
                    </figcaption>
                </figure>
                <small class="product__date">${this.getDate(time)}</small>
                <button class="button button--buy">Купить</button>
                </article>
            </li>
        `

        return template;
    },
    // addProduct - добавление отдельного элемента (продукта) на основе входящих данных.
    addProduct(contentContainer, data) {
        for (let i = 0; i < data.length; i++) {
            const { src, title, time } = data[i];

            contentContainer.innerHTML += this.renderTemplate(src, title, time);
        }
    },
    // setCategoryTitle - устанавливает название активной категории элементов (продуктов).
    setCategoryTitle(contentTitle, title) {
        contentTitle.textContent = `${title} птицы`;
    }
}

export { view };