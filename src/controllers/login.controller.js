import viewLogin from "../views/login.html";

export default () => {
    const loginElements = document.createElement('section')
    loginElements.classList.add('section__login')
    loginElements.innerHTML = viewLogin;

    document.querySelector('header').remove()
    document.querySelector('main').style.top = '-40px'


    return loginElements
}