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
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            arrangeProduct(title);
            closeModal();
            setDefaultValues();
            resetListeners();
        }, { once: true });
        closeButton.addEventListener('click', () => {
            closeModal();
            setDefaultValues();
            resetListeners();
        }, { once: true });
        document.addEventListener('keydown', closeModalByEsc);
    }
})

function addValue() {
    let currentValue = amountControl.value;
    const minValue = amountControl.getAttribute('min');

    if (currentValue >= minValue) {
        reduceButton.disabled = false;
        reduceButton.classList.remove('ui-button--disabled');
    }

    amountControl.value++;
}

function reduceValue() {
    let currentValue = amountControl.value;
    const minValue = amountControl.getAttribute('min');

    if (currentValue <= Number(minValue) + 1) {
        reduceButton.disabled = true;
        reduceButton.classList.add('ui-button--disabled');
    }

    amountControl.value--;
}

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

function setDefaultValues() {
    amountControl.value = amountControl.getAttribute('min');
    document.querySelector('.color-control__input[value="black"]').checked = true;
    commentField.value = '';
    counterCurrent.textContent = '0';
}

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

function arrangeProduct(title = 'Птичка') {
    if (amountControl.value == 1) {
        alert(`Ваш новый друг ${title} уже летит к Вам!`);
    } else {
        alert(`Ваш новыe друзья уже летят к Вам!`);
    }
}

function openModal() {
    modal.classList.remove('modal--hidden');
}

function closeModal() {
    modal.classList.add('modal--hidden');
}

function closeModalByEsc(evt) {
    if (evt.key === 'Escape') {
        modal.classList.add('modal--hidden');
        setDefaultValues();
        document.removeEventListener('keydown', closeModalByEsc);
    }
}

function resetListeners() {
    addButton.removeEventListener('click', addValue);
    reduceButton.removeEventListener('click', reduceValue)
    amountControl.removeEventListener('input', handlerValue);
    commentField.removeEventListener('keyup', handlerCounter);
    document.removeEventListener('keydown', closeModalByEsc)
}

