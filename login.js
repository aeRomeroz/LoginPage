const user = document.getElementById('user')
const password = document.getElementById('password')
const login = document.getElementById('login')

login.addEventListener('click', (x) => {
    x.preventDefault()
    const loginData = {
        user: user.value,
        password: password.value
    }
    
    console.log(loginData)

})