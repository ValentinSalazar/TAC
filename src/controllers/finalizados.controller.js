import finalizados from '../views/finalizados.html'

export default () => {
    const url = "http://localhost:1337/api/finalizados";
    const finalizadosElements = document.createElement('section')
    finalizadosElements.innerHTML = finalizados;
    const finalizadosWindow = window.location.hash;
    const menuPages = document.querySelector('.menu__pages')

    const btnClickMain = finalizadosElements.querySelector('.menu__btn')
    const btnFilters = document.querySelector('.box__filters-menu')
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')
    const table = finalizadosElements.querySelector('.main__table')
    table.style.marginTop = "4rem"
    btnClickMain.style.marginTop = "-2rem"

    if (finalizadosWindow == "#/Finalizados") {
        menuPages.children[0].children[0].classList.remove('active')
        menuPages.children[1].children[0].classList.remove('active')
        menuPages.children[2].children[0].classList.add('active')
        menuPages.children[3].children[0].classList.remove("active");
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

        // GET Method (Priorities Registers)
        fetch(url)
            .then((res) => res.json())
            .then((prioritarios) => mostrarData(prioritarios))
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
                <th> Adjunto </th>
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
                    <div style="background-color: #33a575; align-self: stretch;">
                        <span class="material-symbols-outlined">
                            attach_file
                        </span>
                     </div>
                </div>
                </td>
            </tr>
                    `;
            }
            finalizadosElements.querySelector(".main__table").innerHTML = body;

            const divs = document.querySelectorAll(".main__table-modifiers");
            for (let i = 0; i < divs.length; i++) {
                divs[i].children[0].addEventListener('click', () => {
                    const linkInput = document.createElement('a')
                    if (!`${data[i].link}`.includes('https://')) {

                        linkInput.href = `${'https' + '://' + data[i].link}`
                        linkInput.target = '_blank'

                    } else {
                        linkInput.href = `${data[i].link}`
                        linkInput.target = '_blank'
                    }


                    linkInput.style.alignSelf = 'center'
                    linkInput.innerText = `Click para ir al Link`

                    if (divs[i].children[0].parentElement.contains(linkInput)) {
                        console.log('lo contiene');
                    } else {
                        divs[i].children[0].parentElement.append(linkInput)
                    }
                    setTimeout(() => {
                        linkInput.remove()
                        btnCloseInput.remove()
                    }, 3000);
                })
            }
        }



        return finalizadosElements
    }
}