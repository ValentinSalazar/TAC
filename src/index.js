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
const arrayLi = containerLinks.children
const menuLogo = document.querySelector('.menu__logo')

menuResponsive.children[1].style.display = 'none'
/* Responsive */
menuResponsive.children[0].addEventListener('click', () => { // Terminarlo.
  menuResponsive.children[0].style.display = 'none'
  menuResponsive.children[1].style.display = 'inline'
  menu.insertAdjacentElement('afterend', containerLinks)
  containerLinks.classList.add('menu__pages')
  for (var i = 0; i < arrayLi.length; i++) {
    arrayLi[i].style.fontSize = '2.5rem'
    arrayLi[i].style.backgroundColor = '#ffffff'
    arrayLi[i].style.listStyle = 'none'
    arrayLi[i].style.textAlign = 'center'
    arrayLi[i].style.textTransform = 'uppercase'
    arrayLi[i].style.fontFamily = 'Poppins'
    arrayLi[i].children[0].style.textDecoration = 'none'
    arrayLi[i].style.borderBottom = '1px solid rgba(0,0,0,0.2)'
    arrayLi[i].children[0].style.color = '#0695d6'
    arrayLi[i].children[0].style.fontWeight = '600'
  }

  menuResponsive.children[1].addEventListener('click', () => {
    menuResponsive.children[1].style.display = 'none'
    menuResponsive.children[0].style.display = 'inline'
    containerLinks.remove()
  })



  menuLogo.addEventListener('click', () => {
    // Redirecciona al usuario cuando haga click en el logo.
    document.location.href = "#"
  })

})

