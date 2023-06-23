import mapa from "../views/mapa.html";

export default () => {
  const mapsElements = document.createElement("section");
  mapsElements.classList.add('section__mapa')
  mapsElements.innerHTML = mapa;


  const menuPages = document.querySelector('.menu__pages')
  const mapaWindow = window.location.hash;
  if (mapaWindow === "#/Mapa") {
    addEventListener('DOMContentLoaded', () => {
      menuPages.children[0].children[0].classList.remove("active");
      menuPages.children[1].children[0].classList.remove("active");
      menuPages.children[2].children[0].classList.remove("active");
      menuPages.children[3].children[0].classList.add("active");


      const header = document.createElement('header')
      document.body.append(header)
    })





    // Selectores de cada provincia.
    const contenedorInformacion = mapsElements.querySelector('.contenedor__mapa-informacion')
    const caba = mapsElements.querySelector('#caba')
    const buenosAires = mapsElements.querySelector('#buenos-aires')
    const santaFe = mapsElements.querySelector('#santa-fe')
    const corrientes = mapsElements.querySelector('#corrientes')
    const entreRios = mapsElements.querySelector('#entre-rios')
    const laPampa = mapsElements.querySelector('#la-pampa')
    const cordoba = mapsElements.querySelector('#cordoba')
    const rio = mapsElements.querySelector('#parte-de-cordoba')
    const misiones = mapsElements.querySelector('#misiones')
    const rioNegro = mapsElements.querySelector('#rio-negro')
    const salta = mapsElements.querySelector('#salta')
    const jujuy = mapsElements.querySelector('#jujuy')
    const catamarca = mapsElements.querySelector('#catamarca')
    const formosa = mapsElements.querySelector('#formosa')
    const stoEstero = mapsElements.querySelector('#santiago-del-estero')
    const tucuman = mapsElements.querySelector('#tucuman')
    const chaco = mapsElements.querySelector('#chaco')
    const laRioja = mapsElements.querySelector('#la-rioja')
    const sanJuan = mapsElements.querySelector('#san-juan')
    const sanLuis = mapsElements.querySelector('#san-luis')
    const mendoza = mapsElements.querySelector('#mendoza')
    const neuquen = mapsElements.querySelector('#neuquen')

    let objetoRegistros = {};


    function titleCase2(provincia) {
      let cadenaSpliteada = provincia.split('-')
      for (let palabra in cadenaSpliteada) {
        cadenaSpliteada[palabra] = cadenaSpliteada[palabra][0].toUpperCase() + cadenaSpliteada[palabra].substr(1)
      }
      cadenaSpliteada = cadenaSpliteada.join(' ')
      return cadenaSpliteada
    }

    function titleCase(cadena) {
      let cadenaSeparada = cadena.toLowerCase().split(' ')
      for (let i = 0; i < cadenaSeparada.length; i++) {
        cadenaSeparada[i] = cadenaSeparada[i][0].toUpperCase() + cadenaSeparada[i].substr(1)
      }
      let cadenaFinal = cadenaSeparada.join(' ')
      return cadenaFinal
    }

    function limpiarProvincias(contenedor) {
      while (contenedor.children[1]) {
        contenedor.children[1].remove()
      }
    }

    function datearProvincia(provincia) {
      const nombreProvincia = document.createElement('h2')
      nombreProvincia.innerText = limpiarTexto(provincia)
      nombreProvincia.classList.add('contenedor__mapa-nombre--provincia')
      return nombreProvincia
    }


    function limpiarTexto(cadena) {
      const listaCadena = cadena.split('-')
      let cadenaFinal = ''
      for (let i = 0; i < listaCadena.length; i++) {
        cadenaFinal += `${listaCadena[i].toUpperCase()} `
      }
      return cadenaFinal
    }
    const provincias = [
      caba, santaFe, corrientes, cordoba, mendoza, neuquen, sanLuis, laRioja,
      sanJuan, chaco, rio, tucuman, formosa, jujuy, stoEstero, catamarca, entreRios,
      laPampa, buenosAires, misiones, rioNegro, salta]

    for (let i = 0; i < provincias.length; i++) {
      provincias[i].classList.add('provincias')
      provincias[i].addEventListener('mouseover', () => {
        const informacionCreada = datearProvincia(provincias[i].id)
        contenedorInformacion.children[0].innerText = informacionCreada.innerText
      })
    }

    const estadisticasTotales = (generales, prioritarios, finalizados) => generales + prioritarios + finalizados
    function mostrarEstadisticasTotales(registros) {

      const longitudGenerales = registros.generales.length
      const longitudPrioritarios = registros.prioritarios.length
      const longitudFinalizados = registros.finalizados.length
      const longitudTotal = estadisticasTotales(longitudGenerales, longitudPrioritarios, longitudFinalizados)
      return longitudTotal
    }
    function generarHTMLEstadisticasTotales(contenedor, informacion) {
      contenedor.append(informacion)
    }

    function filtrarProvincias(provincias, registros, tipo) {
      let contador = 0
      for (let i = 0; i < provincias.length; i++) {
        provincias[i].addEventListener('mouseover', () => {
          let cadaProvincia = titleCase2(provincias[i].id)
          if (cadaProvincia === 'Caba') {
            cadaProvincia = 'CABA'
          } else if (cadaProvincia === 'Santiago Del Estero') {
            cadaProvincia = 'Santiago del Estero'
          } else if (cadaProvincia === 'Santa Fe') {
            cadaProvincia = 'Santa Fé'
          }
          contador = 0
          for (let j = 0; j < registros.length; j++) {
            if (cadaProvincia === registros[j].localidad) {
              contador += 1
            }
          }
          if (tipo === 'Generales') {
            contenedorInformacion.children[1].innerText = `Registros Generales: ${contador}`
          } else if (tipo === 'Prioritarios') {
            contenedorInformacion.children[2].innerText = `Registros Prioritarios: ${contador}`
          } else if (tipo === 'Finalizados') {
            contenedorInformacion.children[3].innerText = `Registros Finalizados: ${contador}`
          }
        })
      }
    }
    fetch('http://localhost:1337/api/finalizados-cantidad')
      .then((res) => res.json())
      .then((registros) => {
        const cantidadRegistrosTotales = mostrarEstadisticasTotales(registros)
        const tituloRegistrosTotales = mapsElements.querySelector('.contenedor__estadisticas-title')
        generarHTMLEstadisticasTotales(tituloRegistrosTotales, cantidadRegistrosTotales)
        filtrarProvincias(provincias, registros.generales, 'Generales')
        filtrarProvincias(provincias, registros.prioritarios, 'Prioritarios')
        filtrarProvincias(provincias, registros.finalizados, 'Finalizados')
      })
      .catch((err) => console.log(err))
  }

  return mapsElements;
};
