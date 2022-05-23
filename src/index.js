import './styles.css'
import {router} from './router/index.router.js'


router(window.location.hash)
window.addEventListener('hashchange', () => {
    router(window.location.hash)
})