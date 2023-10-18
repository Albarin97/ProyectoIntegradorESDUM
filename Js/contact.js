document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        //Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;


        //Funcion de validaciones
        function validarCampos() {
            if (nombre === '') { //Revisa campo de nombre que no esté vacío
                alert("Por favor, ingrese nombre.");
                event.preventDefault();
                return false;
            }

            //Revisa campo de correo que no esté vacío y sea válido
            if (!correo.includes('@') || !correo.includes('.') || correo.length < 5) {
                alert("Por favor, ingrese un correo valido");
                event.preventDefault();
                return false;
            }

            if (mensaje === '') { //Revisa campo de mensaje que no esté vacío 
                alert("Por favor, ingrese mensaje");
                event.preventDefault();
                return false;
            }
            return true;
        }

        //Ejecutar funcion validacion
        if (!validarCampos()) {
            return;
        }


    });
});
