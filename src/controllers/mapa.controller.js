import mapa from "../views/mapa.html";

export default () => {
  const mapsElements = document.createElement("section");
  mapsElements.classList.add('section__mapa')
  mapsElements.innerHTML = mapa;


  const menuPages = document.querySelector('.menu__pages')
  const mapaWindow = window.location.hash;
  if (mapaWindow === "#/Mapa") {
    menuPages.children[0].children[0].classList.remove("active");
    menuPages.children[1].children[0].classList.remove("active");
    menuPages.children[2].children[0].classList.remove("active");
    menuPages.children[3].children[0].classList.add("active");





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

    // Inicializo la lista y el diccionario.
    let nombreProvincias = [];
    let objetoProvincias = {}

    for (let i = 0; i < provincias.length; i++) {
      // Mete el nombre de las provincias en una lista.
      nombreProvincias.push(limpiarTexto(provincias[i].id).slice(0, -1))
    }

    for (let i = 0; i < nombreProvincias.length; i++) {
      // Agrega el nombre de las provincias al diccionario.
      objetoProvincias[nombreProvincias] = `${nombreProvincias}`
    }

    for (let i = 0; i < provincias.length; i++) {
      provincias[i].classList.add('provincias')
      provincias[i].addEventListener('mouseover', () => {
        const informacionCreada = datearProvincia(provincias[i].id)
        contenedorInformacion.children[0].innerText = informacionCreada.innerText
        provincias[i].addEventListener('mouseout', () => {

        })
      })
    }

    // Arrow function que suma la cantidad de registros y retorna el total. La utilizo dentro de otra funcion.
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

    function filtrarProvincias(provincias, registros) {
      for (let i = 0; i < provincias.length; i++) {
        provincias[i].addEventListener('mouseover', () => {
          const registrosGenerales = registros.generales
          const registrosPrioritarios = registros.prioritarios
          const registrosFinalizados = registros.finalizados
          // VEAMOS LOS METODOS DE LOS OBJETOS Y LUEGO FILTRAMOS POR NOMBRE DE PROVINCIAS.
          // ESA FILTRACION NOS RETORNARA LA CANTIDAD DE REGISTROS QUE TIENE ESA PROVINCIA.
          // YA SEAN REGISTROS GENERALES, PRIORITARIOS Y FINALIZADOS.
        })
      }
    }

    fetch('http://localhost:1337/api/finalizados-cantidad')
      .then((res) => res.json())
      .then((registros) => { 

        const cantidadRegistrosTotales = mostrarEstadisticasTotales(registros)
        const tituloRegistrosTotales = mapsElements.querySelector('.contenedor__estadisticas-title')
        generarHTMLEstadisticasTotales(tituloRegistrosTotales, cantidadRegistrosTotales)

        filtrarProvincias(provincias, registros)
        
       })
      .catch((err) => console.log(err));
  }

  return mapsElements;
};
