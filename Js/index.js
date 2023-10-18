const principal = document.getElementById('princpal');
const nosotros = document.getElementById('nosotros');
const contact = document.getElementById('contact-us');
const wish = document.getElementById('wish');
const cart = document.getElementById('cart');
const product = document.getElementById('product');
const newUser = document.getElementById('newUser');

var iframe = document.getElementById('main-item');

const main = document.getElementById('main-item');


principal.addEventListener('click', () => {
    main.src = "views/paginaProducto.html";
});

nosotros.addEventListener('click', () => {
    main.src = "views/sobreNosotros.html";
});

contact.addEventListener('click', () => {
    main.src = "views/contact.html";
});

wish.addEventListener('click', () => {
    main.src = "views/listaDeseos.html";
});

cart.addEventListener('click', () => {
    main.src = "views/carritoCompra.html";
});

product.addEventListener('click', () => {
    main.src = "views/product.html";
});

newUser.addEventListener('click', () => {
    main.src = "views/registro.html";
});


iframe.onload = function() {
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var elementInsideIframe = iframeDocument.getElementById('buy-now');
    var elementInsideIframe2 = iframeDocument.getElementById('add_wishL');
    

    // Ahora puedes trabajar con el elemento dentro del iframe
    if (elementInsideIframe) {
        // Realiza las operaciones que necesitas
        elementInsideIframe.addEventListener('click', () => {
            main.src = "views/carritoCompra.html";
        });
    }
    if (elementInsideIframe2) {
        elementInsideIframe2.addEventListener('click', () => {
            main.src = "views/listaDeseos.html";
        });
    }
};


