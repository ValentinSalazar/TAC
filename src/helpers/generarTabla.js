export default function generarTabla(data) {
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
    return body
}