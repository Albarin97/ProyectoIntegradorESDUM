document.addEventListener("DOMContentLoaded", function () {
    // Obtiene los elementos Id de cada archivo.
    const form = document.getElementById("form");

    // Agrega un event listener al formulario para el evento "submit", que se llama validarFormulario cuando se envía el formulario.
    form.addEventListener("submit", validarFormulario);

    function validarFormulario(evento) {
        // Previene el comportamiento predeterminado del formulario (envío).
        evento.preventDefault();

        const datos = {
            // Crea un objeto "datos" con valores de los campos del formulario.
            correo: document.getElementById("correo").value,
            contraseña: document.getElementById("contraseña").value,
        };

        //***  Validaciones   ****//

        // Validar correo
        if (datos.correo.trim() === "") {
            // Comprueba si el campo está en blanco.
            mostrarAlerta("Por favor, ingrese un correo.", "alertaCorreo");
            return;
        }

        // Validar contraseña
        if (datos.contraseña.trim() === "") {
            // Comprueba si el campo de contraseña está en blanco.
            mostrarAlerta("Por favor, ingrese una contraseña.", "alertaContraseña");
            return;
        }

        /*** FIN Validaciones ****/

        //Se ocupa .stringify en el objeto para convertirla en cadena JSON y se imprime en consola el formato JSON
        const datosJSON = JSON.stringify(datos);
        console.log(datosJSON);
        
        localStorage.setItem("datosUsuario", datosJSON)
       
         // Analiza el JSON de nuevo a un objeto
         const datosParseados = JSON.parse(datosJSON);
         console.log(typeof(datosParseados));
         console.log(datosParseados);

        mostrarAlerta("Formulario enviado con éxito.", "success");
        // Restablece el formulario después de enviar los datos.
        form.reset();

    }

    // Esta función muestra alertas en el formulario.
    function mostrarAlerta(mensaje, tipo) {
        // Ocultar alertas previas
        const alertas = document.querySelectorAll('.alert');
        alertas.forEach(alert => {
            alert.style.display = 'none';
        });

        // Crear elemento de alerta de Bootstrap
        const alerta = document.getElementById(tipo);
        if (alerta) {  // Verifica si alerta es null
            alerta.textContent = mensaje;
            alerta.style.display = 'block';

            // Desaparecer la alerta después de 3 segundos
            setTimeout(function () {
                alerta.style.display = 'none';
            }, 3000);
        }
    }

});