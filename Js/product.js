import baseDeDatos from "../baseDeDatos/baseDeDatos.js";

const defaultFile = 'https://m.media-amazon.com/images/I/611arNpQf9L._AC_SL1500_.jpg';


const imgMain = document.getElementById('img-product')

// for (let i = 1; i <= 4; i++) {
//     const file = document.getElementById(`img-thumbnail-${i}`);
//     file.addEventListener('mouseenter', (e) => {
//       imgMain.src = e.target.src;
//     });
//   }


// Obtener el parámetro de ID de la página Catálogo
const parametro = new URLSearchParams(window.location.search);
const productoId = parametro.get("id");


// Si el producto existe, obtener su información de la base de datos
if (productoId !== null && productoId !== "") {
  let productoActual = baseDeDatos.find(producto => producto.id == productoId);
  console.log(productoActual);
  console.log("ID del producto:", productoId);
  // modificamos la pagina con la información del producto
  const titulo = document.getElementById("productTitle");
  console.log(titulo);
  titulo.textContent = productoActual.modelo;
  const imagen = document.getElementById("img-product");
  imagen.setAttribute("src", productoActual.imagen);
  const precio = document.getElementById("productprice");
  precio.textContent = "$ " + productoActual.precio;
  const descripcion = document.getElementById("pdescription");
  descripcion.textContent = productoActual.descripcion;
  const icono = document.getElementById("add_wishList");
  if(estaEnListaD(productoActual)){
    icono.classList.remove("bi-heart");
    icono.classList.add("bi-heart-fill");
  }else{
    icono.addEventListener("click",()=>agregarLD(productoActual));
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
  for (let i = 0; i < contenedorTarjetas.childElementCount; i++) {
    modificarTarjetas(contenedorTarjetas.children[i]);
  }

}

// funcion que modifica las tarjetas de mas productos
function modificarTarjetas(tarjeta) {
  let idrandom = Math.floor(Math.random() * (baseDeDatos.length - 1)) + 1
  let productoActual = baseDeDatos.find(producto => producto.id == idrandom);
  console.log(productoActual);
  tarjeta.children[0].children[0].setAttribute("src", productoActual.imagen);
  tarjeta.children[0].children[0].addEventListener("click",()=>{
    window.location.href = "../views/product.html?id="+productoActual.id;
  })
  tarjeta.children[1].children[0].textContent = productoActual.modelo;
  tarjeta.children[1].children[1].textContent = productoActual.descripcion;
  tarjeta.children[1].children[2].textContent = "$ " + productoActual.precio;
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
        if (producto.id == info.id) {
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
  if (listadeseos != null && listadeseos.length>0) {
    console.log("Existe");
    // Si existe agregamos nuestro producto
    let ListaD = JSON.parse(listadeseos);
    ListaD.push(producto);
    console.log(listadeseos);
    // Se actualiza el icono
    const icono = document.getElementById("add_wishList");
    icono.replaceWith(icono.cloneNode(true));
    icono.classList.remove("bi-heart");
    icono.classList.add("bi-heart-fill");
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
    icono.replaceWith(icono.cloneNode(true));
    icono.classList.remove("bi-heart");
    icono.classList.add("bi-heart-fill");
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
        if (producto.id == info.id) {
          encontrado = true;
        }
      });
    }
  }
  return (encontrado);
}