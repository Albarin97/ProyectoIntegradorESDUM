console.log("Conectado");
// Variables
const baseDeDatos = [
    {
        id: 1,
        clase: 'Amigurumi',
        modelo: 'Jengibre',
        descripcion: 'Navideño',
        precio: 300,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/jengibre.jpeg"
    },
    {
        id: 2,
        clase: 'Amigurumi',
        modelo: 'Sirena',
        descripcion: 'Colores',
        precio: 220,
        cantidad: 15,
        cantidadacomprar: 1,
        imagen: "./Resources/sirena.jpeg"
    },
    {
        id: 3,
        clase: 'Amigurumi',
        modelo: 'Aguacates',
        descripcion: '2 piezas',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/aguacate.jpeg"
    },
    {
        id: 4,
        clase: 'Amigurumi',
        modelo: 'Jake Hora de aventura',
        descripcion: 'Amarillo',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/jakeElPerro.jpeg"
    },
    {
        id: 5,
        clase: 'Amigurumi',
        modelo: 'Sith',
        descripcion: 'De la Era de Hielo',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/Sith.jpeg"
    },
    {
        id: 6,
        clase: 'Amigurumi',
        modelo: 'Corazón',
        descripcion: 'Anatomía Humana',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/corazon.jpeg"
    },
    {
        id: 7,
        clase: 'Amigurumi',
        modelo: 'Sin cara',
        descripcion: 'Del Viaje de Chihiro',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/sincara.jpeg"
    },
    {
        id: 8,
        clase: 'Amigurumi',
        modelo: 'Hello Kitty',
        descripcion: 'Tradicional',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/hellokitty.jpeg"
    },
    {
        id: 9,
        clase: 'Amigurumi',
        modelo: 'Yoshi y sus amigos',
        descripcion: '3 piezas',
        precio: 200,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/yoshi.jpeg"
    },
    {
        id: 10,
        clase: 'Amigurumi',
        modelo: 'Miranda P.',
        descripcion: 'El diablo viste a la moda',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/miranda.jpeg"
    },
    {
        id: 11,
        clase: 'Amigurumi',
        modelo: 'Hamtaro',
        descripcion: 'Café',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/hamtaro.jpeg"
    },
    {
        id: 12,
        clase: 'Amigurumi',
        modelo: 'Koala',
        descripcion: 'Gris',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/koala.jpeg"
    },
    {
        id: 13,
        clase: 'Amigurumi',
        modelo: 'Moana',
        descripcion: 'Bebé',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/moana.jpeg"
    },
    {
        id: 14,
        clase: 'Amigurumi',
        modelo: 'Mario Bros',
        descripcion: 'Tradicional',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/mario.jpeg"
    },
    {
        id: 15,
        clase: 'Amigurumi',
        modelo: 'Suculenta',
        descripcion: 'petite',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/suculenta.jpeg"
    },
    {
        id: 16,
        clase: 'Ropa',
        modelo: 'Camisa',
        descripcion: 'Paleta verde-amarillo',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "./Resources/camisa1.jpeg"
    },
    {
        id: 17,
        clase: 'Ropa',
        modelo: 'Camisa',
        descripcion: 'RosaPaleta negra-azul',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/camisa2.jpeg"
    },
    {
        id: 18,
        clase: 'Ropa',
        modelo: 'Sueter Unisex',
        descripcion: 'Gris tipo Poncho',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/sueterHombre.jpeg"
    },
    {
        id: 19,
        clase: 'Ropa',
        modelo: 'Camisa',
        descripcion: 'Rombos, paleta verde-amarillo',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/camisa3.jpeg"
    },
    {
        id: 20,
        clase: 'Ropa',
        modelo: 'Sueter infante',
        descripcion: 'Estilo dragón azul',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/dinosaco.jpeg"
    },
    {
        id: 21,
        clase: 'Ropa',
        modelo: 'Conjunto',
        descripcion: 'Rosa floreado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/conjuntoRosa.jpeg"
    },
    {
        id: 22,
        clase: 'Ropa',
        modelo: 'Pantalón',
        descripcion: 'Morado',
        precio: 300,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/pantalon.jpeg"
    },
    {
        id: 23,
        clase: 'Ropa',
        modelo: 'Conjunto',
        descripcion: 'Negro floreado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/conjuntoNegro.jpeg"
    },
    {
        id: 24,
        clase: 'Ropa',
        modelo: 'Pollito bebé',
        descripcion: 'Overol amarillo con gorro',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/polloBebe.jpeg"
    },
    {
        id: 25,
        clase: 'Ropa',
        modelo: 'Winnie Pooh bebé',
        descripcion: 'Pañalero, gorro y botas',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/poohBebe.jpeg"
    },
    {
        id: 26,
        clase: 'Ropa',
        modelo: 'Calabaza bebé',
        descripcion: 'Sombrero, calabaza y zapatos',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/calbazaBebe.jpeg"
    },
    {
        id: 27,
        clase: 'Ropa',
        modelo: 'Sueter',
        descripcion: 'Noche estrellada Unisex',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/nocheEstrelladaSueter.jpeg"
    },
    {
        id: 28,
        clase: 'Ropa',
        modelo: 'Conjunto de moda',
        descripcion: 'Estilo 70s',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/conjunto70.jpeg"
    },
    {
        id: 29,
        clase: 'Ropa',
        modelo: 'Sueter',
        descripcion: 'Rosa a cuadros',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/sueterRosa.jpeg"
    },
    {
        id: 30,
        clase: 'Ropa',
        modelo: 'Cobija',
        descripcion: 'Corazones coloridos',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/cobija.jpeg"
    },
    {
        id: 31,
        clase: 'Accesorio',
        modelo: 'Gorrito',
        descripcion: 'Lila caritas felices',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/gorroSonrisa.jpeg"
    },
    {
        id: 32,
        clase: 'Accesorio',
        modelo: 'Bolsa Furby',
        descripcion: 'Morado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/bolsaFurby.jpeg"
    },
    {
        id: 33,
        clase: 'Accesorio',
        modelo: 'Dino Aretes',
        descripcion: 'Verdes',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/dinoAretes.jpeg"
    },
    {
        id: 34,
        clase: 'Accesorio',
        modelo: 'Bufanda',
        descripcion: 'Colores',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/bufanda.jpeg"
    },
    {
        id: 35,
        clase: 'Accesorio',
        modelo: 'Gorrito Jirafa',
        descripcion: 'Tonalidad amarillo-anaranjado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/gorroJirafa.jpeg"
    },
    {
        id: 36,
        clase: 'Accesorio',
        modelo: 'Aretes fresa',
        descripcion: 'Aretes medianos',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/aretesFresa.jpeg"
    },
    {
        id: 37,
        clase: 'Accesorio',
        modelo: 'Mood Gorrito',
        descripcion: 'Verde y amarillo, doble vista',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/gorroEmoji.jpeg"
    },
    {
        id: 38,
        clase: 'Accesorio',
        modelo: 'Llavero de cerezas',
        descripcion: 'Petite, de bolsillo',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/llaveroCerezas.jpeg"
    },
    {
        id: 39,
        clase: 'Accesorio',
        modelo: 'Gorrito de vaca',
        descripcion: 'Blanco y negro',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/sombreroVaca.jpeg"
    },
    {
        id: 40,
        clase: 'Accesorio',
        modelo: 'Aretes flores',
        descripcion: 'Margaritas blancas',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/aretesFlor.jpeg"
    },
    {
        id: 41,
        clase: 'Accesorio',
        modelo: 'Mochila Hongo',
        descripcion: 'Verde y amarilla',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/hongoBolsa.jpeg"
    },
    {
        id: 42,
        clase: 'Accesorio',
        modelo: 'Mochila cámara',
        descripcion: 'Aqua, petite',
        precio: 120,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/camaraBolsa.jpeg"
    },
    {
        id: 43,
        clase: 'Accesorio',
        modelo: 'Sombrero de oso',
        descripcion: 'Café',
        precio: 145,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/sombreroOso.jpeg"
    },
    {
        id: 44,
        clase: 'Accesorio',
        modelo: 'Mochila Videojuego',
        descripcion: 'Azul',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/mochilaVideojuego.jpeg"
    },
    {
        id: 45,
        clase: 'Accesorio',
        modelo: 'Mochila rebanada de pan',
        descripcion: 'Café, mediana',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "./Resources/bolsaPan.jpeg"
    }

];

function renderizarProductos(Productos) {
    const DomContainer = document.getElementsByClassName("principal");

    Productos.forEach((info) => {
        // Div donde estara el producto
        const CARTA = document.createElement('div');
        CARTA.id = info.id;
        CARTA.classList.add("carta", "d-flex", "justify-content-sm-center", "pb-3", "row", "col-md-3");
        //Creamos tres divs. Uno para imagen, otro para descripcion y otro para los botones
        const CONTENEDORIMAGEN = document.createElement('div');
        CONTENEDORIMAGEN.classList.add("contenedorImagen", "d-flex", "justify-content-center");
        const CONTENEDORDESCRIPCION = document.createElement('div');
        CONTENEDORDESCRIPCION.classList.add("contenedorProducto", "text-center");

        // Cargamos imagen en el contenedor de imagen 
        const IMAGEN = document.createElement('img');
        IMAGEN.setAttribute("src", info.imagen);
        // Agregamos clases de imagen 
        IMAGEN.classList.add("col-md-4", "img-fluid");
        CONTENEDORIMAGEN.appendChild(IMAGEN);

        // Cargamos descripcion en el contenedor de descripcion y su titulo
        const TITULO = document.createElement('h2');
        TITULO.classList.add("subtitulo");
        const DESCRIPCION = document.createElement('p');
        const PRECIO = document.createElement('p');
        PRECIO.classList.add("precio");
        DESCRIPCION.classList.add("descripcion");
        TITULO.textContent = info.modelo;
        DESCRIPCION.textContent = info.descripcion;
        DESCRIPCION.textContent = DESCRIPCION.textContent
        PRECIO.textContent = "Precio:" + String(info.precio);
    
        // Agregar botón de carrito
        const botonCarrito = document.createElement('button');
        botonCarrito.classList.add("btn", "btn-primary", "m-2");
        botonCarrito.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        botonCarrito.addEventListener('click', () => {
            // Agregar lógica para agregar este producto al carrito
            // Puedes utilizar un arreglo para almacenar los productos en el carrito.
        });

        // Agregar botón de favoritos
        const botonFavoritos = document.createElement('button');
        botonFavoritos.classList.add("btn", "btn-primary", "m-2");
        botonFavoritos.innerHTML = '<i class="fas fa-heart"></i>';
        botonFavoritos.addEventListener('click', () => {
            // Agregar lógica para agregar este producto a la lista de favoritos
            // Puedes utilizar otro arreglo para almacenar los productos favoritos.
        });


        CONTENEDORDESCRIPCION.appendChild(TITULO);
        CONTENEDORDESCRIPCION.appendChild(DESCRIPCION);
        CONTENEDORDESCRIPCION.appendChild(PRECIO);
        CONTENEDORDESCRIPCION.appendChild(botonCarrito);
        CONTENEDORDESCRIPCION.appendChild(botonFavoritos);

        CARTA.appendChild(CONTENEDORIMAGEN);
        CARTA.appendChild(CONTENEDORDESCRIPCION);
        DomContainer[0].append(CARTA);

    });
}


//Se añaden los eventos a los botones de filtrado 
//Se crea función que añada eventos 

function categoriasEventos() {
    const categoriaAmigurumi = document.getElementById("flexCheckAmigurumis");
    const categoriaRopa = document.getElementById("flexCheckRopa");
    const categoriaAccesorios = document.getElementById("flexCheckAccesorios");

    categoriaAmigurumi.addEventListener('change', (categoriaAmigurumi) => {
        if (categoriaAmigurumi.target.checked) {
            filtrarProductos("Amigurumi");
        } else {
            removerProductos("Amigurumi");
            if (document.getElementById("flexCheckAccesorios").checked) {
                filtrarProductos("Accesorio");
            }
            if (document.getElementById("flexCheckRopa").checked) {
                filtrarProductos("Ropa");
            }
        }
    });

    categoriaRopa.addEventListener('change', (categoriaRopa) => {
        if (categoriaRopa.target.checked) {
            filtrarProductos("Ropa");
        } else {
            removerProductos("Ropa");
            if (document.getElementById("flexCheckAccesorios").checked) {
                filtrarProductos("Accesorio");
            }
            if (document.getElementById("flexCheckAmigurumis").checked) {
                filtrarProductos("Amigurumi");
            }
        }
    });

    categoriaAccesorios.addEventListener('change', (categoriaAccesorios) => {
        if (categoriaAccesorios.target.checked) {
            filtrarProductos("Accesorio");
        } else {
            removerProductos("Accesorio");
            if (document.getElementById("flexCheckRopa").checked) {
                filtrarProductos("Ropa");
            }
            if (document.getElementById("flexCheckAmigurumis").checked) {
                filtrarProductos("Amigurumi");
            }
        }
    });
}
categoriasEventos();

let ordenCategorias=[];

function ordendeCategorias (){
const categoriaAmigurumi = document.getElementById("flexCheckAmigurumis");
const categoriaRopa = document.getElementById("flexCheckRopa");
const categoriaAccesorios = document.getElementById("flexCheckAccesorios");
categoriaAmigurumi.addEventListener('change', () => {
    if (categoriaAmigurumi.checked) {
        filtrarProductos("Amigurumi");
        ordenCategorias.push("Amigurumi");
    } else {
        ordenCategorias.pop("Amigurumi");

    }
});

categoriaRopa.addEventListener('change', () => {
    if (categoriaRopa.checked) {
        filtrarProductos("Ropa");
        ordenCategorias.push("Ropa");
    } else {
        ordenCategorias.pop("Ropa");
    }
});

categoriaAccesorios.addEventListener('change', () => {
    if (categoriaAccesorios.checked) {
        filtrarProductos("Accesorio");
        ordenCategorias.push("Accesorio");
    } else {
        ordenCategorias.pop("Accesorio");
    }
});
    return ordenCategorias;
}

ordendeCategorias ();


// Se crea la función que renderiza lo seleccionado en checkbox
function filtrarProductos(categoria) {

    let categoriaSeleccionada = baseDeDatos.filter(producto => producto.clase === categoria);
    renderizarProductos(categoriaSeleccionada);
}

//Se crea función que obtiene el precio máximo de los productos 
function obtenerPrecioMaximo(){
    let precioMaximo = 0;
    baseDeDatos.forEach(producto =>{
        if (producto.precio>precioMaximo){
            precioMaximo = producto.precio;
        }
    })
    return precioMaximo;
}


//Se crea función que elimina si se deselecciona categoria
function removerProductos(categoria) {
    const elementToRemove = document.getElementsByClassName("principal");
    while (elementToRemove[0].firstChild) {
       elementToRemove[0].removeChild(elementToRemove[0].firstChild);
    }
}

//categoriasEventos();

//Función que muestra el precio máximo de los productos al inicializar la página
function eventoPrecio (){
   const precioMaximo= document.getElementsByClassName("precioMaximo");
   precioMaximo[0].textContent="$"+obtenerPrecioMaximo();
}

eventoPrecio();

    
// Modifica precio seleccionado en barra
function precioSeleccionado (){
    const barraPrecio = document.getElementById("customRange1");
    const precioMaximo = document.getElementsByClassName("precioMaximo"); 
    
    barraPrecio.addEventListener("input", function() {
    const precio = this.value;
    precioMaximo[0].textContent = `$${precio}`; 
});
}

precioSeleccionado();




// Función que filtra por precio y categoría
function filtrarProductosPrecioyCategoria() {
    const precioMaximo = document.getElementById("customRange1").value;
    const categoriasSeleccionadas = ordenCategorias;
    console.log(categoriasSeleccionadas);
    const productosFiltrados = baseDeDatos.filter((producto) => {
        return categoriasSeleccionadas.includes(producto.clase) && producto.precio <= precioMaximo;
    });

    // Ordenar los productos en el orden de las categorías seleccionadas
    const productosOrdenados = [];
    categoriasSeleccionadas.forEach((categoria) => {
        const productosDeCategoria = productosFiltrados.filter((producto) => producto.clase === categoria);
        productosOrdenados.push(...productosDeCategoria);
    });

    //limpia "principal"
    const principal = document.querySelector(".principal");
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //renderizarProductos(productosOrdenados);
    renderizarProductos(productosOrdenados);
}

//Se muestra el precio seleccionado en barra 
const barraPrecio = document.getElementById("customRange1");
const precioActual = document.querySelector(".precioMaximo");

//Evento barra de precios
barraPrecio.addEventListener("input", function () {
    filtrarProductosPrecioyCategoria();
    const precio = this.value;
    precioActual.textContent = `$${precio}`;
});



