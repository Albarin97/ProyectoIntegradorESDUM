// Se asigna el evento al boton
document.getElementById('form').addEventListener('submit', function(event) {

    //Declaracion de variables para completar la validacion por cada campo
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let correo = document.getElementById('correo').value;
    let correoConfirmacion = document.getElementById('correoConfirmacion').value;
    let contraseña = document.getElementById('contraseña').value;
    let direccion= document.getElementById('direccion').value;
    let estado = document.getElementById('estado').value;
    var codigoPostal = document.getElementById('codigoPostal').value;
  
    //Ciclo if para validar cada campo 
    if (nombreUsuario.length < 6) {
        document.getElementById('invalido').style.display = 'block';
        setTimeout(function () {
            document.getElementById('invalido').style.display = 'none';
        }, 3500);
    }
  
    if (!correo.includes('@') || !correo.includes('.') || correo.length < 5) {
      document.getElementById('invalidoCorreo').style.display = 'block';
      setTimeout(function() {
        document.getElementById('invalidoCorreo').style.display = 'none';
    }, 3500);
    }
  
    if (correoConfirmacion !== correo) {
      document.getElementById('invalidoConfimacion').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoConfimacion').style.display = 'none';
    }, 3500);
    }
  
    if (contraseña.length < 6) {
      document.getElementById('invalidoContraseña').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoContraseña').style.display = 'none';
      }, 3500);
    }
  
    if (direccion.length < 6) {
      document.getElementById('invalidoDireccion').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoDireccion').style.display='none';
      }, 3500);
    }
  
    if (estado === '') {
      document.getElementById('invalidoEstado').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoEstado').style.display = 'none';
      }, 3500);
    }

    if (codigoPostal.length !==5) {
      document.getElementById('invalidoCodigoPostal').style.display = 'block';
      event.preventDefault();
      setTimeout(function(){
        document.getElementById('invalidoCodigoPostal').style.display = 'none';
      }, 3500);
    }
// Validacion de todos los campos para enviar el formulario, muestra la alerta de exito
if (
    nombreUsuario.length >= 6 &&
    correo.includes('@') &&
    correo.includes('.') &&
    correo.length >= 5 &&
    correoConfirmacion === correo &&
    contraseña.length >= 6 &&
    direccion.length >= 6 &&
    estado !== '' &&
    codigoPostal.length === 5
) {
    document.getElementById('exito').style.display = 'block'
    setTimeout(function () {
        document.getElementById('exito').style.display = 'none';
        window.location.href="../views/paginaPrincipal.html"
    }, 3000);
    event.preventDefault();
    //Declaramos una variable que contenga todos los datos del registro
var datos = {
  nombreUsuarioDato: nombreUsuario,
  correoDato: correo,
  correoConfirmacionDato: correoConfirmacion,
  direccionDato: direccion,
  estadoDato: estado,
  codigoPostalDato: codigoPostal,


};

var name=nombreUsuario;
var email=correo;
var emailConfirm=correoConfirmacion;
var address=direccion;
var state=estado;
var zipCode= codigoPostal;

//Guardamos en local Storage, con estos nombres obtenemos los datos del local storage
localStorage.setItem("datosRegistro", JSON.stringify(datos));
localStorage.setItem("nombreUsuarioDato", JSON.stringify(name));
localStorage.setItem("correoDato", JSON.stringify(email));
localStorage.setItem("correoConfirmacionDato", JSON.stringify(emailConfirm));
localStorage.setItem("direccionDato", JSON.stringify(address));
localStorage.setItem("estadoDato", JSON.stringify(state));
localStorage.setItem("codigoPostalDato", JSON.stringify(zipCode));

console.log(JSON.stringify(datos));
console.log(JSON.stringify(name));
console.log(JSON.stringify(email));
console.log(JSON.stringify(emailConfirm));
console.log(JSON.stringify(address));
console.log(JSON.stringify(state));
console.log(JSON.stringify(zipCode));
}

});