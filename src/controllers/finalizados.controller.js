import finalizados from '../views/finalizados.html'

export default () => {
    const finalizadosElements = document.createElement('section')
    finalizadosElements.innerHTML = finalizados;
    const finalizadosWindow = window.location.hash;


    const btnClickMain = finalizadosElements.querySelector('.menu__btn')
    const btnFilters = document.querySelector('.box__filters-menu')
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')
    const table = finalizadosElements.querySelector('.main__table')
    table.style.marginTop = "4rem"
    btnClickMain.style.marginTop = "-2rem"

    if (finalizadosWindow == "#/Finalizados") {
        main.classList.remove('main__with-filters')
        aside.classList.remove('filters')
        aside.classList.add('filters-off')


        btnClickMain.addEventListener('click', () => {
            main.classList.toggle('main__with-filters')
            aside.classList.remove('filters-off')
            aside.classList.add('filters')
            btnClickMain.classList.remove('menu__btn')
        })

        btnFilters.addEventListener('click', () => {
            main.classList.remove('main__with-filters')
            aside.classList.add('filters-off')
            btnClickMain.classList.toggle('menu__btn')
        })
    }
    return finalizadosElements
}