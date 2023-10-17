const principal = document.getElementById('princpal');
const nosotros = document.getElementById('nosotros');
const contact = document.getElementById('contact-us');
const wish = document.getElementById('wish');
const cart = document.getElementById('cart');
const product = document.getElementById('product');
const newUser = document.getElementById('newUser');

const main = document.getElementById('main-item');
console.log(main);

principal.addEventListener('click', () => {
    console.log(main);
    main.src = "views/paginaProducto.html";
});

nosotros.addEventListener('click', () => {
    console.log(main);
    main.src = "views/sobreNosotros.html";
});

contact.addEventListener('click', () => {
    console.log(main);
    main.src = "views/contact.html";
});

wish.addEventListener('click', () => {
    console.log(main);
    main.src = "views/listaDeseos.html";
});

cart.addEventListener('click', () => {
    console.log(main);
    main.src = "views/carritoCompra.html";
});

product.addEventListener('click', () => {
    console.log(main);
    main.src = "views/product.html";
});

newUser.addEventListener('click', () => {
    console.log(main);
    main.src = "views/registro.html";
});