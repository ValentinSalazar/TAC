import viewLogin from "../views/login.html";

export default () => {
    const loginElements = document.createElement('section')
    loginElements.classList.add('section__login')
    loginElements.innerHTML = viewLogin;


    addEventListener('DOMContentLoaded', () => {
        document.querySelector('aside').remove()
        document.querySelector('header').remove()
        document.querySelector('main').style.top = '-80px'
    })
    



    
    
    const loginData = {}


    const loginButton = loginElements.querySelector('.cta__iniciar')
    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        const email = loginElements.querySelector('.form__inputs-user').children[1].value
        const password = loginElements.querySelector('.form__inputs-password').children[1].value
        if (!email.includes('@bcyl.com.ar') || password === '') {
            alert('Datos invalidos. Vuelve a ingresarlos.')
        } else {
            loginData.email = email
            loginData.password = password
            fetch('http://localhost:1337/api/user/login', {
                method: 'POST',
                headers : { "Content-Type": "application/json; charset=UTF-8"},
                body: JSON.stringify(loginData)
            })
            .then(res => res.json())
            .then(res => {
                const token = res.usuario.token
                localStorage.setItem('token', token)
            })

            
        }

        
    })

    return loginElements
}