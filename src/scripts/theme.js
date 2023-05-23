// Варианты тем.
const themes = {
    base: {
        '--base-theme-background': '#e7e0e7',
        '--base-theme-text': '#393646',
        '--base-theme-ui': '#c2cad7',
    },
    dark: {
        '--base-theme-background': '#2b2931',
        '--base-theme-text': '#a9a5b6',
        '--base-theme-ui': '#39383f',
    }
};

// Меняет тему и дата-атрибут кнопки на противоположный.
function changeTheme() {
    if (this.dataset.theme  === 'base') {
        this.dataset.theme = 'dark';
        changeRules(this.dataset.theme );
        setTheme(this.dataset.theme );
    } else {
        this.dataset.theme = 'base';
        changeRules(this.dataset.theme );
        setTheme(this.dataset.theme );
    }
}

// Меняет CSS свойства в зависимости от выбранной темы.
function changeRules(theme) {
    const currentTheme = themes[theme];

    for (const rule in currentTheme) {
        document.documentElement.style.setProperty(rule, currentTheme[rule]);
    }
}

// Сохраняет выбранную тему в localStorage.
function setTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(themes[theme]));
    localStorage.setItem('themeTitle', theme);
}

// Загружает последнюю выбранную тему из localStorage, меняя при этом дата-атрибут кнопки.
function getPreviousTheme(themeButton) {
    const currentTheme = JSON.parse(localStorage.getItem('theme'));

    themeButton.dataset.theme = localStorage.getItem('themeTitle');

    for (const rule in currentTheme) {
        document.documentElement.style.setProperty(rule, currentTheme[rule]);
    }
}

export { changeTheme, getPreviousTheme };