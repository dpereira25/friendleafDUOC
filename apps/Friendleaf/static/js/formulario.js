document.getElementById("valRut").style.display="none";
document.getElementById("valNombre").style.display="none";
document.getElementById("valCorreo").style.display="none";
document.getElementById("valNumero").style.display="none";
document.getElementById("valDireccion").style.display="none";
document.getElementById("valComuna").style.display="none";


function validarFormulario() {
    let rut = document.getElementById("txtRut").value;
    let nombre = document.getElementById("txtNombre").value;
    let correo = document.getElementById("txtCorreo").value;
    let numero = document.getElementById("txtNumero").value;
    let direccion = document.getElementById("txtDireccion").value;
    let comuna = document.getElementById("txtComuna").value;




    if (rut.length==0) {
        document.getElementById("valRut").style.display="inline";
        document.getElementById("txtRut").classList.add("is-invalid");
    }else{
        document.getElementById("valRut").style.display="none";
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
    }

    if (nombre.length==0) {
        document.getElementById("valNombre").style.display="inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("valNombre").style.display="none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
    }

    if (correo.length==0) {
        document.getElementById("valCorreo").style.display="inline";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    }else{
        document.getElementById("valCorreo").style.display="none";
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
    }

    if (numero.length==0) {
        document.getElementById("valNumero").style.display="inline";
        document.getElementById("txtNumero").classList.add("is-invalid");
    }else{
        document.getElementById("valNumero").style.display="none";
        document.getElementById("txtNumero").classList.remove("is-invalid");
        document.getElementById("txtNumero").classList.add("is-valid");
    }

    if (direccion.length==0) {
        document.getElementById("valDireccion").style.display="inline";
        document.getElementById("txtDireccion").classList.add("is-invalid");
    }else{
        document.getElementById("valDireccion").style.display="none";
        document.getElementById("txtDireccion").classList.remove("is-invalid");
        document.getElementById("txtDireccion").classList.add("is-valid");
    }

    if (comuna.length==0) {
        document.getElementById("valComuna").style.display="inline";
        document.getElementById("txtComuna").classList.add("is-invalid");
    }else{
        document.getElementById("valComuna").style.display="none";
        document.getElementById("txtComuna").classList.remove("is-invalid");
        document.getElementById("txtComuna").classList.add("is-valid");
    }
    
    
}
