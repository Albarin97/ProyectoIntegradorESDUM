const loadItems = () => {
  console.log("Ejecutando carga de productos");
  const cancellation = document.getElementById("cancellation");

  cancellation.addEventListener("click", () => {
    window.location.href = "../views/carritoCompra.html";
  });

  const listElement = document.getElementById("shopping-list");
  listElement.classList.add("d-flex", "flex-column", "align-items-center");
  const items = JSON.parse(localStorage.getItem("carrito"));

  if (!items || !Array.isArray(items)) {
    console.error("Error: No se pudo cargar la lista de elementos.");
    return;
  }

  let totalAmount = 0;
  for (let item of items) {
    const div = document.createElement("div");
    div.classList.add("w-75");

    div.classList.add("product-container", "justify-content-around", "align-items-center","mb-1","pb-3","pt-3","me-2" );

    const img = document.createElement("img");
    img.src = item.imagen;

    const figure = document.createElement("figure");
    figure.appendChild(img);

    const name = document.createElement("p");
    const quantity = document.createElement("p");
    const price = document.createElement("p");
    const totalPerItem = document.createElement("p");
    const newline = document.createElement("br");

    name.id = "products";
    name.innerHTML = `${item.clase} ${item.modelo} ${item.descripcion}`;

    quantity.classList.add("item-quantity");
    quantity.innerHTML = `Cantidad: ${item.cantidadacomprar}`;

    price.classList.add("item-price"); 
    price.innerHTML = `Precio por unidad: \$${item.precio}`;

    totalPerItem.classList.add("item-total"); 
    totalPerItem.innerHTML = `Total por producto: \$${item.precio * item.cantidadacomprar}`;

    totalAmount += item.precio * item.cantidadacomprar;

    div.appendChild(figure);
    div.appendChild(name);
    div.appendChild(quantity);
    div.appendChild(price);
    div.appendChild(totalPerItem);
    div.appendChild(newline);

    listElement.appendChild(div);
  }

  const totalElement = document.createElement("p");
  totalElement.classList.add("total-general");
  totalElement.innerHTML = `Total general: \$${totalAmount}`;
  listElement.appendChild(totalElement);
};


//function para boton de direccion y nueva direction 
function activarEdicion() {
  document.getElementById("direccionTexto").style.display = "none";

  document.getElementById("formularioEdicion").style.display = "block";
}

function guardarNuevaDireccion() {
  let nuevaDireccion = document.getElementById("nuevaDireccion").value;

  document.getElementById("direccion").innerHTML = nuevaDireccion;

  document.getElementById("formularioEdicion").style.display = "none";
  document.getElementById("direccionTexto").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
  // Suponiendo que has almacenado la dirección en localStorage con la clave 'userAddress'
  const storedAddress = localStorage.getItem('direccionDato');

  // Verifica si la dirección existe en localStorage
  if (storedAddress) {
    // Establece la dirección recuperada en el span 'direccion'
    document.getElementById('direccion').textContent = storedAddress;
  }
});


loadItems();
guardarNuevaDireccion();
activarEdicion();