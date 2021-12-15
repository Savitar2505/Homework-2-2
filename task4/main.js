
let logIn = document.getElementById('login')
const check =()=>{
    let userName = document.getElementById('username').value
    let password = document.getElementById('password').value
    logIn.disabled = userName.length && password.length < 6;
}
let user
let pass
const output=()=>{

    user = document.getElementById('username').value;
    pass = document.getElementById('password').value;
    alert(`Username: ${user} \n Password: ${pass}`)
}