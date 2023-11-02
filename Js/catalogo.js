
console.log("Conectado");
// Variables
import baseDeDatos from '../baseDeDatos/baseDeDatos.js';
console.log(baseDeDatos);


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
        botonFavoritos.innerHTML = '<i class="fas fa-heart"></i>';
        //Enevnto para agregar en favoritos
        //botonFavoritos.addEventListener('click', () => {
        //const id = info.id; // Obtener el ID del objeto
        //localStorage.setItem('Id', id); // Almacenar solo el ID en localStorage
        
        

        // Evento imagen redirecciona a página producto (se envía el id)
        IMAGEN.addEventListener('click', () => {
        window.location.href = `../views/product.html?id=${info.id}`;
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

// Evaluamos que valor recibimos desde paginaPrincipal para seleccionar checkbox
const parametro = new URLSearchParams(window.location.search);
const seleccionarCheckbox = parametro.get("seleccionarCheckbox");

    if (seleccionarCheckbox) {
      document.getElementById(seleccionarCheckbox).checked = true;
      //console.log(seleccionarCheckbox);
        if (seleccionarCheckbox =="flexCheckAmigurumis"){
            filtrarProductos("Amigurumi");
        } else{
            if (seleccionarCheckbox =="flexCheckRopa"){
                filtrarProductos("Ropa");
            } else{
                if (seleccionarCheckbox =="flexCheckAccesorios"){
                    filtrarProductos("Accesorio");
                }
            }
        }
    }



categoriasEventos();

let ordenCategorias=[];

//Funcion que ordena las categorias segun fueron marcadas, importante para renderizar con barra de precios
function ordendeCategorias (){
const categoriaAmigurumi = document.getElementById("flexCheckAmigurumis");
const categoriaRopa = document.getElementById("flexCheckRopa");
const categoriaAccesorios = document.getElementById("flexCheckAccesorios");
categoriaAmigurumi.addEventListener('change', () => {
    if (categoriaAmigurumi.checked) {
        filtrarProductos("Amigurumi");
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
        filtrarProductos("Ropa");
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
        filtrarProductos("Accesorio");
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
   const barra = document.getElementById("customRange1");
   barra.setAttribute("max",obtenerPrecioMaximo());
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
      const button = document.getElementById("add_cart");
      button.textContent = "Producto agregado al carrito";
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
      const button = document.getElementById("add_cart");
      button.textContent = "Producto agregado al carrito";
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
          if (producto.id == info.id) {
            encontrado = true;
          }
        });
      }
    }
    return (encontrado);
  }

