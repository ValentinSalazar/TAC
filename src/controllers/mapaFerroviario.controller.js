import mapaFerroviario from '../views/mapaFerroviario.html';

export default () => {
    const ferroviarioElements = document.createElement('section')
    ferroviarioElements.classList.add('mapa__ferroviario')
    ferroviarioElements.innerHTML = mapaFerroviario;
    // const successCallback = (position) => {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    // };

    // const errorCallback = (error) => {
    //     console.log(error);
    // };

    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    
    return ferroviarioElements
}