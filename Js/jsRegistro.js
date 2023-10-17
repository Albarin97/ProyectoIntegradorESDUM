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
        }, 1500);
    }
  
    if (!correo.includes('@') || !correo.includes('.') || correo.length < 5) {
      document.getElementById('invalidoCorreo').style.display = 'block';
      setTimeout(function() {
        document.getElementById('invalidoCorreo').style.display = 'none';
    }, 1500);
    }
  
    if (correoConfirmacion !== correo) {
      document.getElementById('invalidoConfimacion').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoConfimacion').style.display = 'none';
    }, 1500);
    }
  
    if (contraseña.length < 6) {
      document.getElementById('invalidoContraseña').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoContraseña').style.display = 'none';
      }, 1500);
    }
  
    if (direccion.length < 6) {
      document.getElementById('invalidoDireccion').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoDireccion').style.display='none';
      }, 1500);
    }
  
    if (estado === '') {
      document.getElementById('invalidoEstado').style.display = 'block';
      setTimeout(function(){
        document.getElementById('invalidoEstado').style.display = 'none';
      }, 1500);
    }

    if (codigoPostal.length !==5) {
      document.getElementById('invalidoCodigoPostal').style.display = 'block';
      event.preventDefault();
      setTimeout(function(){
        document.getElementById('invalidoCodigoPostal').style.display = 'none';
      }, 1500);
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
    }, 5000);
    event.preventDefault();
}

});