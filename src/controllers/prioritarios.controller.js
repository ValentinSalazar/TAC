import viewPrioritarios from '../views/prioritarios.html'

export default () => {
    const url = 'http://localhost:8000/api/priorities'
    const prioritariosElements = document.createElement('section')
    prioritariosElements.innerHTML = viewPrioritarios;
    const btnClickMain = prioritariosElements.querySelector('.menu__btn')
    const btnFilters = document.querySelector('.box__filters-menu')
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')
    const prioritariosWindow = window.location.hash;

    const table = prioritariosElements.querySelector('.main__table')
    table.style.marginTop = "4rem"
    btnClickMain.style.marginTop = "-2rem"


    if (prioritariosWindow == "#/Prioritarios") {
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


        // POST Method (Priority register)
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: ''
        })






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
            `
            for (let i = 0; i < data.length; i++) {
                body += `
             <tr>
                <td>${data[i].nota}</td>
                <td>${data[i].fecha}</td>
                <td>${data[i].areaResponsable}</td>
                <td>${data[i].localidad}</td>
                <td>${data[i].solicitanteForm}</td>
                <td>${data[i].estadoForm}</td>
            </tr> `
            }
        }

        // GET Method (Priorities Registers)
        fetch(url)
            .then(res => res.json())
            .then(registros => mostrarData(registros))
            .catch(err => console.log(err))

    }


    return prioritariosElements
}
