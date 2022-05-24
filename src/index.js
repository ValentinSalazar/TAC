import './styles.css'


import {router} from './router/index.router.js'
router(window.location.hash)
window.addEventListener('hashchange', () => {
    router(window.location.hash)
})


// Obtengo las etiquetas del HTML y le aplico el evento de click.
const menuBtn = document.querySelector('.box__filters-menu')
const aside = document.querySelector('.filters')
const main = document.querySelector('main')
menuBtn.addEventListener('click', () => {
    aside.classList.remove('box__filters-menu')
    aside.classList.add('filters-off')

})

// Obtengo los A de los Li.
const links = document.querySelectorAll('li a')

// Recorro todos los A
for (var i = 0; i < links.length; i++) {
    var link = links[i]
    link.onclick = function() {
        var prev = document.getElementsByClassName("active");
        if (prev && prev[0]) {
          prev[0].classList.remove("active");
        }
        this.classList.add("active");
      };
}