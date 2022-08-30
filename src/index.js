/* Imports */
import './styles.css' // Importamos todos los estilos.
import { router } from './router/index.router.js' // Importamos la funcion router.
router(window.location.hash)
window.addEventListener('hashchange', () => { // Cuando el usuario cambia de pagina.
  router(window.location.hash)
})

/* Variables */
const menu = document.querySelector('.menu')
const containerLinks = document.querySelector('.menu__pages')
const menuResponsive = document.querySelector('.menu__responsive')
const indexWindow = window.location.hash;
const arrayLi = containerLinks.children
const menuLogo = document.querySelector('.menu__logo')

const navHome = containerLinks.children[0].children[0]
const navPrioritaries = containerLinks.children[1].children[0]


// HACER EL ACTIVE DE LOS LINKS DINAMICOS.

/* Responsive */
menuResponsive.addEventListener('click', () => { // Terminarlo.
  menu.appendChild(containerLinks)
  containerLinks.classList.toggle('menu__pages')
  for (var i = 0; i < arrayLi.length; i++) {
    arrayLi[i].style.fontSize = '2.5rem'
    arrayLi[i].style.backgroundColor = '#ffffff'
    arrayLi[i].style.listStyle = 'none'
    arrayLi[i].style.textAlign = 'center'
  }



  /* Responsive */
  menuResponsive.addEventListener('click', () => { // Terminarlo.
    menu.appendChild(containerLinks)
    containerLinks.classList.toggle('menu__pages')
    for (var i = 0; i < arrayLi.length; i++) {
      arrayLi[i].style.fontSize = '2.5rem'
      arrayLi[i].style.backgroundColor = '#ffffff'
      arrayLi[i].style.listStyle = 'none'
      arrayLi[i].style.textAlign = 'center'
    }
  })





  menuLogo.addEventListener('click', () => {
    // Redirecciona al usuario cuando haga click en el logo.
    document.location.href = "#"
  })

})


