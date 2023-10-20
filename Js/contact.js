document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        //Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;
        const exitoMensaje = document.getElementById('exito');

        //Funcion de validaciones
        function validarCampos() {
            let isValid = true;

            //Revisa campo de nombre que no esté vacío
            if (nombre === '') { 
                isValid = false;
                console.log("no hay nombre");
                alerta ("invalidoNombre", "Por favor, ingrese su nombre");
                
            } else{
                noAlerta("invalidoNombre");
                console.log("si hay nombre");
            }

            //Revisa campo de correo que no esté vacío y sea válido
            if (!correo.includes('@') || !correo.includes('.') || correo.length < 5) {
                isValid = false;
                console.log("no hay correo");
                alerta("invalidoCorreo", "Por favor, ingrese un correo valido");
            } else{
                noAlerta("invalidoCorreo");
                console.log("si hay correo");
            }

            //Revisa campo de mensaje que no esté vacío 
            if (mensaje === '') { 
                isValid = false;
                console.log("no hay mensaje");
                alerta("invalidoMensaje","Por favor, ingrese mensaje");
            }else{
                noAlerta("invalidoMensaje");
                console.log("si hay mensaje");
            }

            return isValid;
        }

        // Función para mostrar alertas de Bootstrap
        function alerta(id, mensaje) {
        const alerta = document.getElementById(id);
        alerta.style.display = 'block';
        alerta.textContent = mensaje;
        }

        // Función para ocultar alertas de Bootstrap
        function noAlerta(id) {
        const alerta = document.getElementById(id);
        alerta.style.display = 'none';
        }

        // Ejecutar función validación
        if (!validarCampos()) {
        return;
        } 

        // Función para mostrar un mensaje de éxito
        function mostrarExitoMensaje() {
            exitoMensaje.style.display = 'block';
            exitoMensaje.textContent = 'Formulario enviado con éxito';
        }

        // Ejecutar función validación
        if (validarCampos()) {
            // Mostrar mensaje de éxito si el formulario es válido
            mostrarExitoMensaje(); 
        }

    });
});