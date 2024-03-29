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
import viewHome from "../views/home.html";
export default () => {
    const mainElements = document.createElement("section");
    mainElements.innerHTML = viewHome;
    /* Variables */
    const url = "http://localhost:1337/api/registers";
    const btnClickMain = mainElements.querySelector(".menu__btn");
    const btnFilters = document.querySelector(".box__filters-menu");
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");
    const homeWindow = window.location.hash;
    const btnRegister = mainElements.querySelector(".main__button-register");
    const form = mainElements.querySelector(".none");
    const BtnformQuit = mainElements.querySelector(".form__quit");
    const numeroNota = mainElements.querySelector(".form__numero-nota");
    const btnToday = mainElements.querySelector(".form__button-today");
    const firstSelect = mainElements.querySelector(".form__area input");
    const secondSelect = mainElements.querySelector(".form__location select");
    const solicitante = mainElements.querySelector(".form__solicitante textarea");
    const estado = mainElements.querySelector(".form__estado textarea");
    const btnForms = mainElements.querySelector(".form__buttons");
    const boxDate = mainElements.querySelector(".form__date-box");
    const dateToday = new Date().toISOString().substring(0, 10);
    const table = mainElements.querySelector(".main__table");
    const addBtn = btnForms.children[1];
    const localidades = [
        "...",
        "CABA",
        "Buenos Aires",
        "La Pampa",
        "Mendoza",
        "Santa Fé",
        "Entre Rios",
        "Corrientes",
        "Misiones",
        "Formosa",
        "Chaco",
        "Salta",
        "Jujuy",
        "Catamarca",
        "Tucuman",
        "Santiago del Estero",
        "Cordoba",
        "La Rioja",
        "San Juan",
        "San Luis",
        "Rio Negro",
        "Neuquen",
    ];
    const editForm = document.createElement('div')
    editForm.style.display = 'flex'
    const titleEditForm = document.createElement('h3')
    titleEditForm.innerText = ''

    const firstDiv = document.createElement('div')
    firstDiv.style.display = 'flex'
    firstDiv.style.flexDirection = 'row'

    const divNota = document.createElement('div')
    divNota.style.display = 'flex'
    divNota.style.flexDirection = 'column'
    divNota.style.justifyContent = 'center'
    divNota.style.alignItems = 'center'
    const labelNota = document.createElement('label')
    labelNota.innerText = 'Nota'
    const editNota = document.createElement('textarea')
    editNota.classList.add('textarea')
    divNota.append(labelNota, editNota)

    const divFecha = document.createElement('div')
    divFecha.style.display = 'flex'
    divFecha.style.flexDirection = 'column'
    divFecha.style.alignItems = 'center'
    const labelFecha = document.createElement('label')
    labelFecha.innerText = 'Fecha de Entrada'
    const editFecha = document.createElement('textarea')
    editFecha.classList.add('textarea')
    divFecha.append(labelFecha, editFecha)

    firstDiv.append(divNota, divFecha)

    const secondDiv = document.createElement('div')
    secondDiv.style.display = 'flex'
    secondDiv.style.justifyContent = 'center'
    secondDiv.style.alignItems = 'center'

    const divArea = document.createElement('div')
    divArea.style.display = 'flex'
    divArea.style.flexDirection = 'column'
    divArea.style.justifyContent = 'center'
    divArea.style.alignItems = 'center'
    const labelArea = document.createElement('label')
    labelArea.innerText = 'Area Responsable'
    const editArea = document.createElement('textarea')
    editArea.classList.add('textarea')
    divArea.append(labelArea, editArea)

    const divLocalidad = document.createElement('div')
    divLocalidad.style.display = 'flex'
    divLocalidad.style.flexDirection = 'column'
    divLocalidad.style.alignItems = 'center'
    const label_Localidad = document.createElement('label')
    label_Localidad.innerText = 'Localidad'
    const editLocalidad = document.createElement('textarea')
    editLocalidad.classList.add('textarea')
    divLocalidad.append(label_Localidad, editLocalidad)

    secondDiv.append(divArea, divLocalidad)


    const thirdDiv = document.createElement('div')
    thirdDiv.style.display = 'flex'
    thirdDiv.justifyContent = 'center'
    thirdDiv.alignItems = 'center'

    const divSolicitante = document.createElement('div')
    divSolicitante.style.display = 'flex'
    divSolicitante.style.flexDirection = 'column'
    divSolicitante.style.justifyContent = 'center'
    divSolicitante.style.alignItems = 'center'
    const labelSolicitante = document.createElement('label')
    labelSolicitante.innerText = 'Solicitante'
    const editSolicitante = document.createElement('textarea')
    editSolicitante.classList.add('textarea')
    divSolicitante.append(labelSolicitante, editSolicitante)

    const divEstado = document.createElement('div')
    divEstado.style.display = 'flex'
    divEstado.style.flexDirection = 'column'
    divEstado.style.justifyContent = 'center'
    divEstado.style.alignItems = 'center'
    const labelEstado = document.createElement('label')
    labelEstado.innerText = 'Estado'
    const editEstado = document.createElement('textarea')
    editEstado.classList.add('textarea')
    divEstado.append(labelEstado, editEstado)

    thirdDiv.append(divSolicitante, divEstado)


    const buttonsFormContainer = document.createElement('div')
    buttonsFormContainer.classList.add('edit__form-btn')
    buttonsFormContainer.style.margin = '3rem'
    const cancelBtn = document.createElement('button')
    const accceptBtn = document.createElement('button')
    buttonsFormContainer.append(cancelBtn, accceptBtn)
    cancelBtn.classList.add('button')
    cancelBtn.style.backgroundColor = '#D64933'
    cancelBtn.innerText = 'Cancelar'
    accceptBtn.classList.add('button')
    accceptBtn.innerText = 'Aceptar'
    accceptBtn.style.backgroundColor = '#33a575'

    editForm.append(titleEditForm, firstDiv, secondDiv, thirdDiv, buttonsFormContainer)
    editForm.classList.add('edit__form')

    agregarLocalidades();
    function agregarLocalidades() {
        for (let i = 0; i < localidades.length; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerHTML = localidades[i];
            secondSelect.appendChild(option);
        }
    }

    function formAdded() {
        console.warn("Registro agregado con éxito.");
    }

    function limpiarCampos() {
        numeroNota.children[1].value = "";
        boxDate.children[0].value = "";
        firstSelect.value = "";
        secondSelect.innerHTML = "";
        solicitante.value = "";
        estado.value = "";
    }

    function obtenerDatos() {
        let nota = parseInt(numeroNota.children[1].value);
        let fecha = boxDate.children[0].value;
        let areaResponsable = firstSelect.value;

        let numero = secondSelect.value;
        let localidad = localidades[numero];

        let solicitanteForm = solicitante.value;
        let estadoForm = estado.value;

        let datos = {
            nota,
            fecha,
            areaResponsable,
            localidad,
            solicitanteForm,
            estadoForm,
        };
        return datos;
    }


    const menuPages = document.querySelector('.menu__pages')
    if (homeWindow == "" || homeWindow == "#/") {
        const header = document.createElement('header')
        document.body.insertAdjacentElement('afterbegin', header)
        console.log(document.querySelector('.menu'));
        // Reseteo los estilos para que no se superpongan.
        addEventListener('DOMContentLoaded', () => {
        
        main.classList.remove("main__with-filters");
        aside.classList.remove("filters");
        aside.classList.add("filters-off");

        const navHome = document.querySelector(".menu__pages").children[0].children[0]
        menuPages.children[1].children[0].classList.remove('active')
        menuPages.children[2].children[0].classList.remove('active')
        menuPages.children[3].children[0].classList.remove("active");
        navHome.classList.add('active')

        btnClickMain.addEventListener("click", () => {
            main.classList.toggle("main__with-filters");
            aside.classList.remove("filters-off");
            aside.classList.add("filters");
            btnClickMain.classList.remove("menu__btn");
        });

        btnFilters.addEventListener("click", () => {
            main.classList.remove("main__with-filters");
            aside.classList.add("filters-off");
            btnClickMain.classList.toggle("menu__btn");
        });
        btnRegister.addEventListener("click", () => {
            form.classList.remove("none");
            form.classList.add("form__container");
        });
        BtnformQuit.addEventListener("click", () => {
            form.classList.remove("form__container");
            form.classList.add("none");
            limpiarCampos();
        });
        btnToday.addEventListener("click", (e) => {
            e.preventDefault();
            if (boxDate.children[0].value == "") {
                boxDate.children[0].value = dateToday;
            }
        });

        btnForms.children[0].addEventListener("click", (e) => {
            e.preventDefault();
            limpiarCampos();
            agregarLocalidades();
        });
        })

        // POST Method
        addBtn.addEventListener("click", (e) => {
            e.preventDefault();

            let datosForms = obtenerDatos();

            let { nota, fecha, areaResponsable, numero, localidad, solicitanteForm, estadoForm, } = datosForms;
            if (nota === "" || fecha === "" || areaResponsable === "" || localidad === "" || solicitanteForm === "" || estadoForm === "") {
                alert("Todos los campos deben completarse.");
            } else {
                fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json; charset=UTF-8" },
                    body: JSON.stringify(datosForms),
                }).then(response => {
                    if (response.status === 409) {
                        alert('El numero de Nota ya se encuentra en la Base de Datos.')
                        const nota = document.querySelector('.form__numero-nota').children[1]
                        nota.value = ''
                    } else if (response.status === 201) {
                        alert('Registro creado exitosamente.')
                        limpiarCampos();
                        location.reload();
                    }
                })

            }

        });

        function eliminarFilas(filas) {
            for (let i = 1; i < filas.length; i++) {
                filas[i].remove()
            }
        }
        function ordenarRegistros(data) {
            const boxFilters = document.querySelector('.box__filters-box')
            let arrayFilas = mainElements.querySelectorAll('tr')
            let arrayObjetos = [data]
            boxFilters.children[0].children[1].addEventListener('click', () => {
                boxFilters.children[0].classList.toggle('menorAMayor')
                eliminarFilas(arrayFilas)
                let registrosOrdenados = arrayObjetos.slice()
                mostrarData(registrosOrdenados[0].sort((a, b) => {
                    if (boxFilters.children[0].classList.length === 2) return a.nota - b.nota
                    return b.nota - a.nota

                }))
                let clase = boxFilters.children[0].classList.contains('menorAMayor')
                if (clase) {
                    boxFilters.children[0].children[1].style.transform = 'rotate(180deg)'
                } else {
                    boxFilters.children[0].children[1].style.transform = 'rotate(0deg)'
                }
            })
            boxFilters.children[1].children[1].addEventListener('click', () => {
                boxFilters.children[1].classList.toggle('actualAVieja')
                let registrosOrdenados = arrayObjetos.slice()
                eliminarFilas(arrayFilas)
                mostrarData(registrosOrdenados[0].sort((a, b) => {
                    let primerFecha = a.fecha
                    let segundaFecha = b.fecha
                    if (boxFilters.children[1].classList.length === 2) {
                        if (primerFecha < segundaFecha) return 1
                        if (primerFecha > segundaFecha) return -1
                        return 0
                    } else {
                        if (primerFecha < segundaFecha) return -1
                        if (primerFecha > segundaFecha) return 1
                        return 0
                    }
                }))
                let clase = boxFilters.children[1].classList.contains('actualAVieja')
                if (clase) {
                    boxFilters.children[1].children[1].style.transform = 'rotate(180deg)'
                } else {
                    boxFilters.children[1].children[1].style.transform = 'rotate(0deg)'
                }
            })
            boxFilters.children[2].children[1].addEventListener('click', () => {
                boxFilters.children[2].classList.toggle('aHastaZ')
                let registrosOrdenados = arrayObjetos.slice()
                eliminarFilas(arrayFilas)
                mostrarData(registrosOrdenados[0].sort((a, b) => {
                    let primerCadena = a.areaResponsable
                    let segundaCadena = b.areaResponsable
                    if (boxFilters.children[2].classList.length === 2) return primerCadena.localeCompare(segundaCadena)
                    return segundaCadena.localeCompare(primerCadena)
                }))
                let clase = boxFilters.children[2].classList.contains('aHastaZ')
                if (clase) {
                    boxFilters.children[2].children[1].style.transform = 'rotate(180deg)'
                } else {
                    boxFilters.children[2].children[1].style.transform = 'rotate(0deg)'
                }
            })
            boxFilters.children[3].children[1].addEventListener('click', () => {
                boxFilters.children[3].classList.toggle('aHastaZ')
                eliminarFilas(arrayFilas)
                let registrosOrdenados = arrayObjetos.slice()
                mostrarData(registrosOrdenados[0].sort((a, b) => {
                    let primerCadena = a.localidad
                    let segundaCadena = b.localidad
                    if (boxFilters.children[3].classList.length === 2) return primerCadena.localeCompare(segundaCadena)
                    return segundaCadena.localeCompare(primerCadena)
                }))
                let clase = boxFilters.children[3].classList.contains('aHastaZ')
                if (clase) {
                    boxFilters.children[3].children[1].style.transform = 'rotate(180deg)'
                } else {
                    boxFilters.children[3].children[1].style.transform = 'rotate(0deg)'
                }
            })
        }


        const barraBusqueda = document.querySelector('#searchBar')
        const buscarRegistros = (data) => {
            let body = ''
            for (let i = 0; i < data.length; i++) {
                body += `
                    <tr>
                        <td>${data[i].nota}</td>
                        <td>${data[i].fecha}</td>
                        <td>${data[i].areaResponsable}</td>
                        <td>${data[i].localidad}</td>
                        <td><div>${data[i].solicitanteForm}</div></td>
                        <td><div>${data[i].estadoForm}</div></td>
                    <tr>
                `
            }
            mainElements.querySelector('tbody').innerHTML = body
        }
        let tbody = mainElements.getElementsByTagName('tbody')



        const token = localStorage.getItem('token')
        // GET Method (General registers.)
        fetch(url, {
            headers: {
                token
            }
        })
            .then((res) => res.json())
            .then((registros) => {
                mostrarData(registros)
                // ordenarRegistros(registros)
                // buscarRegistros(registros)
            })
            .catch((err) => console.log(err));
        const mostrarData = (data) => {
            let body = `
            <tr>
                <th>Nº</th>
                <th>Fecha de Entrada</th>
                <th>Area responsable</th>
                <th>Localidad</th>
                <th>Solicitante</th>
                <th>Estado</th>
                <th>Modificar</th>
            </tr>
         `;
            for (let i = 0; i < data.length; i++) {
                body += `
             <tr>
                <td>${data[i].nota}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].areaResponsable}</td>
                <td>${data[i].localidad}</td>
                <td><div>${data[i].solicitanteForm}</div></td>
                <td><div>${data[i].estadoForm}</div></td>
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
                    `;
            }
            mainElements.querySelector(".main__table").innerHTML = body;
            const divs = document.querySelectorAll(".main__table-modifiers");
            for (let i = 0; i < divs.length; i++) {
                let completeRow = divs[i].parentNode.parentNode;
                let nota = parseInt(completeRow.children[0].innerText);
                let fecha = completeRow.children[1].innerText;
                let areaResponsable = completeRow.children[2].innerText;
                let localidad = completeRow.children[3].innerText;
                let solicitanteForm = completeRow.children[4].innerText;
                let estadoForm = completeRow.children[5].innerText

                let bodyData = { nota, fecha, areaResponsable, localidad, solicitanteForm, estadoForm};
                /* PRIORITARIES BUTTON*/
                divs[i].children[0].addEventListener("click", () => {
                    if (bodyData) { bodyData['link'] = data[i].link }
                        `Prioritaries button`
                    fetch("http://localhost:1337/api/priorities", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(bodyData),
                    }).then(res => {
                        if (res.status === 409) {
                            alert('Ese numero de nota ya se encuentra en la base de datos.')
                        } else if (res.status === 200) {
                            fetch(`${url}/` + `${data[i]._id}`, {
                                method: "DELETE",
                                headers: { "Content-Type": "application/json" },
                            })
                            alert("Enviado correctamente al apartado de Prioritarios.");
                            completeRow.remove();
                            location.reload();
                        }
                    })

                });
                /* ATTATCH BUTTON */
                divs[i].children[1].addEventListener('click', () => {
                    const linkInput = document.createElement('input')
                    linkInput.placeholder = 'Ingresa un link..'
                    linkInput.value = `${data[i].link}`
                    const btnLinkInput = document.createElement('button')
                    btnLinkInput.style.width = '3rem'
                    btnLinkInput.innerText = 'OK'
                    const btnCloseInput = document.createElement('button')
                    btnCloseInput.style.width = '3rem'
                    btnCloseInput.innerText = 'X'

                    if (divs[i].children[1].parentElement.contains(linkInput)) {
                    } else {
                        divs[i].children[1].parentElement.append(linkInput, btnCloseInput, btnLinkInput)
                    }

                    const input = completeRow.children[6].children[0].children[4]
                    btnLinkInput.addEventListener('click', () => {
                        const objetoLink = { link: input.value }
                        if (linkInput.value === "") {
                        } else {
                            fetch(`${url}/` + `${data[i]._id}`, {
                                method: 'PATCH',
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(objetoLink)
                            })
                        }
                        alert('Link actualizado correctamente.')
                        location.reload()
                    })
                    btnCloseInput.addEventListener('click', () => {
                        linkInput.remove()
                        btnLinkInput.remove()
                        btnCloseInput.remove()
                    })
                })
                /* DELETE BUTTON */
                divs[i].children[2].addEventListener("click", () => {
                    const linkInput = document.createElement('input')
                    linkInput.value = `${data[i].link}`
                    bodyData.link = linkInput.value
                    let completeRow = divs[i].children[2].parentNode.parentNode.parentNode;
                    completeRow.remove();
                    fetch("http://localhost:1337/api/finalizados", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(bodyData),
                    })
                        .then(res => {
                            if (res.status === 201) {
                                fetch(`${url}/` + `${data[i]._id}`, {
                                    method: "DELETE",
                                    headers: { "Content-Type": "application/json" },
                                })
                                alert(`Registro con la Nota: ${data[i].nota} eliminado`);
                            } else {
                                alert(`No se pudo enviar el registro al apartado de Eliminados. Intente nuevamente.`)
                            }
                        })



                })
                /* EDIT BUTTON */
                divs[i].children[3].addEventListener('click', (e) => {
                    titleEditForm.innerText = `Editar Registro con Nota: ${data[i].nota}`
                    editNota.innerText = `${data[i].nota}`
                    editFecha.innerText = `${data[i].fecha}`
                    editArea.innerText = `${data[i].areaResponsable}`
                    editLocalidad.innerText = `${data[i].localidad}`
                    editSolicitante.innerText = `${data[i].solicitanteForm}`
                    editEstado.innerText = `${data[i].estadoForm}`
                    table.insertAdjacentElement("beforebegin", editForm)
                    buttonsFormContainer.children[0].addEventListener('click', () => {
                        editForm.remove()
                    })
                    buttonsFormContainer.children[1].addEventListener('click', () => {
                        const editData = {
                            nota: editNota.value,
                            fecha: editFecha.value,
                            areaResponsable: editArea.value,
                            localidad: editLocalidad.value,
                            solicitanteForm: editSolicitante.value,
                            estadoForm: editEstado.value

                        }
                        fetch(`${url}/` + `${data[i]._id}`, {
                            method: 'PATCH',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(editData)
                        })
                        alert('Registro actualizado correctamente.')
                        location.reload()
                    })
                })
            }
        };

    }
    return mainElements;
    
};

