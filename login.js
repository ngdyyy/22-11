const form = document.getElementById('registerForm')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const error = document.getElementById("error")
const registbtn = document.getElementById('registbtn')

form.addEventListener('submit', (e) => {
    const passwordInputLength = passwordInput.value.length;

    if (passwordInputLength <= 0 || passwordInputLength >= 12) {
        e.preventDefault();
        error.textContent = "Password must be 1 - 12 elements";
    }
})


    
