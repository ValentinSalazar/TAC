export default function buscarRegistros() {
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
}
// Falta terminar