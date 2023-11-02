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
    const contenedorTarjetas = document.getElementById("tarjetas");
    console.log(contenedorTarjetas);
    for(let i=0; i<contenedorTarjetas.childElementCount; i++) {
      modificarTarjetas(contenedorTarjetas.children[i]);
    }

  }

function modificarTarjetas(tarjeta){
  let idrandom = Math.floor(Math.random() * (baseDeDatos.length-1))+1
  let productoActual = baseDeDatos.find(producto => producto.id == idrandom);
  tarjeta.children[0].setAttribute("src", productoActual.imagen);
  tarjeta.children[1].children[0].textContent = productoActual.modelo;
  tarjeta.children[1].children[1].textContent = productoActual.descripcion;
  tarjeta.children[1].children[2].textContent = "$ "+productoActual.precio;
}