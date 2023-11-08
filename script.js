let loggedIn = false;
const main = document.getElementById('main');
function render() {

    if (!loggedIn) {
        main.innerHTML += `
    <div class="login-box">
    <h3> Kérlek jelentkezz be !</h3>
        <input id="email" type="email" placeholder="Email" />
        <br />
        <br />
        <input id="password" type="password" placeholder="Jelszó" />    
        <br />
        <br />
        
        <button onclick="login()">Bejelentkezés</button>
        </div>
    `
    }
    else {
       main.innerHTML = ` <div class="form-box">
           <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjo6_yjERLlj7Rm_3DGwRyzsT-up2S8Cip2e9bXhOm9et2tQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>
        </div>
          `
    }
    
}

function login() {
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    const email = 'example@test.com';
    const password = 'password';
    console.log('email: '+ inputEmail + 'password: '+ inputPassword)
    if (inputEmail.value !== email || inputPassword.value !== password) {
        alert('Hibás név vagy jelszó !');
        return null;
    }
    loggedIn = true;
    render();
}

render();