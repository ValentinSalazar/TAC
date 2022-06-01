import finalizados from '../views/finalizados.html'

export default () => {
    const finalizadosElements = document.createElement('section')
    finalizadosElements.innerHTML = finalizados;

    return finalizadosElements
}