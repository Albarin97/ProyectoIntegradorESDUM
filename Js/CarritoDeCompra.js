console.log("Conectado");


// Esta funcion lee el la lista de productos del carrito desde el local Storage 
// y crea la lista de productos en el DOM
function renderizarProductos(listaProductos) {
    // const listaProductos = JSON.parse(localStorage.getItem("carrito"));

    const divProductos = document.getElementsByClassName("productos");
    divProductos[0].classList.add("d-flex", "row", "align-items-center");

    // Verificamos que exista algun contenido en la lista de productos
    listaProductos.forEach(element => {
        const Tarjeta = document.createElement("div");
        Tarjeta.id = element.id;
        Tarjeta.classList.add("tarjeta","d-flex","ms-2","mt-2","flex-column","flex-md-row","flex-lg-row");
        Tarjeta.classList.add("align-items-center","justify-content-md-around","mb-2","mt-4");   
        // Creamos los contenedores para imagen, descripcion y botones
        const CONTENEDORIMAGEN = document.createElement('div');
        CONTENEDORIMAGEN.classList.add("contenedorImagen","d-flex","justify-content-center");
        const CONTENEDORDESCRIPCION = document.createElement('div');
        CONTENEDORDESCRIPCION.classList.add("contenedorProducto","d-flex","flex-column","justify-content-center","align-items-center");
        const CONTENEDORBOTONES = document.createElement('div');
        CONTENEDORBOTONES.classList.add("contenedorBotones","d-flex", "flex-column",
            "justify-content-center","mb-3");

        // Cargamos imagen en el contenedor de imagen 
        const IMAGEN = document.createElement('img');
        IMAGEN.setAttribute("src", element.imagen);
        IMAGEN.classList.add("img-fluid","h-100");
        IMAGEN.addEventListener("click",()=>{
            window.location.href = "../views/product.html?id="+element.id;
        })
        CONTENEDORIMAGEN.appendChild(IMAGEN);


        // Cargamos descripcion en el contenedor de descripcion y su titulo
        const TITULO = document.createElement('H2');
        TITULO.classList.add("subtitulo");
        const DESCRIPCION = document.createElement('p');
        DESCRIPCION.classList.add("texto");
        TITULO.textContent = element.modelo;
        DESCRIPCION.textContent = element.descripcion;
        const PRECIO = document.createElement('p');
        PRECIO.classList.add("texto");
        PRECIO.textContent = "Precio: $" + String(element.precio * element.cantidadacomprar);
        CONTENEDORDESCRIPCION.classList.add("col-md-4");
        CONTENEDORDESCRIPCION.appendChild(TITULO);
        CONTENEDORDESCRIPCION.appendChild(DESCRIPCION);
        CONTENEDORDESCRIPCION.appendChild(PRECIO);


        // Cargamos botones en el contenedor de botones y agregamos su titulo
        //Boton para borrar el producto de carrito de compras
        const borrarProducto = document.createElement('button');
        borrarProducto.textContent = "Borrar del carrito";
        borrarProducto.classList.add("botonBorrarProducto", "w-100", "boton");
        borrarProducto.dataset.item = element;
        borrarProducto.addEventListener('click', () => borrarProductoCarrito(element));

        // Boton e input para elegir la cantidad de element
        const inputCantidadProducto = document.createElement('input');
        inputCantidadProducto.classList.add("inputCantidadElementos","mt-3","w-100");
        inputCantidadProducto.type = "number";
        inputCantidadProducto.min = 1;
        inputCantidadProducto.max = element.cantidad;
        inputCantidadProducto.value = element.cantidadacomprar;
        inputCantidadProducto.addEventListener("change", () => estableCantidadAComprar(listaProductos, element, inputCantidadProducto.value));
        inputCantidadProducto.addEventListener("change", () => obtenerPrecioTotal(listaProductos));


        CONTENEDORBOTONES.appendChild(borrarProducto);
        CONTENEDORBOTONES.appendChild(inputCantidadProducto);
        Tarjeta.append(CONTENEDORIMAGEN);
        Tarjeta.append(CONTENEDORDESCRIPCION);
        Tarjeta.append(CONTENEDORBOTONES);
        // Tarjeta.append(rowWrapper);
        divProductos[0].append(Tarjeta);

    })


    localStorage.setItem("carrito", JSON.stringify(listaProductos));
}

// Funcion que establece la cantidad a comprar del articulo
function estableCantidadAComprar(listaProductos, element, valor) {
    // Actualiza el valor de cantidad a comprar en el objeto
    element.cantidadacomprar = valor;
    // Lo guardamos en la memoria del navegador
    localStorage.setItem("carrito", JSON.stringify(listaProductos));
    // Actualizamos el precio individual de 
    const divDescripcion = document.getElementById(element.id);
    const nuevaCantidad = element.precio * element.cantidadacomprar;
    divDescripcion.children[1].children[2].textContent = "Precio: $" + String(nuevaCantidad);
}


//Funcion que crea los botones de Comprar Carrito y Vaciar Carrito
function renderizarBotonesFinales(listaProductos) {
    // Creamos los elementos de HTML para el boton y para el texto
    const divPrimeraParte = document.createElement("div");
    const divSegundaParte = document.createElement("div");
    const divBotonesFinales = document.getElementsByClassName("totalBotonesFinales");
    const botonVaciarCarrito = document.createElement("button");
    const botonComprarCarrito = document.createElement("button");
    const parrafoPrecioTotal = document.createElement('p');
    //  Se agregan las clases para el div de Botones Finales
    divBotonesFinales[0].classList.add("d-flex","flex-column","flex-md-row","mt-2");
    

    //  Se agregan las clases y algunos atributos se modifican de los botones y el texto
    parrafoPrecioTotal.innerText = "Total : $ ";
    parrafoPrecioTotal.classList.add("parrafo","h-auto","mt-2");
    botonComprarCarrito.textContent = "Comprar carrito";
    botonComprarCarrito.classList.add("boton","b-comprar","h-auto","mt-2","ms-3");
    botonVaciarCarrito.textContent = "Vaciar carrito";
    botonVaciarCarrito.classList.add("boton", "b-vaciar", "h-auto","mt-2","ms-3");
    botonVaciarCarrito.addEventListener('click', vaciarCarrito);
    botonComprarCarrito.addEventListener('click', () => {
        comprarCarrito(listaProductos);
    });
    //Cargamos los botones y el texto con el total
    divPrimeraParte.append(botonComprarCarrito);
    divPrimeraParte.append(botonVaciarCarrito);
    divPrimeraParte.classList.add("d-flex","flex-column","flex-md-row");
    divPrimeraParte.classList.add("align-items-center","col-md-6");
    divSegundaParte.append(parrafoPrecioTotal);
    divSegundaParte.classList.add("d-flex","justify-content-center","ms-auto");
    divBotonesFinales[0].append(divPrimeraParte);
    divBotonesFinales[0].append(divSegundaParte);
    obtenerPrecioTotal(listaProductos);
}

// Funcion que calcula el valor total a pagar
function obtenerPrecioTotal(listaProductos) {
    if (listaProductos.length == 0) {
        const divBotonesFinales = document.getElementById("final2");
        divBotonesFinales.children[1].children[0].innerText = "Total: $ 0";
    }
    else {
        let precioTotal = 0;
        listaProductos.forEach(element => {
            precioTotal += element.precio * element.cantidadacomprar;
        });
        // de momento borra el contenido de los div, investigar
        const divBotonesFinales = document.getElementById("final2");
        divBotonesFinales.children[1].children[0].innerText = "Total: $"+precioTotal;
    }

}

// Funcion que borrra un elemento del carrito 
function borrarProductoCarrito(element) {
    // Primero lo borramos del Dom
    const elementToRemove = document.getElementById(element.id);
    elementToRemove.remove();
    // Actualizar el local Storage
    // Se uso la funcion filter para devolver todos los elementos menos el que vamos a borrar
    let carritoActualizado = localStorage.getItem("carrito");
    carritoActualizado = JSON.parse(carritoActualizado);
    carritoActualizado = carritoActualizado.filter((element, item) => {
        if (item.id != element.id) {
            return item;
        }
    })
    // Esa lista se carga a el almacenamiento local
    // Es necesario validar que la lista no este vacia porque podria afectar al 
    // renderizado de la pagina
    if (carritoActualizado.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
        // Actualizar el precio total 
        obtenerPrecioTotal(carritoActualizado);
    }
    else {
        vaciarCarrito();
    }
}

function comprarCarrito(listaProductos) {
    localStorage.setItem("carrito", JSON.stringify(listaProductos));
    window.location.href = "../views/paginaCompra.html";
}

function vaciarCarrito() {
    // Eliminamos todos los productos del div productos pero dejamos el div en el html
    const elementToRemove = document.getElementsByClassName("productos");

    // elementToRemove[0].remove(); Podriamos eliminar todo el nodo pero mejor lo vaciamos de todo su contenido
    while (elementToRemove[0].firstChild) {
        elementToRemove[0].removeChild(elementToRemove[0].firstChild);
    }

    // Se elimina el lita de carrito del local storage
    localStorage.removeItem("carrito");
    renderizaCarritoVacio(); 
}


// Leemos el contenido de el carrito desde el localStorage

let listaProductos = localStorage.getItem("carrito");

// Evaluamos si existe algun producto y si existe renderiza
if (listaProductos.length > 0) {
    listaProductos = JSON.parse(listaProductos);
    renderizarProductos(listaProductos);
    renderizarBotonesFinales(listaProductos);
}
else { // En caso de que no existe ningun producto manda un mensaje de que no existe nigun producto
    renderizaCarritoVacio();
}



function renderizaCarritoVacio(){
    // Se accede al div productos del html
    const divProductos = document.getElementsByClassName("productos");
    divProductos[0].classList.add("d-flex", "row", "align-items-center");
    // Se crea un elemento p donde guardar el mensaje.
    const mensajeAgregar = document.createElement("p");
    mensajeAgregar.textContent = "No hay productos en el carrito de compras";
    mensajeAgregar.classList.add("mensaje","texto");
    // Se agrega el parrafo al html 
    divProductos[0].append(mensajeAgregar);
    // Se crea un boton para regresar a la pagina principal
    const buttton = document.createElement("button");
    buttton.textContent = "Regresar a explorar";
    buttton.classList.add("RegresarExplorar","boton","w-auto","ms-3","h-auto","texto");
    buttton.addEventListener('click', () => window.location.href = "./paginaPrincipal.html");
    divProductos[0].append(buttton);
    // Se elimina el contenido del div de totalbotonesfinales
    const totalBotonesF = document.getElementsByClassName("totalBotonesFinales");
    console.log(totalBotonesF);
    totalBotonesF[0].innerHTML = "";
}