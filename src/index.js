/* Imports */
import './styles.css' // Importamos todos los estilos.
import { router } from './router/index.router.js' // Importamos la funcion router.
router(window.location.hash)
window.addEventListener('hashchange', () => { // Cuando el usuario cambia de pagina.
  router(window.location.hash)
})

/* Variables */
const menu = document.querySelector('.menu')
const aside = document.querySelector('.filters-off')
const main = document.querySelector('main')
const links = document.querySelectorAll('li a') // Obtengo los A de los Li.
const containerLinks = document.querySelector('.menu__pages')
const menuResponsive = document.querySelector('.menu__responsive')

const btnRegister = document.querySelector('.main__button-register');
const arrayLi = containerLinks.children
const menuLogo = document.querySelector('.menu__logo')



// Coloca un Underline debajo de los A cuando este sea clickeado.
for (var i = 0; i < links.length; i++) { // Recorro todos los A

  // Creo una variable con un link
  var link = links[i]

  // Cuando le demos click, se ejecutara la funcion.
  link.onclick = function () {
    //  Le aplica una función a cada uno los elementos cada vez que se haga click.
    var prev = document.getElementsByClassName("active");

    if (prev && prev[0]) {
      prev[0].classList.remove("active");
    }
    this.classList.add("active");
  };
}

// Obteniendo los registros de la base de datos.
fetch('http://localhost:8000/api/registers')
  .then(res => res.json())
  .then(registros => console.log(registros))
  .catch(err => console.log(err))



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


