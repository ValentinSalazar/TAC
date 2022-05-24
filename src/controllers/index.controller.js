
/** Documentacipn sobre este archivo:
    Generacion de Contenido en el Inicio.
    Basicamente, lo que se hace es crear el HTML que deseamos mostrar en la pantalla de inicio. 
    Importamos la estructura HTML desde otro archivo que se ubica en la carpeta controllers.

    Algo muy importante, es que este codigo lo que hace es generar el html y pegarlo en el index.
    Por ende, cuando querramos buscar una etiqueta, no tenemos que buscar documents.querySelector; 
    Tendriamos que buscar: mainElemetns.querySelector; Ya que sino, este iria a buscar el elemento al
    archivo principal y nos retornara error ya que es una etiqueta que todavia no esta creada
    en el archivo.
 */

import viewHome from '../views/home.html'

export default () => {

    const mainElements = document.createElement('section');
    mainElements.innerHTML = viewHome

    const btnClick = mainElements.querySelector('div')
    const btnFilters = document.querySelector('.box__filters-menu')
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')

    btnFilters.addEventListener('click', () => {
        btnClick.classList.add('menu__btn')
        main.classList.toggle('main__no-filters')

    })

    btnClick.addEventListener('click', () => {
        aside.classList.remove('filters-off')
        btnClick.classList.toggle('menu__btn')
        main.classList.toggle('main__no-filters')
    })


    return mainElements
}