// Рендер элементов (продуктов) на основе входящих данных.

const view = {
    // clearData - отчистка данных на HTML странице.
    clearData(contentContainer) {
        contentContainer.innerHTML = "";
    },
    // getDate - преобразование входящих данных о времени публикации в человекочитаемый вид.
    getDate(string) {
        return string;
    },
    // renderTemplate - рендер HTML шаблона для продукта.
    renderTemplate(src, title, time) {
        const template = `
            <li class="content__item">
                <article class="product">
                <figure class="product__figure">
                    <img src=${src} width="128" height="128" alt=${title}>
                    <figcaption>
                    <h2 class="product__title">${title}</h2>
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