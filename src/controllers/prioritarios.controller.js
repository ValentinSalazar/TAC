import viewPrioritarios from '../views/prioritarios.html'

export default () => {
    const prioritariosElements = document.createElement('section')
    prioritariosElements.innerHTML = viewPrioritarios;
    const btnClickMain = prioritariosElements.querySelector('.menu__btn')
    const btnFilters = document.querySelector('.box__filters-menu')
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')
    const prioritariosWindow = window.location.hash;
    
    const table = prioritariosElements.querySelector('.main__table')
    table.style.marginTop = "4rem"
    btnClickMain.style.marginTop = "-2rem"
    

    if (prioritariosWindow == "#/Prioritarios") {
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
    

    return prioritariosElements
 }
