const loadItems = () => {
    const cancellation = document.getElementById("cancellation");

    cancellation.addEventListener("click", () => {
        window.location.href = "../views/carritoCompra.html";
    })


    const listElement = document.getElementById("shopping-list");
    const items = JSON.parse(localStorage.getItem("carrito"));

    for (let item of items) {
        const div = document.createElement("div")
        const img = document.createElement("img")

        img.src = item.imagen;

        const figure = document.createElement("figure")

        figure.appendChild(img)

        const name = document.createElement("p")
        const price = document.createElement("p")
        const newline = document.createElement("br")

        name.id = "products";
        name.innerHTML = `${item.clase} ${item.modelo} ${item.descripcion}`;

        price.innerHTML = `\$${item.precio} * ${item.cantidad} = ${item.precio * item.cantidad}`;

        div.appendChild(figure)
        div.appendChild(name)
        div.appendChild(price)
        div.appendChild(newline)

        listElement.appendChild(div);
    }

    const itemCountElement = document.getElementById("item-count");
    const totalItemCount = items.map(e => e.cantidad).reduce((a, b) => a + b);

    itemCountElement.innerHTML = `${totalItemCount} Artículo${totalItemCount > 1 ? 's' : ''}`;

    const totalPriceElement = document.getElementById("total-price")
    const totalPrice = items.map(e => e.precio * e.cantidad).reduce((a, b) => a + b);

    totalPriceElement.innerHTML = `TOTAL \$${totalPrice}`;
};