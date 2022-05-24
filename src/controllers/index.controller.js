
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


    /* Animacion de filtros */
    const btnClick = mainElements.querySelector('div') // Obtengo el div que hemos creado en el views/home.html
    const btnFilters = document.querySelector('.box__filters-menu') // Obtengo el boton de filtros que hemos creado en el index.html
    const aside = document.querySelector('aside') // Obtengo la etiqueta Aside que hemos creado en el index.html
    const main = document.querySelector('main') // Obtengo el main del index.html

    // EventListener de click al boton de filtros.
    btnFilters.addEventListener('click', () => { 
        btnClick.classList.add('menu__btn') // Se le agrega la clase menu__btn al div que hemos creado en el views/home.html
        main.classList.toggle('main__no-filters') // Se le agrega o se le borra la clase main__no-filters al Main.

    })

    // EventListener de click al boton del main.
    btnClick.addEventListener('click', () => { 
        aside.classList.remove('filters-off')
        btnClick.classList.toggle('menu__btn')
        main.classList.toggle('main__no-filters')
    })


    return mainElements
}