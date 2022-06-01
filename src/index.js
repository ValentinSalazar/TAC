/* Imports */
import './styles.css' // Importamos todos los estilos.
import {router} from './router/index.router.js' // Importamos la funcion router.
router(window.location.hash)
window.addEventListener('hashchange', () => { // Cuando el usuario cambia de pagina.
    router(window.location.hash)
})


/* Variables */
const menuBtn = document.querySelector('.box__filters-menu')
const aside = document.querySelector('.filters')
const main = document.querySelector('main')

const links = document.querySelectorAll('li a') // Obtengo los A de los Li.

const btnRegister = document.querySelector('.main__button-register');

/* Events Listener */
menuBtn.addEventListener('click', () => {
  // Cuando el usuario da click en la X de
    aside.classList.remove('box__filters-menu')
    aside.classList.add('filters-off')

})


for (var i = 0; i < links.length; i++) { // Recorro todos los A
  // Coloca un Underline debajo de los A cuando este sea clickeado.

    // Creo una variable con un link
    var link = links[i]

    // Cuando le demos click, se ejecutara la funcion.
    link.onclick = function() {
        var prev = document.getElementsByClassName("active");
        console.log(prev)
        if (prev && prev[0]) {
          prev[0].classList.remove("active");
        }
        this.classList.add("active");
      };
}


