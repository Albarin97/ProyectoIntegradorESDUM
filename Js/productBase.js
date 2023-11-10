//import baseDeDatos from "../baseDeDatos/baseDeDatos.js";

//const defaultFile = 'https://m.media-amazon.com/images/I/611arNpQf9L._AC_SL1500_.jpg';


//const imgMain = document.getElementById('img-product')


// Obtener el parámetro de ID de la página Catálogo
const parametro = new URLSearchParams(window.location.search);
const productoId = parametro.get("id");
console.log(productoId);

// for (let i = 1; i <= 4; i++) {
//     const file = document.getElementById(`img-thumbnail-${i}`);
//     file.addEventListener('mouseenter', (e) => {
//       imgMain.src = e.target.src;
//     });
//   }


// const url = "http://localhost:8080/DeCrochet/products/";
const url = "https://rest-api-decrochet.onrender.com/DeCrochet/products"
async function getAllProducts() {
  const response = await fetch(url)
  const data = await response.json();
  return data;
}

const baseDatos = await getAllProducts();

function renderizar(baseDeDatos) {
  
  console.log(baseDeDatos);
  // Si el producto existe, obtener su información de la base de datos
  if (productoId !== null && productoId !== "") {
    let productoActual = baseDeDatos.find(producto => producto.idProduct == productoId);
    console.log("ID del producto:", productoId);
    // modificamos la pagina con la información del producto
    const titulo = document.getElementById("productTitle");
    titulo.textContent = productoActual.nameModel;
    const imagen = document.getElementById("img-product");
    imagen.setAttribute("src", productoActual.image);
    const precio = document.getElementById("productprice");
    precio.textContent = "$ " + productoActual.price;
    const descripcion = document.getElementById("pdescription");
    descripcion.textContent = productoActual.description;
    const icono = document.getElementById("add_wishList");
    if (estaEnListaD(productoActual)) {
      icono.classList.remove("bi-heart");
      icono.classList.add("bi-heart-fill");
    } else {
      icono.addEventListener("click", () => agregarLD(productoActual));
    }

    const botonCarrito = document.getElementById("add_cart");
    if (estaEnCarrito(productoActual)) {
      botonCarrito.textContent = "Este producto ya esta en el carrito";
      botonCarrito.classList.add("botonCarrito", "w-50");
      botonCarrito.disabled = true;
    }
    else {
      botonCarrito.textContent = "Agregar al carrito";
      botonCarrito.classList.add("botonCarrito", "w-50");
      botonCarrito.addEventListener('click', () => agregarProductoCarrito(productoActual));
    }
    const botonCompraRapida = document.getElementById("buy-now");
    botonCompraRapida.addEventListener("click", () => comprarProductoCarrito(productoActual));
    // Modificamos las tarjetas de mas productos
    const contenedorTarjetas = document.getElementById("tarjetas");
    let listaRandom = [];
    while (listaRandom.length <= 5) {
      let idrandom = Math.floor(Math.random() * (baseDeDatos.length - 1)) + 1;
      // if (!listaRandom.includes(idrandom)) {
      //   listaRandom.push(idrandom);
      // }
      listaRandom.push(idrandom);
    }
    for (let i = 0; i < contenedorTarjetas.childElementCount; i++) {
      modificarTarjetas(contenedorTarjetas.children[i], listaRandom[i]);
    }
    // Configuramos el evento de los comentarios.
    const botonComentario = document.getElementById("comentarioPush");
    botonComentario.addEventListener("click", () => publicarComentario());
  }
}

renderizar(baseDatos);


// Funcio que publica un comentario
function publicarComentario() {
  const divComentarios = document.getElementById("modal_comments");
  const tarjetaFinal = document.createElement("div");
  tarjetaFinal.classList.add("d-flex", "flex-column", "individuales", "h-auto");
  const divcomentario = document.createElement("div");
  const divCabecera = document.createElement("div");
  divCabecera.classList.add("d-flex", "flex-row", "justify-content-between");
  divcomentario.classList.add("d-flex", "flex-row", "justify-content-start");
  // Cargamos el comentario con el input de la pagina
  const p = document.createElement("p");
  p.classList.add("d-flex", "flex-row");
  const inputText = document.getElementById("commentValue");
  p.textContent = inputText.value;
  // Cargamos el nombre de usuario del localStorage
  const user = document.createElement("p");
  const infoCuenta = JSON.parse(localStorage.getItem("infocuenta"));
  user.textContent = infoCuenta.name;
  console.log(JSON.parse(localStorage.getItem("nombreUsuarioDato")));
  //Cargamos la fecha de donde se elaboro el comentario
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const fecha = document.createElement("p");
  fecha.textContent = hoy.toLocaleDateString();
  divCabecera.append(user);
  divCabecera.append(fecha);
  divcomentario.append(p);
  tarjetaFinal.append(divCabecera);
  tarjetaFinal.append(divcomentario);
  divComentarios.append(tarjetaFinal);
}

// funcion que modifica las tarjetas de mas productos
function modificarTarjetas(tarjeta, idrandom) {
  let productoActual = baseDatos.find(producto => producto.idProduct == idrandom);
  tarjeta.children[0].children[0].setAttribute("src", productoActual.image);
  tarjeta.children[0].children[0].addEventListener("click", () => {
    window.location.href = "../views/product.html?id=" + productoActual.id;
  })
  tarjeta.children[1].children[0].textContent = productoActual.nameModel;
  tarjeta.children[1].children[1].textContent = productoActual.description;
  tarjeta.children[1].children[2].textContent = "$ " + productoActual.price;
  tarjeta.children[1].children[3].classList.add("boton", "texto");
  tarjeta.children[1].children[3].setAttribute("href", "../views/product.html?id=" + productoActual.id);

}

// funcion que realiza la compra directa de un producto
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
        if (producto.idProduct == info.id) {
          encontrado = true;
        }
      });
    }
  }
  return (encontrado);
}

// Funcion que agrega un producto en la Lista de Deseos
function agregarLD(producto) {
  // Preguntamos si lista deseos existe en el local Storage
  let listadeseos = localStorage.getItem("listadeseos");
  if (listadeseos != null && listadeseos.length > 0) {
    console.log("Existe");
    // Si existe agregamos nuestro producto
    let ListaD = JSON.parse(listadeseos);
    ListaD.push(producto);
    console.log(listadeseos);
    // Se actualiza el icono
    const icono = document.getElementById("add_wishList");
    icono.classList.remove("bi-heart");
    icono.classList.add("bi-heart-fill");
    icono.replaceWith(icono.cloneNode(true));
    //Se actualiza carrito en local Storage
    localStorage.setItem("listadeseos", JSON.stringify(ListaD));
  }
  else { // Si no existe se carga con el contenido de nuestra lista
    console.log("no existe ??");
    let listaD = [];
    listaD.push(producto);
    console.log(listaD);
    // Se actualiza el icono
    const icono = document.getElementById("add_wishList");
    icono.classList.remove("bi-heart");
    icono.classList.add("bi-heart-fill");
    icono.replaceWith(icono.cloneNode(true));
    //Se actualiza carrito en local Storage
    localStorage.setItem("listadeseos", JSON.stringify(listaD));
  }
}

// Esta funcion lee la lista de deseos para ver si un producto se encuentra en el mismo.
function estaEnListaD(info) {
  let encontrado = false;
  if (localStorage.getItem("listadeseos")) {
    const copiaCarrito = JSON.parse(localStorage.getItem("listadeseos"));
    if (copiaCarrito != null && copiaCarrito) {
      copiaCarrito.forEach(producto => {
        if (producto.idProduct == info.id) {
          encontrado = true;
        }
      });
    }
  }
  return (encontrado);
}