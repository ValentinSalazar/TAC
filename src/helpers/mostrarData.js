import generarTabla from "./generarTabla";
export default function mostrarData(data, tablaSeccion, url) {
    tablaSeccion.querySelector(".main__table").innerHTML = generarTabla(data);
    const divs = document.querySelectorAll(".main__table-modifiers");
    for (let i = 0; i < divs.length; i++) {
        let completeRow = divs[i].parentNode.parentNode;
        let nota = parseInt(completeRow.children[0].innerText);
        let fecha = completeRow.children[1].innerText;
        let areaResponsable = completeRow.children[2].innerText;
        let localidad = completeRow.children[3].innerText;
        let solicitanteForm = completeRow.children[4].innerText;
        let estadoForm = completeRow.children[5].innerText
        let bodyData = { nota, fecha, areaResponsable, localidad, solicitanteForm, estadoForm };
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
        })}
    }