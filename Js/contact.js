document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const exitoMensaje = document.getElementById("exito");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const datos = {
            nombre: document.getElementById('nombre').value,
            correo: document.getElementById('correo').value,
            mensaje: document.getElementById('mensaje').value,
        };

        const isValid = validarCampos(datos);

        if (!isValid) {
            return;
        }

        const datosJSON = JSON.stringify(datos);
        console.log(datosJSON);

        mostrarAlerta("Formulario enviado con éxito.", "success");

        form.reset();
    });

    function validarCampos(datos) {
        let isValid = true;

        if (datos.nombre === '') {
            isValid = false;
            alerta("invalidoNombre", "Por favor, ingrese su nombre");
        } else {
            noAlerta("invalidoNombre");
        }

        if (!datos.correo.includes('@') || !datos.correo.includes('.') || datos.correo.length < 5) {
            isValid = false;
            alerta("invalidoCorreo", "Por favor, ingrese un correo válido");
        } else {
            noAlerta("invalidoCorreo");
            
        }

        if (datos.mensaje === '') {
            isValid = false;
            
            alerta("invalidoMensaje", "Por favor, ingrese mensaje");
        } else {
            noAlerta("invalidoMensaje");
            
        }

        return isValid;
    }

    function alerta(id, mensaje) {
        const alerta = document.getElementById(id);
        alerta.style.display = 'block';
        alerta.textContent = mensaje;
    }

    function noAlerta(id) {
        const alerta = document.getElementById(id);
        alerta.style.display = 'none';
    }

    function mostrarAlerta(mensaje) {
        exitoMensaje.textContent = mensaje;
        exitoMensaje.style.display = 'block';
    
        // Oculta la alerta después de 3 segundos
        setTimeout(function () {
            exito.style.display = 'none';
        }, 3000);
    }
});