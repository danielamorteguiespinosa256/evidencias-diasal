let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");
let checkbox = document.getElementById("checkbox");
let password = document.getElementById("password");
let mensajePassword = document.getElementById("mensajePassword");
let mensajeGeneral = document.getElementById("mensajeGeneral");

let contadorIntentos = document.getElementById("contador");
let contadorCaracteres = document.getElementById("contadorCaracteres");

let form = document.querySelector("form");

let intentos = 0;
let bloqueado = false;



// ✅ VALIDAR USUARIO EN TIEMPO REAL
usuario.addEventListener("input", function () {

    let valor = this.value.trim();

    let valido = /^[a-zA-Z0-9]{3,}$/.test(valor);

    if (valor === "") {
        this.style.border = "2px solid red";
        mensaje.textContent = "Campo obligatorio";
        mensaje.style.color = "red";

    } else if (!valido) {
        this.style.border = "2px solid red";
        mensaje.textContent =
        "Solo letras y números, mínimo 3 caracteres";
        mensaje.style.color = "red";

    } else {
        this.style.border = "2px solid green";
        mensaje.textContent = "Usuario válido ✔";
        mensaje.style.color = "green";
    }
});



// ✅ MOSTRAR CONTRASEÑA
checkbox.addEventListener("change", function(){
    password.type = this.checked ? "text" : "password";
});



// ✅ VALIDAR CONTRASEÑA + CONTADOR CARACTERES
password.addEventListener("input", function(){

    let valor = this.value;

    contadorCaracteres.textContent = valor.length;

    let ok =
        valor.length >= 8 &&
        /[A-Z]/.test(valor) &&
        /[0-9]/.test(valor) &&
        /[!@#$%^&*]/.test(valor);

    if (!ok) {
        password.style.border = "2px solid red";
        mensajePassword.textContent =
        "8 caracteres, 1 mayúscula, 1 número y 1 símbolo.";
        mensajePassword.style.color = "red";
    } else {
        password.style.border = "2px solid green";
        mensajePassword.textContent = "Contraseña segura ✔";
        mensajePassword.style.color = "green";
    }
});



// ✅ VALIDAR AL ENVIAR
form.addEventListener("submit", function(e){
    e.preventDefault();

    if (bloqueado) return;

    let usuarioValido =
        /^[a-zA-Z0-9]{3,}$/.test(usuario.value.trim());

    let passwordValida =
        password.value.length >= 8 &&
        /[A-Z]/.test(password.value) &&
        /[0-9]/.test(password.value) &&
        /[!@#$%^&*]/.test(password.value);

    if (usuarioValido && passwordValida){

        mensajeGeneral.textContent = "Formulario enviado correctamente ✔";
        mensajeGeneral.style.color = "green";

        form.reset();
        intentos = 0;
        contadorIntentos.textContent = 0;
        contadorCaracteres.textContent = 0;

        usuario.style.border = "";
        password.style.border = "";

    } else {

        intentos++;
        contadorIntentos.textContent = intentos;

        mensajeGeneral.textContent =
        "Datos incorrectos. Intento " + intentos + " de 3";
        mensajeGeneral.style.color = "red";

        if (intentos >= 3){
            bloquearFormulario();
        }
    }
});



// ✅ BLOQUEAR FORMULARIO
function bloquearFormulario(){

    bloqueado = true;

    usuario.disabled = true;
    password.disabled = true;
    checkbox.disabled = true;

    mensajeGeneral.textContent =
    "Formulario bloqueado 30 segundos ⛔";
    mensajeGeneral.style.color = "orange";

    setTimeout(() => {

        usuario.disabled = false;
        password.disabled = false;
        checkbox.disabled = false;

        mensajeGeneral.textContent =
        "Puedes intentar nuevamente ✔";
        mensajeGeneral.style.color = "green";

        intentos = 0;
        contadorIntentos.textContent = 0;
        bloqueado = false;

    }, 30000);
}
