
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

/* Imports */
import viewHome from '../views/home.html'
export default () => {

    const mainElements = document.createElement('section');
    mainElements.innerHTML = viewHome
    

    /* Variables */
    const btnClickMain = mainElements.querySelector('.menu__btn') // Obtengo el div que hemos creado en el views/home.html
    const btnFilters = document.querySelector('.box__filters-menu') // Obtengo el boton de filtros que hemos creado en el index.html
    const aside = document.querySelector('aside') // Obtengo la etiqueta Aside que hemos creado en el index.html
    const main = document.querySelector('main') // Obtengo el main del index.html
    const homeWindow = window.location.hash; // Obtengo el Hash del Inicio.
    const btnRegister = mainElements.querySelector('.main__button-register')
    const form = mainElements.querySelector('.none')
    const BtnformQuit = mainElements.querySelector('.form__quit')
    /* Events Listener */
    if (homeWindow == "" || homeWindow == "#/") {
        btnClickMain.addEventListener('click',() => {
            main.classList.toggle('main__with-filters')
            aside.classList.remove('filters-off')
            aside.classList.add('filters')
            btnClickMain.classList.remove('menu__btn')
        })
    
        btnFilters.addEventListener('click', () =>{
            main.classList.remove('main__with-filters')
            aside.classList.add('filters-off')
            btnClickMain.classList.toggle('menu__btn')
        })
        btnRegister.addEventListener('click', () =>{
            form.classList.remove('none')
            form.classList.add('form__container')
        })
        BtnformQuit.addEventListener('click', () =>{
            form.classList.remove('form__container')
            form.classList.add('none')
        })

    }

    return mainElements
}