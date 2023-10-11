console.log("Conectado");
// Variables
const baseDeDatos = [
    {
        id: 1,
        amigurumis: 'Patata',
        modelo: 'shrek',
        descripcion: 'alto',
        precio: 1,
        imagen: 'http://1.bp.blogspot.com/-PP9_iUE36Oc/UqJKUJmZZrI/AAAAAAAABF8/i5c2z5wGsJY/s1600/IMG_20131117_195342.jpg'

    },
    {
        id: 2,
        Prenda: 'Gorro',
        modelo: 'Puerquito',
        descripcion: 'Rosa',
        precio: 2,
        imagen: 'http://1.bp.blogspot.com/-PP9_iUE36Oc/UqJKUJmZZrI/AAAAAAAABF8/i5c2z5wGsJY/s1600/IMG_20131117_195342.jpg'
    }
];

let carrito = [];


function renderizarProductos() {
    const DomContainer = document.getElementsByClassName("principal");
 
    baseDeDatos.forEach((info) => {
        // Div donde estara el producto
        const CARTA = document.createElement('div');
        CARTA.id = info.id;
        CARTA.classList.add("carta");
        //Creamos tres divs. Uno para imagen, otro para descripcion y otro para los botones
        const CONTENEDORIMAGEN = document.createElement('div');
        CONTENEDORIMAGEN.classList.add("contenedorImagen");
        const CONTENEDORDESCRIPCION = document.createElement('div');
        CONTENEDORDESCRIPCION.classList.add("contenedorProducto");
        const CONTENEDORBOTONES = document.createElement('div');
        CONTENEDORBOTONES.classList.add("contenedorBotones");


        // Cargamos imagen en el contenedor de imagen 
        const IMAGEN = document.createElement('img');
        IMAGEN.setAttribute("src",info.imagen);
        // Agregamos clases de imagen 
        IMAGEN.classList.add("col-md-4")
        CONTENEDORIMAGEN.appendChild(IMAGEN);



        // Cargamos descripcion en el contenedor de descripcion y su titulo
        const TITULO = document.createElement('H2');

        const DESCRIPCION = document.createElement ('p');
        TITULO.textContent = info.modelo;
        DESCRIPCION.textContent = info.descripcion;
        CONTENEDORDESCRIPCION.classList.add("col-md-4");
        CONTENEDORDESCRIPCION.appendChild(TITULO);
        CONTENEDORDESCRIPCION.appendChild(DESCRIPCION);


        // Cargamos botones en el contenedor de botones y agregamos su titulo


        const agregarCarrito = document.createElement('button');
        agregarCarrito.textContent = "Agregar al carrito";
        agregarCarrito.classList.add("botonCarrito");
        agregarCarrito.dataset.item = info;
        agregarCarrito.addEventListener('click',()=>agregarProductoCarrito(info));
        //Creamos un Div para los botones de en medio
        const divBotonesMedio = document.createElement('div');
        // Agregamos atributos y clases de bootsrap para el div de los botones
        divBotonesMedio.classList.add("divMedio","d-flex");
        // Creamos los botones de borrar y comprar
        const borrarCarrito = document.createElement('button');
        borrarCarrito.textContent = "Borrar";
        borrarCarrito.dataset.id = info.id;
        borrarCarrito.addEventListener('click', eliminarProductoCarrito);
        borrarCarrito.classList.add("botonBorrar");
        const comprarItem = document.createElement('button');
        comprarItem.textContent = "Comprar";
        comprarItem.classList.add("botonComprar");
        comprarItem.dataset.item = info;
        comprarItem.addEventListener('click', () => comprarProductoCarrito(info));
        // Los agregamos al div
        divBotonesMedio.appendChild(borrarCarrito);
        divBotonesMedio.appendChild(comprarItem);


        
        CONTENEDORBOTONES.classList.add("col-md-4");
        CONTENEDORBOTONES.appendChild(agregarCarrito);
        CONTENEDORBOTONES.appendChild(divBotonesMedio);

        
        CARTA.appendChild(CONTENEDORIMAGEN);
        CARTA.appendChild(CONTENEDORDESCRIPCION);
        CARTA.appendChild(CONTENEDORBOTONES);
        DomContainer[0].append(CARTA); 

    });
}


//Funcion que crea los botones de Vaciar y Comprar la lista de deseos
function redenrizarBotonesFinales(){
    const divBotonesFinales = document.getElementsByClassName("botonesFinales");
    const botonVaciarLista = document.createElement("button");
    const botonComprarLista = document.createElement("button");
    botonVaciar.addEventListener('click', () => vaciarLista());
    botonComprar.addEventListener('click', () => comprarCarrito());
    divBotonesFinales[0].append(botonComprarLista);
    divBotonesFinales[0].append(botonVaciarLista);
    
}




function comprarCarrito(){
    localStorage.setItem("carrito", baseDeDatos);
    window.location.href = "../views/carritoCompra.html";
}



function vaciarLista(){
    
    elementToRemove.remove();
}

function eliminarProductoCarrito(evento) {
    // console.log(evento.target.dataset.id);
    const elementToRemove = document.getElementById(evento.target.dataset.id);
    elementToRemove.remove();
}

function comprarProductoCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = "../views/carritoCompra.html";
}

function agregarProductoCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
    const divcarta = document.getElementById(producto.id);
    const button = divcarta.getElementsByClassName("botonCarrito");
    button[0].textContent = "Producto agregado al carrito";
    button[0].disabled = true;
    //deshacer.addEventListener('click', () => eliminarProductoCarrito(producto));
    //contenedorBtns[0].append()
}



renderizarProductos();