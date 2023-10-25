const loadItems = () => {
  const cancellation = document.getElementById("cancellation");

  cancellation.addEventListener("click", () => {
      window.location.href = "../views/carritoCompra.html";
  });

  const listElement = document.getElementById("shopping-list");
  const items = JSON.parse(localStorage.getItem("carrito"));

  if (!items || !Array.isArray(items)) {
      console.error("Error: No se pudo cargar la lista de elementos.");
      return;
  }

  let totalAmount = 0;
  for (let item of items) {
    const div = document.createElement("div");
    
    div.classList.add("product-container"); 

    const img = document.createElement("img");
    img.src = item.imagen;

    const figure = document.createElement("figure");
    figure.appendChild(img);

    const name = document.createElement("p");
    const price = document.createElement("p");
    const quantity = document.createElement("p");
    const totalPerItem = document.createElement("p");
    const newline = document.createElement("br");

    name.id = "products";
    name.innerHTML = `${item.clase} ${item.modelo} ${item.descripcion}`;

    quantity.innerHTML = `Cantidad: ${item.cantidad}`;
    price.innerHTML = `Precio por unidad: \$${item.precio}`;
    totalPerItem.innerHTML = `Total por producto: \$${item.precio * item.cantidad}`;

    totalAmount += item.precio * item.cantidad;

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

function toggleEdit() {
    const addressElement = document.getElementById("address");
    const editButton = document.querySelector(".direction-user button");

    addressElement.contentEditable = !(addressElement.contentEditable === 'true');

    if (addressElement.contentEditable === 'true') {
      editButton.innerText = "Guardar dirección";
    } else {
      editButton.innerText = "Editar dirección";
    }
}