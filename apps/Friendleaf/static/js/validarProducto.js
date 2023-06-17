/* document.getElementById("valIdProducto").style.display = "none";
document.getElementById("valNombreProducto").style.display = "none";
document.getElementById("valPrecioProducto").style.display = "none";
document.getElementById("valTamanoProducto").style.display = "none";
document.getElementById("valCorreo").style.display = "none";
document.getElementById("valContrasena").style.display = "none";

function validarProducto() {

    let nombre = document.getElementById("txtNombreProducto").value;
    let precio = document.getElementById("txtPrecioProducto").value;
    let tamano = document.getElementById("txtTamanoProducto").value;
    let correo = document.getElementById("txtCorreo").value;
    let contrasena = document.getElementById("txtContrasena").value;
    let id = document.getElementById("txtIdProducto").value;

    if (id.length == 0) {
        document.getElementById("valIdProducto").style.display = "inline";
        document.getElementById("txtIdProducto").classList.add("is-invalid");
    } else {
        document.getElementById("valIdProducto").style.display = "none";
        document.getElementById("txtIdProducto").classList.remove("is-invalid");
        document.getElementById("txtIdProducto").classList.add("is-valid");
    }

    if (nombre.length == 0) {
        document.getElementById("valNombreProducto").style.display = "inline";
        document.getElementById("txtNombreProducto").classList.add("is-invalid");
    } else {
        document.getElementById("valNombreProducto").style.display = "none";
        document.getElementById("txtNombreProducto").classList.remove("is-invalid");
        document.getElementById("txtNombreProducto").classList.add("is-valid");
    }

    if (precio.length == 0) {
        document.getElementById("valPrecioProducto").style.display = "inline";
        document.getElementById("txtPrecioProducto").classList.add("is-invalid");
    } else {
        document.getElementById("valPrecioProducto").style.display = "none";
        document.getElementById("txtPrecioProducto").classList.remove("is-invalid");
        document.getElementById("txtPrecioProducto").classList.add("is-valid");
    }

    if (tamano.length == 0) {
        document.getElementById("valTamanoProducto").style.display = "inline";
        document.getElementById("txtTamanoProducto").classList.add("is-invalid");
    } else {    
        document.getElementById("valTamanoProducto").style.display = "none";
        document.getElementById("txtTamanoProducto").classList.remove("is-invalid");
        document.getElementById("txtTamanoProducto").classList.add("is-valid");
    }
    if (correo.length == 0) {
        document.getElementById("valCorreo").style.display = "inline";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    } else {
        document.getElementById("valCorreo").style.display = "none";
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
    }

    if (contrasena.length == 0) {
        document.getElementById("valContrasena").style.display = "inline";
        document.getElementById("txtContrasena").classList.add("is-invalid");
    } else {
        document.getElementById("valContrasena").style.display = "none";
        document.getElementById("txtContrasena").classList.remove("is-invalid");
        document.getElementById("txtContrasena").classList.add("is-valid");
    }
} */

$(function () {

    $("#agregarP").validate({
        rules: {
            txtIdProducto: { 
                required: true, 
                number: true },
            txtNombreProducto: { 
                required: true, 
                minlength: 3 },
            txtPrecioProducto: { 
                required: true, 
                number: true }
        }, messages: {
            txtIdProducto: {
                required: "Este campo es obligatorio",
                number: "Este campo debe ser numerico"
            },txtNombreProducto: {
                required: "Este campo es obligatorio", 
                minlength: "Este campo debe tener minimo 3 caracteres" 
            },txtPrecioProducto: {
                required: "Este campo es obligatorio", 
                number: "Este campo debe ser numerico" 
            }
        }
    })

})