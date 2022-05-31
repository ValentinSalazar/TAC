import mapa from '../views/mapa.html'

export default () => {
    const mapsElements = document.createElement('section')
    mapsElements.innerHTML = mapa;

    return mapsElements
}