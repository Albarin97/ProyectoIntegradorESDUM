document.addEventListener("DOMContentLoaded", function () {
    // Obtiene los elementos Id de cada archivo.
    const form = document.getElementById("form");

    // Agrega un event listener al formulario para el evento "submit", que se llama validarFormulario cuando se envía el formulario.
    form.addEventListener("submit", iniciarSesion);

    function iniciarSesion(evento) {
        // Previene el comportamiento predeterminado del formulario (envío).
        evento.preventDefault();

        //Se obtienen el correo y la contraseña ingresados 
            // Crea un objeto "datos" con valores de los campos del formulario.
            const correoInicio= document.getElementById("correoInicio").value;
            const contraseñaInicio= document.getElementById("contraseñaInicio").value;

        //Vamos a obtener los datos de registro del LocalStorage
        const datosGuardados= JSON.parse(localStorage.getItem("datosRegistro"));

        if (datosGuardados && correoInicio === datosGuardados.correoDato && contraseñaInicio === datosGuardados.contraseñaDato) {
            console.log("Sesión iniciada");
            localStorage.setItem("sesionIniciada", "true");
            window.location.href = "../views/paginaPrincipal.html";
        } 
              
        if(contraseñaInicio!== datosGuardados.contraseñaDato) {
            //Validar contraseña
            mostrarAlerta("Contraseña incorrecta", "alertaContraseña");
        } else{
            
        }

        if(correoInicio!== datosGuardados.correoDato) {
        //Validar correo
        mostrarAlerta("Ups! Parece que no estas registrado", "alertaCorreo")
            /*** FIN Validaciones ****/
        }
        
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