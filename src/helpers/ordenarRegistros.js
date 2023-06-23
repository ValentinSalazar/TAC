import eliminarFilas from "./eliminarFilas"
export default function ordenarRegistros(seccion, datos) {

    const boxFilters = document.querySelector('.box__filters-box')
    let arrayFilas = seccion
    let arrayObjetos = [datos]
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