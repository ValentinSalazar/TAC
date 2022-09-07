import error from '../views/error.html'
export default () => {
    const errorElements = document.createElement('section')
    errorElements.innerHTML = error;

    errorElements.style.display = "flex"
    errorElements.style.flexDirection = "column"
    errorElements.style.alignItems = "center"
    errorElements.style.marginTop = "2rem"
    errorElements.style.fontFamily = "Poppins"
    const title = errorElements.querySelector('h1')
    title.style.fontSize = "3rem"

    const description = errorElements.querySelector('p')
    description.style.fontSize = "2rem"
    description.style.marginTop = "2rem"

    const containerLinks = errorElements.querySelector('.links')
    containerLinks.style.display = "inline"

    const links = errorElements.getElementsByTagName('a')
    for (var i = 0; i < links.length; i++) {
        links[i].style.marginLeft = "2rem"
        links[i].style.fontSize = "2rem"
        links[i].style.textTransform = "uppercase"
        links[i].style.textDecoration = "none"
        links[i].style.color = "#0695d6"
    }
    
    return errorElements
}