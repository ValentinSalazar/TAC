
/** Documentacipn sobre este archivo:
    Generacion de Contenido en el Inicio.
    Basicamente, lo que se hace es crear el HTML que deseamos mostrar en la pantalla de inicio. 
    Importamos la estructura HTML desde otro archivo que se ubica en la carpeta controllers.

    Algo muy importante, es que este codigo lo que hace es generar el html y pegarlo en el index.
    Por ende, cuando querramos buscar una etiqueta, no tenemos que buscar documents.querySelector; 
    Tendriamos que buscar: mainElemetns.querySelector; Ya que sino, este iria a buscar el elemento al
    archivo principal y nos retornara error ya que es una etiqueta que todavia no esta creada
    en el archivo.
 */

/* Imports */
import viewHome from '../views/home.html'
export default () => {

    const mainElements = document.createElement('section');
    mainElements.innerHTML = viewHome

    /* Variables */
    const url = 'http://localhost:3000/api/registers'
    const btnClickMain = mainElements.querySelector('.menu__btn') // Obtengo el div que hemos creado en el views/home.html
    const btnFilters = document.querySelector('.box__filters-menu') // Obtengo el boton de filtros que hemos creado en el index.html
    const aside = document.querySelector('aside') // Obtengo la etiqueta Aside que hemos creado en el index.html
    const main = document.querySelector('main') // Obtengo el main del index.html
    const homeWindow = window.location.hash; // Obtengo el Hash del Inicio.
    const btnRegister = mainElements.querySelector('.main__button-register')
    const form = mainElements.querySelector('.none')
    const BtnformQuit = mainElements.querySelector('.form__quit')
    const numeroNota = mainElements.querySelector('.form__numero-nota')
    const btnToday = mainElements.querySelector('.form__button-today')
    const area = mainElements.querySelector('.form__area')
    const firstSelect = mainElements.querySelector('.form__area input')
    const secondSelect = mainElements.querySelector('.form__location select')
    const solicitante = mainElements.querySelector('.form__solicitante textarea')
    const estado = mainElements.querySelector('.form__estado textarea')
    const btnForms = mainElements.querySelector('.form__buttons') // Caja de los botones Limpiar y Agregar. Debo acceder a sus hijos.
    const boxDate = mainElements.querySelector('.form__date-box') // Caja del input y boton de fecha de entradas. Debo acceder a sus hijos.
    const dateToday = new Date().toISOString().substring(0, 10); // Capturamos la fecha del día y con substring le indicamos desde que indice
    // hasta cual, queremos que obtener las fechas.
    const table = mainElements.querySelector('.main__table')
    const cleanBtn = btnForms.children[0]
    const addBtn = btnForms.children[1]
    const localidades = ["...", "CABA", "Buenos Aires", "La Pampa", "Mendoza", "Santa Fé", "Entre Rios", "Corrientes", "Misiones",
        "Formosa", "Chaco", "Salta", "Jujuy", "Catamarca", "Santiago del Estero",
        "Cordoba", "La Rioja", "San Juan", "San Luis", "Rio Negro", "Neuquen", "Chubut", "Santa Cruz", "Tierra del Fuego"]




    const datosForms = {}


    agregarLocalidades();
    function agregarLocalidades() {
        for (let i = 0; i < localidades.length; i++) {
            let option = document.createElement('option')
            option.value = i;
            option.innerHTML = localidades[i];
            secondSelect.appendChild(option)
        }
    }

    function formAdded() {
        console.warn('Registro agregado con éxito.')
    }

    function limpiarCampos() {
        numeroNota.children[1].value = ''; // Limpio los numeros de notas.
        boxDate.children[0].value = ""; // Limpio la fecha.
        firstSelect.value = "";// Limpio el primer select
        secondSelect.innerHTML = ""; // Limpio el segundo select.
        solicitante.value = "";
        estado.value = '';
    }

    function obtenerDatos() {
        let nota = parseInt(numeroNota.children[1].value)
        let fecha = boxDate.children[0].value
        let areaResponsable = firstSelect.value

        let numero = secondSelect.value;
        let localidad = localidades[numero]

        let solicitanteForm = solicitante.value
        let estadoForm = estado.value

        let datos = {
            nota,
            fecha,
            areaResponsable,
            localidad,
            solicitanteForm,
            estadoForm
        }
        return datos
    }


    /* Events Listener */
    if (homeWindow == "" || homeWindow == "#/") {
        // Reseteo los estilos para que no se superpongan.
        main.classList.remove('main__with-filters')
        aside.classList.remove('filters')
        aside.classList.add('filters-off')

        btnClickMain.addEventListener('click', () => {
            main.classList.toggle('main__with-filters')
            aside.classList.remove('filters-off')
            aside.classList.add('filters')
            btnClickMain.classList.remove('menu__btn')
        })

        btnFilters.addEventListener('click', () => {
            main.classList.remove('main__with-filters')
            aside.classList.add('filters-off')
            btnClickMain.classList.toggle('menu__btn')
        })
        btnRegister.addEventListener('click', () => {
            form.classList.remove('none')
            form.classList.add('form__container')
        })
        BtnformQuit.addEventListener('click', () => {
            form.classList.remove('form__container')
            form.classList.add('none')
            limpiarCampos();
        })
        btnToday.addEventListener('click', (e) => {
            e.preventDefault();
            if (boxDate.children[0].value == '') { // Terminar de hacer el ingreso de la fecha al input type=date.
                boxDate.children[0].value = dateToday;
            }
        })

        btnForms.children[0].addEventListener('click', (e) => {
            e.preventDefault(); // Boton Limpiar
            limpiarCampos();
            agregarLocalidades();
        })


        // POST Method
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let datosForms = obtenerDatos();
            console.log(datosForms);

            let nota = parseInt(numeroNota.children[1].value)
            let fecha = boxDate.children[0].value
            let areaResponsable = firstSelect.value
            let numero = secondSelect.value;
            let localidad = localidades[numero]
            let solicitanteForm = solicitante.value
            let estadoForm = estado.value

            if (nota === "" || fecha === "" || areaResponsable === "" || localidad === "" || solicitanteForm === "" || estadoForm === "") {
                alert('Todos los campos deben completarse.')
            } else {
                fetch(url, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json; charset=UTF-8" },
                    body: JSON.stringify(datosForms),
                }).then(x => console.log('Datos enviados.'))


                // Una vez que se haga el fetch, se limpiarán los campos y se recargará la página.
                limpiarCampos();
                console.log('Registro agregado éxitosamente.');
                alert('Registro agregado éxitosamente.')
                location.reload();
            }

        })


        // GET Method (General registers.)
        fetch(url)
            .then(res => res.json())
            .then(registros => mostrarData(registros))
            .catch(err => console.log(err))

        let body =
            `
        <tr>
            <th>Nº</th>
            <th>Fecha de Entrada</th>
            <th>Area responsable</th>
            <th>Localidad</th>
            <th>Solicitante</th>
            <th>Estado</th>
            <th>Modificar</th>
        </tr>
    `
        const mostrarData = (data) => {
            for (let i = 0; i < data.length; i++) {
                body +=
                    `
             <tr>
                <td>${data[i].nota}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].areaResponsable}</td>
                <td>${data[i].localidad}</td>
                <td>${data[i].solicitanteForm}</td>
                <td>${data[i].estadoForm}</td>
                <td>
                    <div class="main__table-modifiers">
                        <div>
                            <span class="material-symbols-outlined">
                                check
                            </span>
                        </div>

                        <div>
                            <span class="material-symbols-outlined">
                                attach_file
                            </span>
                        </div>

                        <div>
                            <span class="material-symbols-outlined table-icons--center">
                                delete
                            </span>
                        </div>

                        <div>
                            <span class="material-symbols-outlined">
                                edit
                            </span>
                        </div>

                    </div>
                </td>
            </tr>
                    `
            }
            mainElements.querySelector('.main__table').innerHTML = body;

        }

    }
    return mainElements
}