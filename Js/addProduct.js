document.addEventListener("DOMContentLoaded", function () {
    // Obtiene los elementos Id de cada archivo.
const form = document.getElementById("form");
const file = document.getElementById('foto');
const img = document.getElementById('img');

// Establece una ruta predeterminada para la imagen que esta por default.
const defaultFile = "../resources/logo/Subir.jpg";

// Agrega un event listener al cambio del elemento de archivo.
file.addEventListener('change', event => {
    if (event.target.files[0]) {  // Verifica si se ha seleccionado un archivo.
        const reader = new FileReader();
        reader.onload = function (event) {
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0])
    } else {
        // Si no se selecciona un archivo, muestra la imagen predeterminada.
        img.src = defaultFile;
    }
});

// Agrega un event listener al formulario para el evento "submit", que se llama validarFormulario cuando se envía el formulario.
form.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
            
    // Previene el comportamiento predeterminado del formulario (envío).
    evento.preventDefault();
    
    const datos = {
        // Crea un objeto "datos" con valores de los campos del formulario.
        nombreProducto: document.getElementById("nombreProducto").value,
        precio: document.getElementById("precio").value,
        categoria: document.getElementById("categoria").value,
        descripcion: document.getElementById("descripcion").value,
        imagen: ""
    };

    //***  Validaciones   ****//

    // Validar nombre
    if (datos.nombreProducto.trim() === "") {
        // Comprueba si el campo está en blanco.
        mostrarAlerta("Por favor, ingrese un nombre de producto.", "alertaNombreProducto");
        return;
    }

    // Validar precio
    if (isNaN(datos.precio) || datos.precio.trim() === "") {
        // Comprueba si el precio no es un número o está en blanco.
        mostrarAlerta("Por favor, ingrese un valor numérico para el precio.", "alertaPrecio");
        return;
    } else if (datos.precio <= 0) {
        // Comprueba si el precio es menor o igual a cero.
        mostrarAlerta("Por favor, ingrese un número mayor o igual a 0.", "alertaPrecio");
        return;
    }

    // Validar categoría
    if (datos.categoria.trim() === "") {
        // Comprueba si el campo de categoría está en blanco.
        mostrarAlerta("Por favor, ingrese una categoría.", "alertaCategoria");
        return;
    }

    // Validar descripción
    if (datos.descripcion.trim() === "") {
        mostrarAlerta("Por favor, ingrese una descripción.", "alertaDescripcion");
        return;
    }
    // Validar que se haya seleccionado una imagen
    const fileInput = document.getElementById('foto');
    if (fileInput.files.length === 0) {
        // Comprueba si no se ha seleccionado un archivo de imagen.
        mostrarAlerta("Por favor, seleccione una imagen.", "alertaFoto");
        return;
    }

    /*** FIN Validaciones ****/

    const reader = new FileReader();
    reader.onload = function (event) {
        // Cuando se carga la imagen, se ejecuta esta función.
        datos.imagen = event.target.result;
        // Asigna la imagen cargada a los datos.

    let datosValidos = localStorage.getItem("datosIngresados");
    if(datosValidos!=null && datosValidos){
        console.log("Existe");
        let ArrayProduct = JSON.parse(datosValidos);
        ArrayProduct.push(datos);
        localStorage.setItem('datosIngresados', JSON.stringify(ArrayProduct));
    }else{
        let Listanueva = [];
        Listanueva.push(datos);
        localStorage.setItem('datosIngresados', JSON.stringify(Listanueva));
    }

    mostrarAlerta("Formulario enviado con éxito.", "success");
    // Restablece el formulario después de enviar los datos.
    form.reset();

    // Restablecer el valor del campo de archivo (imagen)
    fileInput.value = "";
    // Restablecer la imagen predeterminada
    img.src = defaultFile;
    };
    // Lee la imagen seleccionada como una URL de datos y activa el evento onload.
    reader.readAsDataURL(fileInput.files[0]);
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


