/** Documentacion sobre este archivo:
        Este archivo se encarga de obtener los hashes por los cuales navega el usuario,
        y les muestra el HTML que querramos que se muestre.
 */

// Importamos 
import home from '../controllers/index.controller.js' // Importo el controlador de home.
import prioritarios from '../controllers/prioritarios.controller.js' // Importo el controlador de prioritarios
import finalizados from '../controllers/finalizados.controller.js' // Importo el controlador de finalizados
import mapa from '../controllers/mapa.controller' // Importo el controlador de mapa
let main = document.querySelector("main") // Le creo un let ya que una constante no se puede modificar.

// Es un Arrow Function que recibe como parametro la ruta que estamos navegando.
const router = (route) => {

    // Limpiamos el contenido antes para que no se duplique.
    main.innerHTML = ''

    // Switch, este condicional lo que hace es elegir lo que se debe mostrar dependiendo
    // de la ruta en la cual el usuario este navegando. Ademas, en caso de que el usuario entre
    // en alguna ruta la cual no se encuentra en nuestro proyecto, retornara un aviso por Default.
    switch(route) {
        case "#/": {
            return main.appendChild(home()); 
        }
            
        case "#/Prioritarios":
            return console.log("hola,prioritarios")
        case "#/Mapa":
            return main.appendChild(mapa())
        default:
            return console.log("404")
    }
}

export {router}