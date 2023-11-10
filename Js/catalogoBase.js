console.log("Conectado");
// Variables
// import baseDeDatos from '../baseDeDatos/baseDeDatos.js';
// console.log(baseDeDatos);


// async function getBaseDatos() {
//     url = "localhost:8080/api/v1/products"
//     const response = await fetch(url);
//     const baseDeDatos = JSON.parse(response);
//     return baseDeDatos;
// }

let baseDeDatos = [];
// const url = "http://localhost:8080/DeCrochet/products/"
const url = "https://rest-api-decrochet.onrender.com/DeCrochet/products"
async function getAllProducts() {
    fetch(url)
      .then(response => response.json())
      .then(productos => baseDeDatos=productos)
      .catch(error => console.error('Error al obtener productos', error));
}

getAllProducts();



function renderizarProductos(baseDeDatos) {
    const DomContainer = document.getElementsByClassName("principal");

    baseDeDatos.forEach((info) => {
        // Div donde estara el producto
        const CARTA = document.createElement('div');
        CARTA.id = info.idProduct;
        CARTA.classList.add("carta", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
        //CARTA.classList.add("carta", "d-flex", "justify-content-sm-center", "pb-3", "row", "col-md-3");
        //Creamos tres divs. Uno para imagen, otro para descripcion y otro para los botones
        const CONTENEDORIMAGEN = document.createElement('div');
        CONTENEDORIMAGEN.classList.add("contenedorImagen", "d-flex", "justify-content-center");
        const CONTENEDORDESCRIPCION = document.createElement('div');
        CONTENEDORDESCRIPCION.classList.add("contenedorProducto", "text-center");

        // Cargamos imagen en el contenedor de imagen 
        const IMAGEN = document.createElement('img');
        IMAGEN.setAttribute("src", info.image);
        // Agregamos clases de imagen 
        IMAGEN.classList.add("img-product","img-fluid");
        CONTENEDORIMAGEN.appendChild(IMAGEN);

        // Cargamos descripcion en el contenedor de descripcion y su titulo
        const TITULO = document.createElement('h2');
        TITULO.classList.add("subtitulo");
        const DESCRIPCION = document.createElement('p');
        const PRECIO = document.createElement('p');
        PRECIO.classList.add("precio");
        DESCRIPCION.classList.add("descripcion");
        TITULO.textContent = info.nameModel;
        DESCRIPCION.textContent = info.description;
        DESCRIPCION.textContent = DESCRIPCION.textContent
        PRECIO.textContent = "Precio:" + String(info.price);

        // Agregar botón de carrito
        const botonCarrito = document.createElement('button');
        botonCarrito.classList.add("btn", "btn-primary", "m-2");
        botonCarrito.id = "add_cart" + info.idProduct;
        botonCarrito.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        //botonCarrito.addEventListener('click', () => {
        if (estaEnCarrito(info)) {
            botonCarrito.disabled = true;
        }
        else {
            botonCarrito.addEventListener('click', () => agregarProductoCarrito(info));
        }



        // Agregar botón de favoritos
        const botonFavoritos = document.createElement('button');
        botonFavoritos.classList.add("btn", "btn-primary", "m-2");
        botonFavoritos.id = "add_wishList" + info.idProduct;
        if (estaEnListaD(info)) {
            botonFavoritos.disabled = true;
        } else {
            botonFavoritos.addEventListener("click", () => agregarLD(info));
        }
        
        botonFavoritos.innerHTML = '<i class="far fa-heart"></i>';
        //Enevnto para agregar en favoritos
        //botonFavoritos.addEventListener('click', () => {
        //const id = info.id; // Obtener el ID del objeto
        //localStorage.setItem('Id', id); // Almacenar solo el ID en localStorage



        // Evento imagen redirecciona a página producto (se envía el id)
        IMAGEN.addEventListener('click', () => {
            window.location.href = `../views/product.html?id=${info.idProduct}`;
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


let ordenCategorias = [];
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

// Función con la que evaluamos que valor recibimos desde paginaPrincipal para seleccionar checkbox
function desdePrincipal(){
const parametro = new URLSearchParams(window.location.search);
const seleccionarCheckbox = parametro.get("seleccionarCheckbox");

if (seleccionarCheckbox) {
    document.getElementById(seleccionarCheckbox).checked = true;
    //console.log(seleccionarCheckbox);
    if (seleccionarCheckbox == "flexCheckAmigurumis") {
        ordenCategorias.push("Amigurumi");
        filtrarProductos("Amigurumi");

        
    } else {
        if (seleccionarCheckbox == "flexCheckRopa") {
            ordenCategorias.push("Ropa");
            filtrarProductos("Ropa");
            
        } else {
            if (seleccionarCheckbox == "flexCheckAccesorios") {
                ordenCategorias.push("Accesorio");
                filtrarProductos("Accesorio");
                
            }
        }
    }
}
}
desdePrincipal();


categoriasEventos();



//Funcion que ordena las categorias segun fueron marcadas, importante para renderizar con barra de precios
function ordendeCategorias() {
    const categoriaAmigurumi = document.getElementById("flexCheckAmigurumis");
    const categoriaRopa = document.getElementById("flexCheckRopa");
    const categoriaAccesorios = document.getElementById("flexCheckAccesorios");
    categoriaAmigurumi.addEventListener('change', () => {
        if (categoriaAmigurumi.checked) {
           // filtrarProductos("Amigurumi");
            ordenCategorias.push("Amigurumi");
        } else { //para eliminar categoria del vector cuando se deseleccione el checkbox
            let eliminarCategoria = "Amigurumi";
            let indice = ordenCategorias.indexOf(eliminarCategoria);
            console.log(indice);
            if (indice !== -1) {
                ordenCategorias.splice(indice, 1);
            }
        }
    });

    categoriaRopa.addEventListener('change', () => {
        if (categoriaRopa.checked) {
            console.log("chequeado");
           // filtrarProductos("Ropa");
            ordenCategorias.push("Ropa");
        } else {
            let eliminarCategoria = "Ropa";
            let indice = ordenCategorias.indexOf(eliminarCategoria);
            console.log(indice);
            if (indice !== -1) {
                ordenCategorias.splice(indice, 1);
            }
        }
    });

    categoriaAccesorios.addEventListener('change', () => {
        if (categoriaAccesorios.checked) {
           // filtrarProductos("Accesorio");
            ordenCategorias.push("Accesorio");
        } else {
            let eliminarCategoria = "Accesorio";
            let indice = ordenCategorias.indexOf(eliminarCategoria);
            console.log(indice);
            if (indice !== -1) {
                ordenCategorias.splice(indice, 1);
            }
        }
    });
    return ordenCategorias;
}

ordendeCategorias();


// Se crea la función que renderiza lo seleccionado en checkbox
function filtrarProductos(categoria) {
    let categoriaSeleccionada = baseDeDatos.filter(producto => producto.category === categoria);
    renderizarProductos(categoriaSeleccionada);
}

//Se crea función que obtiene el precio máximo de los productos 
function obtenerPrecioMaximo() {
    let precioMaximo = 0;
    baseDeDatos.forEach(producto => {
        // console.log(producto);
        if (producto.price > precioMaximo) {
            precioMaximo = producto.price;
        }
    })
    return precioMaximo;
}

//Se crea función que obtiene el precio minimo de los productos 
function obtenerPrecioMinimo() {
    let precioMaximo = obtenerPrecioMaximo();
    baseDeDatos.forEach(producto => {
        if (producto.price < precioMaximo) {
            precioMaximo = producto.price;
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
function eventoPrecio() {
    console.log("precios");
    const precioMaximo = document.getElementsByClassName("precioMaximo");
    // precioMaximo[0].textContent = "$" + obtenerPrecioMaximo();
    precioMaximo[0].textContent = "$" + "350";
    const precioMinimo = document.getElementsByClassName("precioMinimo");

    // precioMinimo[0].textContent = "$" + obtenerPrecioMinimo();
    precioMinimo[0].textContent = "$" + "100";
    const barra = document.getElementById("customRange1");
    // barra.setAttribute("max", obtenerPrecioMaximo());
    // barra.setAttribute("min", obtenerPrecioMinimo());
    barra.setAttribute("max",350);
    barra.setAttribute("min",100);
}

eventoPrecio();


// Modifica precio seleccionado en barra
function precioSeleccionado() {
    const barraPrecio = document.getElementById("customRange1");
    const precioMaximo = document.getElementsByClassName("precioMaximo");

    barraPrecio.addEventListener("input", function () {
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
        return categoriasSeleccionadas.includes(producto.category) && producto.price <= precioMaximo;
    });

    // Ordenar los productos en el orden de las categorías seleccionadas
    const productosOrdenados = [];
    categoriasSeleccionadas.forEach((categoria) => {
        const productosDeCategoria = productosFiltrados.filter((producto) => producto.category === categoria);
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

function agregarProductoCarrito(producto) {
    // Preguntamos si el archivo existe
    let carrito = localStorage.getItem("carrito");
    if (carrito != null && carrito) {
        console.log("Existe");
        // Si existe es necesario verificar que no hayamos agregado el producto al carrito
        let carritoLs = JSON.parse(carrito);
        carritoLs.push(producto);
        console.log(carrito);
        // Se actualiza el boton, cambiamos su contenido
        const button = document.getElementById("add_cart" + producto.idProduct);
        button.disabled = true;
        //Se actualiza carrito en local Storage
        localStorage.setItem("carrito", JSON.stringify(carritoLs));
    }
    else { // Si no existe se carga con el contenido de nuestra lista
        console.log("no existe ??");
        let ncarrito = [];
        ncarrito.push(producto);
        console.log(ncarrito);
        // Se actualiza el boton, cambiamos su contenido
        const button = document.getElementById("add_cart" + producto.idProduct);
        button.disabled = true;
        //Se actualiza carrito en local Storage
        localStorage.setItem("carrito", JSON.stringify(ncarrito));
    }
}



// Esta funcion lee el carrito para ver si un producto se encuentra en el mismo.
function estaEnCarrito(info) {
    let encontrado = false;
    if (localStorage.getItem("carrito")) {
        const copiaCarrito = JSON.parse(localStorage.getItem("carrito"));
        if (copiaCarrito != null && copiaCarrito) {
            copiaCarrito.forEach(producto => {
                if (producto.idProduct == info.idProduct) {
                    encontrado = true;
                }
            });
        }
    }
    return (encontrado);
}

function agregarLD(producto) {
    // Preguntamos si lista deseos existe en el local Storage
    let listadeseos = localStorage.getItem("listadeseos");
    if (listadeseos != null && listadeseos.length>0) {
      console.log("Existe");
      // Si existe agregamos nuestro producto
      let ListaD = JSON.parse(listadeseos);
      ListaD.push(producto);
      console.log(listadeseos);
      // Se actualiza el icono
      const boton = document.getElementById("add_wishList"+producto.idProduct);
      boton.disabled = true;
      //Se actualiza carrito en local Storage
      localStorage.setItem("listadeseos", JSON.stringify(ListaD));
    }
    else { // Si no existe se carga con el contenido de nuestra lista
      console.log("no existe ??");
      let listaD = [];
      listaD.push(producto);
      console.log(listaD);
      // Se actualiza el icono
      const boton = document.getElementById("add_wishList"+producto.idProduct);
      boton.disabled = true;
      //Se actualiza carrito en local Storage
      localStorage.setItem("listadeseos", JSON.stringify(listaD));
    }
  }

// function agregarLD(producto) {
//   const listadeseos = localStorage.getItem("listadeseos");
//   const ListaD = listadeseos ? JSON.parse(listadeseos) : [];

//   ListaD.push(producto);

//   const boton = document.getElementById("add_wishList" + producto.id);
//   boton.disabled = true;

//   localStorage.setItem("listadeseos", JSON.stringify(ListaD));
// }

  
  // Esta funcion lee la lista de deseos para ver si un producto se encuentra en el mismo.
  function estaEnListaD(info) {
    let encontrado = false;
    if (localStorage.getItem("listadeseos")) {
      const copiaCarrito = JSON.parse(localStorage.getItem("listadeseos"));
      if (copiaCarrito != null && copiaCarrito) {
        copiaCarrito.forEach(producto => {
          if (producto.idProduct == info.idProduct) {
            encontrado = true;
          }
        });
      }
    }
    return (encontrado);
  }
