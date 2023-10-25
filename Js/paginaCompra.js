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
      const img = document.createElement("img");
  
      img.src = item.imagen;
  
      const figure = document.createElement("figure");
  
      figure.appendChild(img);
  
      const name = document.createElement("p");
      const price = document.createElement("p");
      const newline = document.createElement("br");
  
      name.id = "products";
      name.innerHTML = `${item.clase} ${item.modelo} ${item.descripcion}`;
  
      price.innerHTML = `\$${item.precio * item.cantidad}`;
  
      totalAmount += item.precio * item.cantidad;
  
      div.appendChild(figure);
      div.appendChild(name);
      div.appendChild(price);
      div.appendChild(newline);
  
      listElement.appendChild(div);
    }
  
    // Mostrar el total general al final
    const totalElement = document.createElement("p");
    totalElement.innerHTML = `Total general: \$${totalAmount}`;
    listElement.appendChild(totalElement);
  
    const itemCountElement = document.getElementById("item-count");
    const totalItemCount = items.map(e => e.cantidad).reduce((a, b) => a + b);
  
    itemCountElement.innerHTML = `${totalItemCount} Artículo${totalItemCount > 1 ? 's' : ''}`;
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