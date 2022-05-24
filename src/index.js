import './styles.css'


import {router} from './router/index.router.js'
router(window.location.hash)
window.addEventListener('hashchange', () => {
    router(window.location.hash)
})


// Obtengo las etiquetas del HTML y le aplico el evento de click.
import defaultExport from '../src/controllers/index.controller'
const menuBtn = document.querySelector('.box__filters-menu')
const aside = document.querySelector('.filters')
const main = document.querySelector('main')
menuBtn.addEventListener('click', () => {
    aside.classList.remove('box__filters-menu')
    aside.classList.add('filters-off')

})

