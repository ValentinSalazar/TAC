import error from '../views/error.html'

export default () => {
    const errorElements = document.createElement('section')
    errorElements.innerHTML = error;

    return errorElements
}