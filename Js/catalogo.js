console.log("Conectado");
// Variables


function renderizarProductos(Productos) {
    const DomContainer = document.getElementsByClassName("principal");

    Productos.forEach((info) => {
        // Div donde estara el producto
        const CARTA = document.createElement('div');
        CARTA.id = info.id;
        CARTA.classList.add("carta", "d-flex", "justify-content-sm-center", "pb-3", "row", "col-md-3");
        //Creamos tres divs. Uno para imagen, otro para descripcion y otro para los botones
        const CONTENEDORIMAGEN = document.createElement('div');
        CONTENEDORIMAGEN.classList.add("contenedorImagen", "d-flex", "justify-content-center");
        const CONTENEDORDESCRIPCION = document.createElement('div');
        CONTENEDORDESCRIPCION.classList.add("contenedorProducto", "text-center");

        // Cargamos imagen en el contenedor de imagen 
        const IMAGEN = document.createElement('img');
        IMAGEN.setAttribute("src", info.imagen);
        // Agregamos clases de imagen 
        IMAGEN.classList.add("col-md-4", "img-fluid");
        CONTENEDORIMAGEN.appendChild(IMAGEN);

        // Cargamos descripcion en el contenedor de descripcion y su titulo
        const TITULO = document.createElement('h2');
        TITULO.classList.add("subtitulo");
        const DESCRIPCION = document.createElement('p');
        const PRECIO = document.createElement('p');
        PRECIO.classList.add("precio");
        DESCRIPCION.classList.add("descripcion");
        TITULO.textContent = info.modelo;
        DESCRIPCION.textContent = info.descripcion;
        DESCRIPCION.textContent = DESCRIPCION.textContent
        PRECIO.textContent = "Precio:" + String(info.precio);
    
        // Agregar botón de carrito
        const botonCarrito = document.createElement('button');
        botonCarrito.classList.add("btn", "btn-primary", "m-2");
        botonCarrito.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        botonCarrito.addEventListener('click', () => {
            // Agregar lógica para agregar este producto al carrito
            // Puedes utilizar un arreglo para almacenar los productos en el carrito.
        });

        // Agregar botón de favoritos
        const botonFavoritos = document.createElement('button');
        botonFavoritos.classList.add("btn", "btn-primary", "m-2");
        botonFavoritos.innerHTML = '<i class="fas fa-heart"></i>';
        botonFavoritos.addEventListener('click', () => {
            // Agregar lógica para agregar este producto a la lista de favoritos
            // Puedes utilizar otro arreglo para almacenar los productos favoritos.
        });


        CONTENEDORDESCRIPCION.appendChild(TITULO);
        CONTENEDORDESCRIPCION.appendChild(DESCRIPCION);
        CONTENEDORDESCRIPCION.appendChild(PRECIO);
        CONTENEDORDESCRIPCION.appendChild(botonCarrito);
        CONTENEDORDESCRIPCION.appendChild(botonFavoritos);

        CARTA.appendChild(CONTENEDORIMAGEN);
        CARTA.appendChild(CONTENEDORDESCRIPCION);
        DomContainer[0].append(CARTA);

    });
}


//Se añaden los eventos a los botones de filtrado 
//Se crea función que añada eventos 

function categoriasEventos() {
    const categoriaAmigurumi = document.getElementById("flexCheckAmigurumis");
    const categoriaRopa = document.getElementById("flexCheckRopa");
    const categoriaAccesorios = document.getElementById("flexCheckAccesorios");

    categoriaAmigurumi.addEventListener('change', (categoriaAmigurumi) => {
        if (categoriaAmigurumi.target.checked) {
            filtrarProductos("Amigurumi");
        } else {
            removerProductos("Amigurumi");
            if (document.getElementById("flexCheckAccesorios").checked) {
                filtrarProductos("Accesorio");
            }
            if (document.getElementById("flexCheckRopa").checked) {
                filtrarProductos("Ropa");
            }
        }
    });

    categoriaRopa.addEventListener('change', (categoriaRopa) => {
        if (categoriaRopa.target.checked) {
            filtrarProductos("Ropa");
        } else {
            removerProductos("Ropa");
            if (document.getElementById("flexCheckAccesorios").checked) {
                filtrarProductos("Accesorio");
            }
            if (document.getElementById("flexCheckAmigurumis").checked) {
                filtrarProductos("Amigurumi");
            }
        }
    });

    categoriaAccesorios.addEventListener('change', (categoriaAccesorios) => {
        if (categoriaAccesorios.target.checked) {
            filtrarProductos("Accesorio");
        } else {
            removerProductos("Accesorio");
            if (document.getElementById("flexCheckRopa").checked) {
                filtrarProductos("Ropa");
            }
            if (document.getElementById("flexCheckAmigurumis").checked) {
                filtrarProductos("Amigurumi");
            }
        }
    });
}
categoriasEventos();

let ordenCategorias=[];

function ordendeCategorias (){
const categoriaAmigurumi = document.getElementById("flexCheckAmigurumis");
const categoriaRopa = document.getElementById("flexCheckRopa");
const categoriaAccesorios = document.getElementById("flexCheckAccesorios");
categoriaAmigurumi.addEventListener('change', () => {
    if (categoriaAmigurumi.checked) {
        filtrarProductos("Amigurumi");
        ordenCategorias.push("Amigurumi");
    } else {
        ordenCategorias.pop("Amigurumi");

    }
});

categoriaRopa.addEventListener('change', () => {
    if (categoriaRopa.checked) {
        filtrarProductos("Ropa");
        ordenCategorias.push("Ropa");
    } else {
        ordenCategorias.pop("Ropa");
    }
});

categoriaAccesorios.addEventListener('change', () => {
    if (categoriaAccesorios.checked) {
        filtrarProductos("Accesorio");
        ordenCategorias.push("Accesorio");
    } else {
        ordenCategorias.pop("Accesorio");
    }
});
    return ordenCategorias;
}

ordendeCategorias ();


// Se crea la función que renderiza lo seleccionado en checkbox
function filtrarProductos(categoria) {

    let categoriaSeleccionada = baseDeDatos.filter(producto => producto.clase === categoria);
    renderizarProductos(categoriaSeleccionada);
}

//Se crea función que obtiene el precio máximo de los productos 
function obtenerPrecioMaximo(){
    let precioMaximo = 0;
    baseDeDatos.forEach(producto =>{
        if (producto.precio>precioMaximo){
            precioMaximo = producto.precio;
        }
    })
    return precioMaximo;
}


//Se crea función que elimina si se deselecciona categoria
function removerProductos(categoria) {
    const elementToRemove = document.getElementsByClassName("principal");
    while (elementToRemove[0].firstChild) {
       elementToRemove[0].removeChild(elementToRemove[0].firstChild);
    }
}

//categoriasEventos();

//Función que muestra el precio máximo de los productos al inicializar la página
function eventoPrecio (){
   const precioMaximo= document.getElementsByClassName("precioMaximo");
   precioMaximo[0].textContent="$"+obtenerPrecioMaximo();
}

eventoPrecio();

    
// Modifica precio seleccionado en barra
function precioSeleccionado (){
    const barraPrecio = document.getElementById("customRange1");
    const precioMaximo = document.getElementsByClassName("precioMaximo"); 
    
    barraPrecio.addEventListener("input", function() {
    const precio = this.value;
    precioMaximo[0].textContent = `$${precio}`; 
});
}

precioSeleccionado();




// Función que filtra por precio y categoría
function filtrarProductosPrecioyCategoria() {
    const precioMaximo = document.getElementById("customRange1").value;
    const categoriasSeleccionadas = ordenCategorias;
    console.log(categoriasSeleccionadas);
    const productosFiltrados = baseDeDatos.filter((producto) => {
        return categoriasSeleccionadas.includes(producto.clase) && producto.precio <= precioMaximo;
    });

    // Ordenar los productos en el orden de las categorías seleccionadas
    const productosOrdenados = [];
    categoriasSeleccionadas.forEach((categoria) => {
        const productosDeCategoria = productosFiltrados.filter((producto) => producto.clase === categoria);
        productosOrdenados.push(...productosDeCategoria);
    });

    //limpia "principal"
    const principal = document.querySelector(".principal");
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //renderizarProductos(productosOrdenados);
    renderizarProductos(productosOrdenados);
}

//Se muestra el precio seleccionado en barra 
const barraPrecio = document.getElementById("customRange1");
const precioActual = document.querySelector(".precioMaximo");

//Evento barra de precios
barraPrecio.addEventListener("input", function () {
    filtrarProductosPrecioyCategoria();
    const precio = this.value;
    precioActual.textContent = `$${precio}`;
});



