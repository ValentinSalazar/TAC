import mapa from "../views/mapa.html";

export default () => {
  const mapsElements = document.createElement("section");
  mapsElements.innerHTML = mapa;


  const menuPages = document.querySelector('.menu__pages')
  const mapaWindow = window.location.hash;
  if (mapaWindow === "#/Mapa") {
    menuPages.children[0].children[0].classList.remove("active");
    menuPages.children[1].children[0].classList.remove("active");
    menuPages.children[2].children[0].classList.remove("active");
    menuPages.children[3].children[0].classList.add("active");





    // Selectores de cada provincia.
    const contenedorProvincia = mapsElements.querySelector('.contenedor__mapa')
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

    function informarProvincias(provincia) {
      const cajaInformacion = document.createElement('div')
      cajaInformacion.classList.add('caja__informacion')
      const nombreProvincia = document.createElement('h3')
      nombreProvincia.innerText = `${limpiarTexto(provincia.id)}`
      nombreProvincia.style.textAlign = 'center'
      nombreProvincia.style.margin = '1rem'

      cajaInformacion.append(nombreProvincia)


      return cajaInformacion
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
        const informacionCreada = informarProvincias(provincias[i])
        
        let verificador = contenedorProvincia.contains(informacionCreada)
        
        if (! verificador) {
          // contenedorProvincia.append(informacionCreada)
          console.log(contenedorProvincia);
          contenedorProvincia.append(informacionCreada)
          verificador = false
        } else {
          console.log('No lo contiene');
        }

      })
    }
  }

  return mapsElements;
};
