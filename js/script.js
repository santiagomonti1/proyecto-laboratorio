function validarLogin() {
var usuario = document.getElementById("usuario").value;
var contrasena = document.getElementById("contrasena").value;
var mensaje = document.getElementById("mensaje-error");

if (usuario === "profesor" && contrasena === "fitness123") {
    window.location.href = "seleccion.html";
} else {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
}
}

function mostrarResumen() {
var nombre = document.getElementById("nombre").value;
var ejercicio = document.getElementById("ejercicio").value;
var series = document.getElementById("series").value;
var repes = document.getElementById("repeticiones").value;

var resumen = document.getElementById("resumen");
resumen.textContent = "Alumno: " + nombre + " hará " + series +
    " series de " + repes + " repeticiones de " + ejercicio + ".";
}









