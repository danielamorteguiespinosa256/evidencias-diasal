let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");
let checkbox = document.getElementById("checkbox");
let password = document.getElementById("password");

// Validar usuario
usuario.addEventListener("input", function () {

    let valor = this.value;

    if (/[^a-zA-Z]/.test(valor)) {
        this.style.border = "2px solid red";
        mensaje.textContent = "Usuario incorrecto";
        mensaje.style.color = "red";
    } 
    else if (valor === "") {
        this.style.border = "2px solid red";
        mensaje.textContent = "Campo obligatorio";
        mensaje.style.color = "red";
    } 
    else {
        this.style.border = "2px solid green";
        mensaje.textContent = "Usuario válido";
        mensaje.style.color = "green";
    }

    this.value = valor.replace(/[^a-zA-Z0-9.-]/g, '');
});

// Mostrar / ocultar contraseña
checkbox.addEventListener("change", function(){
    if (this.checked){
        password.type = "text";
    } else{
        password.type = "password";
    }
});
// contador-contraseñ
const input = document.getElementById('password');
const contador = document.getElementById('contador');

input.addEventListener('input', function(e) {

const longitud = e.target.value.length;
contador.textContent = longitud;
    });