import login from '../controllers/login.controller.js'
import home from '../controllers/index.controller.js'
import prioritarios from '../controllers/prioritarios.controller.js'
import finalizados from '../controllers/finalizados.controller.js' 
import mapa from '../controllers/mapa.controller' 
import error from '../controllers/error.controller.js'
import mapaFerroviario from '../controllers/mapaFerroviario.controller.js'
let main = document.querySelector("main") 

const router = (route) => {
    main.innerHTML = ''
    switch(route) {
        case "": {
            return main.appendChild(home()); 
        }
        case "#/": {
            return main.appendChild(home()); 
        }
        case "#/Prioritarios": {
            return main.appendChild(prioritarios())
        }
        case "#/Finalizados": {
            return main.appendChild(finalizados());
        }
        case "#/Mapa": {
            return main.appendChild(mapa())
        }
        case '#/MapaFerroviario': {
            return main.appendChild(mapaFerroviario())
        }
        case "#/login": {
            return main.appendChild(login())
        }
        default:
            {
                return main.appendChild(error());
            }
    }
}

export {router}