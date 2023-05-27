// HTML Элементы
const contentContainer = document.querySelector('.content__list');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const addButton = form.querySelector('.amount-control__more');
const reduceButton = form.querySelector('.amount-control__less');
const amountControl = form.querySelector('.amount-control__input');
const commentField = form.querySelector('.form__comment');
const counter = form.querySelector('.form__counter');
const counterCurrent = counter.querySelector('.form__counter-current');
const closeButton = form.querySelector('.button--close');

contentContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('button--buy')) {
        const title = evt.target.closest('.product').firstElementChild.lastElementChild.firstElementChild.textContent;

        openModal();
        addButton.addEventListener('click', addValue);
        reduceButton.addEventListener('click', reduceValue);
        amountControl.addEventListener('input', handlerValue);
        commentField.addEventListener('keyup', handlerCounter);
        form.onsubmit = (evt) => {
            evt.preventDefault();
            arrangeProduct(title);
            handlerClose();
        };
        closeButton.addEventListener('click', handlerClose);
        document.addEventListener('keydown', handlerCloseByEsc);
    }
})

// Добавляет значению инпута на +1, следит за кнопкой "Убавить".
function addValue() {
    let currentValue = amountControl.value;
    const minValue = amountControl.getAttribute('min');

    if (currentValue >= minValue) {
        reduceButton.disabled = false;
        reduceButton.classList.remove('ui-button--disabled');
    }

    amountControl.value++;
}

// Убавляет значение инпута на -1, следит за минимальным значением.
function reduceValue() {
    let currentValue = amountControl.value;
    const minValue = amountControl.getAttribute('min');

    if (currentValue <= Number(minValue) + 1) {
        reduceButton.disabled = true;
        reduceButton.classList.add('ui-button--disabled');
    }

    amountControl.value--;
}

// Следит за вводом значения в инпут, не давая записать знаечние меньше допустимого.
function handlerValue() {
    let currentValue = amountControl.value;
    const minValue = amountControl.getAttribute('min');

    if (currentValue >= minValue) {
        reduceButton.disabled = false;
        reduceButton.classList.remove('ui-button--disabled');
    } else {
        reduceButton.disabled = true;
        reduceButton.classList.add('ui-button--disabled');
        amountControl.value = minValue;
    }
}

// Следит за количеством вводимых в поле "Комментарий" символов.
function handlerCounter() {
    let currentLength = commentField.value.length;
    const maxLength = commentField.getAttribute('maxLength');

    if (currentLength >= maxLength) {
        counter.classList.add('form__counter--invalid');
    } else {
        counter.classList.remove('form__counter--invalid');
    }

    counterCurrent.textContent = currentLength;
}

// Заказывает выбранный продукт.
function arrangeProduct(title = 'Птичка') {
    if (amountControl.value == 1) {
        alert(`Ваш новый друг ${title} уже летит к Вам!`);
    } else {
        alert(`Ваш новыe друзья уже летят к Вам!`);
    }
}

// Открывает доступ к форме.
function openModal() {
    modal.classList.remove('modal--hidden');
}

// Закрывает доступ к форме.
function closeModal() {
    modal.classList.add('modal--hidden');
}

// Закрывает доступ к форме по нажатию клавиши Escape.
function handlerCloseByEsc(evt) {
    if (evt.key === 'Escape') {
        handlerClose();
    }
}

// Следит за закрытием формы, устанавливя дефолтные значения, сбрасывая слушатели событий.
function handlerClose() {
    closeModal();
    setDefaultValues();
    resetListeners();
}

// Устанавливает все значения инпутов в начальное состояние.
function setDefaultValues() {
    amountControl.value = amountControl.getAttribute('min');
    document.querySelector('.color-control__input[value="black"]').checked = true;
    commentField.value = '';
    counterCurrent.textContent = '0';
}

// Сбрасывает все слушатели событий.
function resetListeners() {
    addButton.removeEventListener('click', addValue);
    reduceButton.removeEventListener('click', reduceValue)
    amountControl.removeEventListener('input', handlerValue);
    commentField.removeEventListener('keyup', handlerCounter);
    document.removeEventListener('keydown', handlerCloseByEsc);
    closeButton.removeEventListener('click', handlerClose);
}

