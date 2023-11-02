console.log("Conectado");
// Variables
const baseDeDatosAux = [
    {
        id: 1,
        clase: 'Amigurumi',
        modelo: 'Buho',
        descripcion: 'Rosa',
        precio: 200,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "https://images.saymedia-content.com/.image/t_share/MTc2NDY0ODQ1MjQyMTgxNTk0/free-crochet-pattern-pink-owl-amigurumi-doll.jpg"
    },
    {
        id: 2,
        clase: 'Amigurumi',
        modelo: 'Panda',
        descripcion: 'Mediano',
        precio: 180,
        cantidad: 15,
        cantidadacomprar: 1,
        imagen: 'https://i.pinimg.com/originals/43/d5/f3/43d5f3715ba492858d8fe947f4472090.jpg'
    },
    {
        id: 3,
        clase: 'Amigurumi',
        modelo: 'Buho',
        descripcion: 'Petite Morado',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: 'https://i.pinimg.com/736x/94/3c/df/943cdfe611cce6689558bc7ed7d9781a.jpg'
    },
    {
        id: 4,
        clase: 'Amigurumi',
        modelo: 'Koala',
        descripcion: 'Petite',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: 'https://4.bp.blogspot.com/-bqcbXYSkCxI/WLklNFGJypI/AAAAAAAACOM/lh9Ec5vqWXMuSw-ycv1rBtDbm-gN7hRUwCEw/s1600/KoalaFront.jpg'
    },
    {
        id: 5,
        clase: 'Amigurumi',
        modelo: 'Oso',
        descripcion: 'Cafe',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: 'https://images4-g.ravelrycache.com/uploads/PatchworkMoose/481838697/Theo_1_Photo_background_Ravelry_medium.jpg'
    }
];

// localStorage.setItem('carrito',[]);
let carrito = [];


function renderizarProductos(baseDeDatos) {
    const DomContainer = document.getElementsByClassName("principal");

    baseDeDatos.forEach((info) => {
        // Div donde estara el producto
        const CARTA = document.createElement('div');
        CARTA.id = info.id;
        CARTA.classList.add("carta", "d-flex", "flex-column", "flex-md-row", "flex-lg-row", "justify-content-sm-center", "pb-3");
        //Creamos tres divs. Uno para imagen, otro para descripcion y otro para los botones
        const CONTENEDORIMAGEN = document.createElement('div');
        CONTENEDORIMAGEN.classList.add("contenedorImagen", "d-flex", "justify-content-center");
        const CONTENEDORDESCRIPCION = document.createElement('div');
        CONTENEDORDESCRIPCION.classList.add("contenedorProducto", "text-center");
        const CONTENEDORBOTONES = document.createElement('div');
        CONTENEDORBOTONES.classList.add("contenedorBotones", "d-flex", "flex-column", "justify-content-center", "align-items-center");


        // Cargamos imagen en el contenedor de imagen 
        const IMAGEN = document.createElement('img');
        IMAGEN.setAttribute("src", info.imagen);
        // Agregamos clases de imagen 
        IMAGEN.classList.add("col-md-4", "img-fluid");
        CONTENEDORIMAGEN.appendChild(IMAGEN);



        // Cargamos descripcion en el contenedor de descripcion y su titulo
        const titulo = document.createElement('h2');
        titulo.classList.add("subtitulo");
        const descripcion = document.createElement('p');
        const precio = document.createElement('p');
        precio.classList.add("precio");
        descripcion.classList.add("descripcion");
        titulo.textContent = info.modelo;
        descripcion.textContent = info.descripcion;
        descripcion.textContent = descripcion.textContent
        precio.textContent = "Precio:" + String(info.precio);
        CONTENEDORDESCRIPCION.classList.add("col-md-4");
        CONTENEDORDESCRIPCION.appendChild(titulo);
        CONTENEDORDESCRIPCION.appendChild(descripcion);
        CONTENEDORDESCRIPCION.appendChild(precio);

        // Cargamos botones en el contenedor de botones y agregamos su titulo
        //Creamos un Div para los botones de en medio los cuales son eliminar producto y comprar directa.
        const divBotonesMedio = document.createElement('div');
        // Agregamos atributos y clases de bootsrap para el div de los botones
        divBotonesMedio.classList.add("divMedio", "d-flex", "mt-4", "w-50");

        // Boton agregar al carrito - se verifica que algun producto ya este en el carrito.
        const agregarCarrito = document.createElement('button');
        if (estaEnCarrito(info)) {
            agregarCarrito.textContent = "Este producto ya esta en el carrito";
            agregarCarrito.classList.add("botonCarrito", "w-50");
            agregarCarrito.disabled = true;
        }
        else {
            agregarCarrito.textContent = "Agregar al carrito";
            agregarCarrito.classList.add("botonCarrito", "w-50");
            agregarCarrito.dataset.item = info;
            agregarCarrito.addEventListener('click', () => agregarProductoCarrito(info));
        }


        // Boton Borrar Item
        const borrarCarrito = document.createElement('button');
        borrarCarrito.textContent = "Borrar";
        borrarCarrito.dataset.id = info.id;
        borrarCarrito.addEventListener('click', eliminarProductoCarrito);
        borrarCarrito.classList.add("botonBorrar", "w-50");

        // Boton comprar Item
        const comprarItem = document.createElement('button');
        comprarItem.textContent = "Comprar";
        comprarItem.classList.add("botonComprar", "w-50");
        comprarItem.dataset.item = info;
        comprarItem.addEventListener('click', () => comprarProductoCarrito(info));
        // Los agregamos al div
        divBotonesMedio.appendChild(borrarCarrito);
        divBotonesMedio.appendChild(comprarItem);



        CONTENEDORBOTONES.classList.add("col-md-4");
        CONTENEDORBOTONES.appendChild(agregarCarrito);
        CONTENEDORBOTONES.appendChild(divBotonesMedio);


        CARTA.appendChild(CONTENEDORIMAGEN);
        CARTA.appendChild(CONTENEDORDESCRIPCION);
        CARTA.appendChild(CONTENEDORBOTONES);
        DomContainer[0].append(CARTA);

    });
}


//Funcion que crea los botones de Vaciar y Comprar la lista de deseos
function redenrizarBotonesFinales() {
    const divBotonesFinales = document.getElementsByClassName("botonesFinales");
    divBotonesFinales[0].classList.add("mt-4")
    const botonVaciarLista = document.createElement("button");
    const botonComprarLista = document.createElement("button");
    botonComprarLista.textContent = "Comprar lista";
    botonComprarLista.classList.add("botonComprarLista", "ms-3");
    botonVaciarLista.textContent = "Vaciar lista";
    botonVaciarLista.classList.add("botonVaciarLista", "ms-3");
    botonVaciarLista.addEventListener('click', vaciarLista);
    botonComprarLista.addEventListener('click', comprarLista);
    divBotonesFinales[0].append(botonComprarLista);
    divBotonesFinales[0].append(botonVaciarLista);
}


// Esta funcion lee el carrito para ver si un producto se encuentra en el mismo.
function estaEnCarrito(info) {
    let encontrado = false;
    if(localStorage.getItem("carrito")) {
        const copiaCarrito = JSON.parse(localStorage.getItem("carrito"));
        if (copiaCarrito != null && copiaCarrito) {
            copiaCarrito.forEach(producto => {
                if (producto.id == info.id) {
                    encontrado = true;
                }
            });
        }
    }
    return (encontrado);
}

function comprarLista() {
    localStorage.setItem("carrito", JSON.stringify(baseDeDatos));
    window.location.href = "../views/carritoCompra.html";
}

function vaciarLista() {
    const elementToRemove = document.getElementsByClassName("principal");

    // elementToRemove[0].remove(); Podriamos eliminar todo el nodo pero mejor lo vaciamos de todo su contenido
    while (elementToRemove[0].firstChild) {
        elementToRemove[0].removeChild(elementToRemove[0].firstChild);
    }
    // Se actualiza localstorage
    localStorage.removeItem("listadeseos");
    renderizaCarritoVacio();
}

function eliminarProductoCarrito(evento) {
    // console.log(evento.target.dataset.id);
    const elementToRemove = document.getElementById(evento.target.dataset.id);
    elementToRemove.remove();
    // Obtén la lista de productos desde el almacenamiento local
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Encuentra el índice del elemento a eliminar en la lista de productos
    const indexToRemove = carrito.findIndex(item => item.id === element.id);

    // Si se encuentra el elemento en la lista, elimínalo
    if (indexToRemove !== -1) {
        carrito.splice(indexToRemove, 1);

        // Actualiza el almacenamiento local con la lista actualizada
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}


function comprarProductoCarrito(producto) {
    if (estaEnCarrito(producto)) {
        window.location.href = "../views/carritoCompra.html";
    }
    else {
        agregarProductoCarrito(producto);
        window.location.href = "../views/carritoCompra.html";
    }
}

function agregarProductoCarrito(producto) {
    // Preguntamos si el archivo existe
    let carrito = localStorage.getItem("carrito");
    if (carrito!=null && carrito) {
        console.log("Existe");
        // Si existe es necesario verificar que no hayamos agregado el producto al carrito
        let carritoLs = JSON.parse(localStorage.getItem("carrito"));
        carritoLs.push(producto);
        console.log(carrito);
        // Se actualiza el boton, cambiamos su contenido
        const divcarta = document.getElementById(producto.id);
        const button = divcarta.getElementsByClassName("botonCarrito");
        button[0].textContent = "Producto agregado al carrito";
        button[0].disabled = true;
        //Se actualiza carrito en local Storage
        localStorage.setItem("carrito", JSON.stringify(carritoLs));
    }
    else { // Si no existe se carga con el contenido de nuestra lista
        console.log("no existe ??");
        ncarrito = [];
        ncarrito.push(producto);
        console.log(ncarrito);
        // Se actualiza el boton, cambiamos su contenido
        const divcarta = document.getElementById(producto.id);
        const button = divcarta.getElementsByClassName("botonCarrito");
        button[0].textContent = "Producto agregado al carrito";
        button[0].disabled = true;
        //Se actualiza carrito en local Storage
        localStorage.setItem("carrito", JSON.stringify(ncarrito));
    }
    // Lista de carrito se carga con el producto


}

function renderizaCarritoVacio(){
    // Se accede al div productos del html
    const divProductos = document.getElementsByClassName("principal");
    divProductos[0].classList.add("d-flex", "flex-column", "align-items-center");
    // Se crea un elemento p donde guardar el mensaje.
    const mensajeAgregar = document.createElement("p");
    mensajeAgregar.textContent = "No hay productos en la lista de deseos";
    mensajeAgregar.classList.add("mensaje","texto","justify-self-center");
    // Se agrega el parrafo al html 
    divProductos[0].append(mensajeAgregar);
    // Se crea un boton para regresar a la pagina principal
    const buttton = document.createElement("button");
    buttton.textContent = "Regresar a explorar";
    buttton.classList.add("RegresarExplorar","boton","w-auto","ms-3","h-auto","texto");
    buttton.addEventListener('click', () => window.location.href = "./paginaPrincipal.html");
    divProductos[0].append(buttton);
    // Se elimina el contenido del div de totalbotonesfinales
    const totalBotonesF = document.getElementsByClassName("botonesFinales");
    console.log(totalBotonesF);
    totalBotonesF[0].innerHTML = "";
}

let listaProductos = localStorage.getItem("listadeseos");

// Evaluamos si existe algun producto y si existe renderiza
if (listaProductos!=null && listaProductos.length > 0) {
    listaProductos = JSON.parse(listaProductos);
    renderizarProductos(listaProductos);
    redenrizarBotonesFinales();
}
else { // En caso de que no existe ningun producto manda un mensaje de que no existe nigun producto
    renderizaCarritoVacio();
}