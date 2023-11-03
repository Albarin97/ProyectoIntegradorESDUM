document.addEventListener("DOMContentLoaded", function () {
    var sesionIniciada = localStorage.getItem("sesionIniciada");
    if (sesionIniciada === "true") {
        console.log("Sesión iniciada");
    } else {
        console.log("Sesion inactiva");
    }
});

document.addEventListener("DOMContentLoaded", function () {
let datosGuardados= localStorage.getItem("datosRegistro");

if(datosGuardados) {
    var datos=JSON.parse(datosGuardados);
} else {

}
console.log(JSON.stringify(datos));
});

document.addEventListener("DOMContentLoaded", function(){
    const btnUser= document.getElementById("btnUser");

    btnUser.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../views/paginaUsuario.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
})


//Trae el  nombre del usuario del local Storage para ponerlo en la pagina
var nombre= JSON.parse(localStorage.getItem('nombreUsuarioDato'));
console.log(nombre);
document.getElementById('card-title').innerHTML="Hola! " + nombre;

var nombre= JSON.parse(localStorage.getItem('nombreUsuarioDato'));
console.log(nombre);
document.getElementById('card-title2').innerHTML="Hola! " + nombre;

//EDITAR LOS DATOS DE LA CUENTA VISTA CELULAR

document.getElementById('formCuentaCelular').addEventListener('submit', function(event) {
    event.preventDefault();

    //Variables del nuevo formulario con los id del formulario para editar cuenta del celular

    //Editar nombre, muestra alerta si esta vacio
    let nuevoNombreUsuario=document.getElementById('nombreUser').value;
        if(nuevoNombreUsuario == '' || nuevoNombreUsuario.length < 6){
            document.getElementById('invalidoNombreUser').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoNombreUser').style.display = 'none';
            }, 3500);
            datosActualesCuentaCelular.nombreUsuarioDato=nuevoNombreUsuario;
        }

    //Editar correo, muestra alerta si esta vacio o no es un correo
    var nuevoCorreo=document.getElementById('correoCelular').value;
        if(nuevoCorreo == '' || !nuevoCorreo.includes('@') || !nuevoCorreo.includes('.') || nuevoCorreo.length < 5){
                document.getElementById('invalidoCorreoCelular').style.display = 'block';
                setTimeout(function() {
                  document.getElementById('invalidoCorreoCelular').style.display = 'none';
              }, 3500);
            datosActualesCuentaCelular.correoDato=nuevoCorreo;
        }

    //Editar correo confirmacion, alerta si esta vacio o no coincide con correo
    let nuevoCorreoConfirmacion= document.getElementById('correoConfirmacionCelular').value;
        if(nuevoCorreoConfirmacion =='' || nuevoCorreoConfirmacion !== nuevoCorreo){
            document.getElementById('invalidoConfimacionCelular').style.display = 'block';
            setTimeout(function(){
              document.getElementById('invalidoConfimacionCelular').style.display = 'none';
          }, 3500);
          datosActualesCuentaCelular.correoConfirmacionDato=nuevoCorreoConfirmacion;
        }
     
    //Editar contrasena, alerta si esta vacia o no cumple criterios
    var nuevaContraseña= document.getElementById('contraseñaCelular').value;
        if(nuevaContraseña =='' || nuevaContraseña.length < 6){
            document.getElementById('invalidoContraseñaCelular').style.display = 'block';
            setTimeout(function(){
              document.getElementById('invalidoContraseñaCelular').style.display = 'none';
            }, 3500);
            datosActualesCuentaCelular.contraseñaDato=nuevaContraseña;
        }

    //Editar numero de telefono, alerta si esta vacio o no cumple criterio de celular
    let nuevoTelefono= document.getElementById('telefonoCelular').value;
        if(nuevoTelefono == '' || nuevoTelefono.length!==10){
            document.getElementById('invalidoTelefonoCelular').style.display= 'block';
            setTimeout(function(){
                document.getElementById('invalidoTelefonoCelular').style.display= 'none';
            }, 3500);
            datosActualesCuentaCelular.telofonoDato=nuevoTelefono;
        }

    //Obtenemos los datos del local Storage
    var datosActualesCuentaCelular= JSON.parse(localStorage.getItem("datosUsuario"));

    //Guarda los datos actualizados en el local storage
    localStorage.setItem("datosRegistro", JSON.stringify(datosActualesCuentaCelular));
    localStorage.setItem("nombreUsuarioDato", JSON.stringify(nuevoNombreUsuario));
    localStorage.setItem("correoDato", JSON.stringify(nuevoCorreo));
    localStorage.setItem("correoConfirmacionDato", JSON.stringify(nuevoCorreoConfirmacion));
    localStorage.setItem("contraseñaDato", JSON.stringify(nuevaContraseña));
    localStorage.setItem("telefonoDato", JSON.stringify(nuevoTelefono));

    alert('Datos actualizados');

    window.location.href = "../views/paginaUsuario.html";
})

//FIN DE LA EDICION DE LOS DATOS DE LA CUENTA VISTA CELULAR


//EDITAR LOS DATOS DE LA DIRECCION VISTA CELULAR
document.getElementById('formDireccionCelular').addEventListener('submit', function(event){
    event.preventDefault();

    //Variables del nuevo formulario con los id del formulario para editar direccion de la vista celular
    let nuevaCalle=document.getElementById('calleCelular').value;
    if(nuevaCalle == '' || nuevaCalle.length < 3){
        document.getElementById('invalidaCalleCelular').style.display = 'block';
        setTimeout(function () {
            document.getElementById('invalidaCalleCelular').style.display = 'none';
        }, 3500);
        datosActualesDireccionCelular.calleDato=nuevaCalle;
    }
    let nuevaColonia=document.getElementById('coloniaCelular').value;
    if(nuevaColonia == '' || nuevaColonia.length < 5){
        document.getElementById('invalidaColoniaCelular').style.display = 'block';
        setTimeout(function () {
            document.getElementById('invalidaColoniaCelular').style.display = 'none';
        }, 3500);
        datosActualesDireccionCelular.coloniaDato=nuevaColonia;
    }
    
    let nuevoNumeroCasa= document.getElementById('numeroCasaCelular').value;
        if(nuevoNumeroCasa == '' || nuevoNumeroCasa.length < 1){
            document.getElementById('invalidoNumeroCasaCelular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidaNumeroCasaCelular').style.display = 'none';
            }, 3500);
            datosActualesDireccionCelular.numeroCasaDato=nuevoNumeroCasa;
        }

    let nuevoEstado= document.getElementById('estadoCelular').value;
        if(nuevoEstado == ''){
            document.getElementById('invalidoEstadoCelular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoEstadoCelular').style.display = 'none';
            }, 3500);
            datosActualesDireccionCelular.estadoDato=nuevoEstado;
        }

    let nuevoCodigoPostal= document.getElementById('codigoPostalCelular').value;
        if(nuevoCodigoPostal == '' || nuevoCodigoPostal.length !==5){
            document.getElementById('invalidoCodigoPostalCelular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoCodigoPostalCelular').style.display = 'none';
            }, 3500);
            datosActualesDireccionCelular.nuevoCodigoPostalDato=nuevoCodigoPostal;
        }

    //Obtenemos los datos del local Storage
    var datosActualesDireccionCelular= JSON.parse(localStorage.getItem("datosRegistro"));

    //Guardamos los datos actualizados en el local storage
    localStorage.setItem("datosRegistro", JSON.stringify(datosActualesDireccionCelular));
    localStorage.setItem("calleDato", JSON.stringify(nuevaCalle));
    localStorage.setItem("coloniaDato", JSON.stringify(nuevaColonia));
    localStorage.setItem("numeroCasaDato", JSON.stringify(nuevoNumeroCasa));
    localStorage.setItem("estadoDato", JSON.stringify(nuevoEstado));
    localStorage.setItem("codigoPostalDato", JSON.stringify(nuevoCodigoPostal));

    alert('Direccion actualizada');

    window.location.href='../views/paginaUsuario.html'

})
//FIN DE LA EDICION DE LA DIRECCION VISTA CELULAR

//EDITAR LOS DATOS DE LA TARJETA VISTA CELULAR
document.getElementById('formTarjetaCelular').addEventListener('submit', function(event){
    event.preventDefault();
    
    //Variables del nuevo formulario con los id del formulario para editar direccion de la vista celular
    let nuevoNombreTitular=document.getElementById('nombreTitularCelular').value;
        if(nuevoNombreTitular== '' || nuevoNombreTitular.length < 6){
            document.getElementById('invalidoTitularCelular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoTitularCelular').style.display = 'none';
            }, 3500);
            datosActualesTarjetaCelular.nombreTitularDato=nuevoNombreTitular;
        }

    let nuevaTarjeta=document.getElementById('numTarjetaCelular').value;
        if(nuevaTarjeta == '' || nuevaTarjeta.length !== 12){
            document.getElementById('invalidoNumTarjetaCelular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoNumTarjetaCelular').style.display = 'none';
            }, 3500);
            datosActualesTarjetaCelular.tarjetaDato=nuevaTarjeta;
        }

    let nuevaFecha= document.getElementById('vencimientoCelular').value;
        if(nuevaFecha == ''){
            document.getElementById('invalidaVencimiento').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidaVencimiento').style.display = 'none';
            }, 3500);
            datosActualesTarjetaCelular.fechaDato=nuevaFecha;
        }

    let nuevoCvv= document.getElementById('cvvCelular').value;
        if(nuevoCvv== '' || nuevoCvv.length !== 3){
            document.getElementById('invalidoCvvCelular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoCvvCelular').style.display = 'none';
            }, 3500);
            datosActualesTarjetaCelular.cvvDato=nuevoCvv;
        }

    //Obtenemos los datos actualizados del local Storage
    var datosActualesTarjetaCelular= JSON.parse(localStorage.getItem("datosRegistro"));

    //Gjuardamos los datos actualizdos en el local storage
    localStorage.setItem("datosRegistro", JSON.stringify(datosActualesTarjetaCelular));
    localStorage.setItem("nombreTitularDato", JSON.stringify(nuevoNombreTitular));
    localStorage.setItem("tarjetaDato", JSON.stringify(nuevaTarjeta));
    localStorage.setItem("fechaDato", JSON.stringify(nuevaFecha));
    localStorage.setItem("cvvDato", JSON.stringify(nuevoCvv));

    alert('Tarjeta agregada');

    window.location.href='../views/paginaUsuario.html'

})
//FIN DE LA EDICION DE TARJETA VISTA CELULAR
//FIN DE EDICION DE DATOS PARA LA VISTA CELULAR


//INICIO DE EDICION DE DATOS PARA VISTAS GRANDES

//INICIO EDICION DE DATOS CUENTA VISTAS GRANDES

document.getElementById('formCuenta').addEventListener('submit', function(event) {
    event.preventDefault();

    //Variables del nuevo formulario con los id del formulario para editar cuenta del celular

    //Editar nombre, muestra alerta si esta vacio
    let nuevoNombreUsuario=document.getElementById('nombreUsuario').value;
        if(nuevoNombreUsuario == '' || nuevoNombreUsuario.length < 6){
            document.getElementById('invalidoName').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoName').style.display = 'none';
            }, 3500);
            datosActualesCuenta.nombreUsuarioDato=nuevoNombreUsuario;
        }

    //Editar correo, muestra alerta si esta vacio o no es un correo
    var nuevoCorreo=document.getElementById('correo').value;
        if(nuevoCorreo == '' || !nuevoCorreo.includes('@') || !nuevoCorreo.includes('.') || nuevoCorreo.length < 5){
                document.getElementById('invalidoCorreo').style.display = 'block';
                setTimeout(function() {
                  document.getElementById('invalidoCorreo').style.display = 'none';
              }, 3500);
            datosActualesCuenta.correoDato=nuevoCorreo;
        }

    //Editar correo confirmacion, alerta si esta vacio o no coincide con correo
    let nuevoCorreoConfirmacion= document.getElementById('correoConfirmacion').value;
        if(nuevoCorreoConfirmacion =='' || nuevoCorreoConfirmacion !== nuevoCorreo){
            document.getElementById('invalidoConfimacion').style.display = 'block';
            setTimeout(function(){
              document.getElementById('invalidoConfimacion').style.display = 'none';
          }, 3500);
          datosActualesCuenta.correoConfirmacionDato=nuevoCorreoConfirmacion;
        }
     
    //Editar contrasena, alerta si esta vacia o no cumple criterios
    var nuevaContraseña= document.getElementById('contraseña').value;
        if(nuevaContraseña =='' || nuevaContraseña.length < 6){
            document.getElementById('invalidoContraseña').style.display = 'block';
            setTimeout(function(){
              document.getElementById('invalidoContraseña').style.display = 'none';
            }, 3500);
            datosActualesCuenta.contraseñaDato=nuevaContraseña;
        }

    //Editar numero de telefono, alerta si esta vacio o no cumple criterio de celular
    let nuevoTelefono= document.getElementById('telefono').value;
        if(nuevoTelefono == '' || nuevoTelefono.length!==10){
            document.getElementById('invalidoTelefono').style.display= 'block';
            setTimeout(function(){
                document.getElementById('invalidoTelefono').style.display= 'none';
            }, 3500);
            datosActualesCuenta.telefonoDato=nuevoTelefono;
        }

    //Obtenemos los datos del local Storage
    var datosActualesCuenta= JSON.parse(localStorage.getItem("datosUsuario"));

    //Guarda los datos actualizados en el local storage
    localStorage.setItem("datosRegistro", JSON.stringify(datosActualesCuenta));
    localStorage.setItem("nombreUsuarioDato", JSON.stringify(nuevoNombreUsuario));
    localStorage.setItem("correoDato", JSON.stringify(nuevoCorreo));
    localStorage.setItem("correoConfirmacionDato", JSON.stringify(nuevoCorreoConfirmacion));
    localStorage.setItem("contraseñaDato", JSON.stringify(nuevaContraseña));
    localStorage.setItem("telefonoDato", JSON.stringify(nuevoTelefono));

    alert('Datos actualizados');

    window.location.href = "../views/paginaUsuario.html";
})

//FIN DE LA EDICION DE LOS DATOS DE LA CUENTA VISTAS GRANDES

//EDITAR LOS DATOS DE LA DIRECCION VISTAS GRANDES
document.getElementById('formDireccion').addEventListener('submit', function(event){
    event.preventDefault();

    //Variables del nuevo formulario con los id del formulario para editar direccion de la vista celular
    let nuevaCalle=document.getElementById('calle').value;
    if(nuevaCalle == '' || nuevaCalle.length < 3){
        document.getElementById('invalidaCalle').style.display = 'block';
        setTimeout(function () {
            document.getElementById('invalidaCalle').style.display = 'none';
        }, 3500);
        datosActualesDireccion.calleDato=nuevaCalle;
    }
    let nuevaColonia=document.getElementById('colonia').value;
    if(nuevaColonia == '' || nuevaColonia.length < 5){
        document.getElementById('invalidaColonia').style.display = 'block';
        setTimeout(function () {
            document.getElementById('invalidaColonia').style.display = 'none';
        }, 3500);
        datosActualesDireccion.coloniaDato=nuevaColonia;
    }
    
    let nuevoNumeroCasa= document.getElementById('numeroCasa').value;
        if(nuevoNumeroCasa == ''){
            document.getElementById('invalidoNumeroCasa').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoNumeroCasa').style.display = 'none';
            }, 3500);
            datosActualesDireccion.numeroCasaDato=nuevoNumeroCasa;
        }

    let nuevoEstado= document.getElementById('estado').value;
        if(nuevoEstado == ''){
            document.getElementById('invalidoEstado').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoEstado').style.display = 'none';
            }, 3500);
            datosActualesDireccion.estadoDato=nuevoEstado;
        }

    let nuevoCodigoPostal= document.getElementById('codigoPostal').value;
        if(nuevoCodigoPostal == '' || nuevoCodigoPostal.length !==5){
            document.getElementById('invalidoCodigoPostal').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoCodigoPostal').style.display = 'none';
            }, 3500);
            datosActualesDireccion.nuevoCodigoPostalDato=nuevoCodigoPostal;
        }

    //Obtenemos los datos del local Storage
    var datosActualesDireccion= JSON.parse(localStorage.getItem("datosRegistro"));

    //Guardamos los datos actualizados en el local storage
    localStorage.setItem("datosRegistro", JSON.stringify(datosActualesDireccion));
    localStorage.setItem("calleDato", JSON.stringify(nuevaCalle));
    localStorage.setItem("coloniaDato", JSON.stringify(nuevaColonia));
    localStorage.setItem("numeroCasaDato", JSON.stringify(nuevoNumeroCasa));
    localStorage.setItem("estadoDato", JSON.stringify(nuevoEstado));
    localStorage.setItem("codigoPostalDato", JSON.stringify(nuevoCodigoPostal));

    alert('Direccion actualizada');

    window.location.href='../views/paginaUsuario.html'

})
//FIN DE LA EDICION DE LA DIRECCION VISTAS GRANDES

//EDITAR LOS DATOS DE LA TARJETA VISTAS GRANDES
document.getElementById('formTarjeta').addEventListener('submit', function(event){
    event.preventDefault();
    
    //Variables del nuevo formulario con los id del formulario para editar direccion de la vista celular
    let nuevoNombreTitular=document.getElementById('nombreTitular').value;
        if(nuevoNombreTitular== '' || nuevoNombreTitular.length < 6){
            document.getElementById('invalidoTitular').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoTitular').style.display = 'none';
            }, 3500);
            datosActualesTarjeta.nombreTitularDato=nuevoNombreTitular;
        }

    let nuevaTarjeta=document.getElementById('numTarjeta').value;
        if(nuevaTarjeta == '' || nuevaTarjeta.length !== 12){
            document.getElementById('invalidoNumTarjeta').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoNumTarjeta').style.display = 'none';
            }, 3500);
            datosActualesTarjeta.tarjetaDato=nuevaTarjeta;
        }

    let nuevaFecha= document.getElementById('vencimiento').value;
        if(nuevaFecha == ''){
            document.getElementById('invalidaFecha').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidaFecha').style.display = 'none';
            }, 3500);
            datosActualesTarjeta.fechaDato=nuevaFecha;
        }

    let nuevoCvv= document.getElementById('cvv').value;
        if(nuevoCvv== '' || nuevoCvv.length !== 3){
            document.getElementById('invalidoCvv').style.display = 'block';
            setTimeout(function () {
                document.getElementById('invalidoCvv').style.display = 'none';
            }, 3500);
            datosActualesTarjeta.cvvDato=nuevoCvv;
        }

    //Obtenemos los datos actualizados del local Storage
    var datosActualesTarjeta= JSON.parse(localStorage.getItem("datosRegistro"));

    //Gjuardamos los datos actualizdos en el local storage
    localStorage.setItem("datosRegistro", JSON.stringify(datosActualesTarjeta));
    localStorage.setItem("nombreTitularDato", JSON.stringify(nuevoNombreTitular));
    localStorage.setItem("tarjetaDato", JSON.stringify(nuevaTarjeta));
    localStorage.setItem("fechaDato", JSON.stringify(nuevaFecha));
    localStorage.setItem("cvvDato", JSON.stringify(nuevoCvv));

    alert('Tarjeta agregada');

    window.location.href='../views/paginaUsuario.html'

})
//FIN DE LA EDICION DE TARJETA VISTAS GRANDES

document.addEventListener("DOMContentLoaded", function(){
    const btnCerrarSesion = document.getElementById("cerrarSesion");

    btnCerrarSesion.addEventListener("click", function(){
        localStorage.setItem("sesionIniciada", "false");
        window.location.href = "../views/inicioSesion.html";
    });
});