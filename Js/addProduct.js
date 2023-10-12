document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();

    // Obtener valores de los campos
    const nombreProducto = document.getElementById("nombreProducto").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;

    // Validar nombre
    if (nombreProducto.trim() === "") {
        mostrarAlerta("Por favor, ingrese un nombre de producto.", "danger");
        return;
    }

    // Validar precio
    if (isNaN(precio) || precio.trim() === "") {
        mostrarAlerta("Por favor, ingrese un valor numérico para el precio.", "danger");
        return;
    } else if (precio <= 0) {
        mostrarAlerta("Por favor, ingrese un número mayor o igual a 0.", "danger");
        return;
    }

    // Validar categoría
    if (categoria.trim() === "") {
        mostrarAlerta("Por favor, ingrese una categoría.", "danger");
        return;
    }

    // Validar descripción
    if (descripcion.trim() === "") {
        mostrarAlerta("Por favor, ingrese una descripción.", "danger");
        return;
    }

    // Imprimir valores en la consola
    console.log("Nombre del Producto:", nombreProducto);
    console.log("Nombre del Producto:", nombreProducto);
    console.log("Precio:", precio);
    console.log("Categoría:", categoria);
    console.log("Descripción:", descripcion);

    mostrarAlerta("Formulario enviado con éxito.", "success");
    document.getElementById("form").reset();
}

function mostrarAlerta(mensaje, tipo) {
    // Crear elemento de alerta de Bootstrap
    const alerta = document.createElement("div");
    alerta.className = `alert alert-${tipo} mt-3`;
    alerta.role = "alert";
    alerta.textContent = mensaje;

    // Agregar la alerta al contenedor del formulario
    const contenedorFormulario = document.getElementById("form").parentElement;
    contenedorFormulario.insertBefore(alerta, contenedorFormulario.firstChild);

    // Desaparecer la alerta después de 3 segundos
    setTimeout(function () {
        alerta.remove();
    }, 3000);
}
