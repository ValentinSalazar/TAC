/* Imports */
import './styles.css' // Importamos todos los estilos.
import {router} from './router/index.router.js' // Importamos la funcion router.
router(window.location.hash)
window.addEventListener('hashchange', () => { // Cuando el usuario cambia de pagina.
    router(window.location.hash)
})


/* Variables */
const aside = document.querySelector('.filters-off')
const main = document.querySelector('main')

const links = document.querySelectorAll('li a') // Obtengo los A de los Li.
const containerLinks = document.querySelector('.menu__pages')
const menuResponsive = document.querySelector('.menu__responsive')

const btnRegister = document.querySelector('.main__button-register');


for (var i = 0; i < links.length; i++) { // Recorro todos los A
  // Coloca un Underline debajo de los A cuando este sea clickeado.

    // Creo una variable con un link
    var link = links[i]

    // Cuando le demos click, se ejecutara la funcion.
    link.onclick = function() {
      //  Le aplica una función a cada uno los elementos cada vez que se haga click.
        var prev = document.getElementsByClassName("active");

        if (prev && prev[0]) {
          prev[0].classList.remove("active");
        }
        this.classList.add("active");
      };
}

/* Responsive */
var mediaqueryList = window.matchMedia("(min-width: 480px)");
if (mediaqueryList) {
  menuResponsive.appendChild(containerLinks)
}
