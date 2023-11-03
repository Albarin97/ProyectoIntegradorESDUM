const baseDeDatos = [
    {
        id: 1,
        clase: 'Amigurumi',
        modelo: 'Jengibre',
        descripcion: 'Navideño',
        precio: 300,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/jengibre.jpeg"
    },
    {
        id: 2,
        clase: 'Amigurumi',
        modelo: 'Sirena',
        descripcion: 'Colores',
        precio: 220,
        cantidad: 15,
        cantidadacomprar: 1,
        imagen: "../resources/logo/sirena.jpeg"
    },
    {
        id: 3,
        clase: 'Amigurumi',
        modelo: 'Aguacates',
        descripcion: '2 piezas',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/aguacate.jpeg"
    },
    {
        id: 4,
        clase: 'Amigurumi',
        modelo: 'Jake Hora de aventura',
        descripcion: 'Amarillo',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/jakeElPerro.jpeg"
    },
    {
        id: 5,
        clase: 'Amigurumi',
        modelo: 'Sith',
        descripcion: 'De la Era de Hielo',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/Sith.jpeg"
    },
    {
        id: 6,
        clase: 'Amigurumi',
        modelo: 'Corazón',
        descripcion: 'Anatomía Humana',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/corazon.jpeg"
    },
    {
        id: 7,
        clase: 'Amigurumi',
        modelo: 'Sin cara',
        descripcion: 'Del Viaje de Chihiro',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/sincara.jpeg"
    },
    {
        id: 8,
        clase: 'Amigurumi',
        modelo: 'Hello Kitty',
        descripcion: 'Tradicional',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/hellokitty.jpeg"
    },
    {
        id: 9,
        clase: 'Amigurumi',
        modelo: 'Yoshi y sus amigos',
        descripcion: '3 piezas',
        precio: 200,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/yoshi.jpeg"
    },
    {
        id: 10,
        clase: 'Amigurumi',
        modelo: 'Miranda P.',
        descripcion: 'El diablo viste a la moda',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/miranda.jpeg"
    },
    {
        id: 11,
        clase: 'Amigurumi',
        modelo: 'Hamtaro',
        descripcion: 'Café',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/hamtaro.jpeg"
    },
    {
        id: 12,
        clase: 'Amigurumi',
        modelo: 'Koala',
        descripcion: 'Gris',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/koala.jpeg"
    },
    {
        id: 13,
        clase: 'Amigurumi',
        modelo: 'Moana',
        descripcion: 'Bebé',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/moana.jpeg"
    },
    {
        id: 14,
        clase: 'Amigurumi',
        modelo: 'Mario Bros',
        descripcion: 'Tradicional',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/mario.jpeg"
    },
    {
        id: 15,
        clase: 'Amigurumi',
        modelo: 'Suculenta',
        descripcion: 'petite',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/suculenta.jpeg"
    },
    {
        id: 16,
        clase: 'Ropa',
        modelo: 'Camisa',
        descripcion: 'Paleta verde-amarillo',
        precio: 150,
        cantidad: 10,
        cantidadacomprar: 1,
        imagen: "../resources/logo/camisa1.jpeg"
    },
    {
        id: 17,
        clase: 'Ropa',
        modelo: 'Camisa',
        descripcion: 'RosaPaleta negra-azul',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/camisa2.jpeg"
    },
    {
        id: 18,
        clase: 'Ropa',
        modelo: 'Sueter Unisex',
        descripcion: 'Gris tipo Poncho',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/sueterHombre.jpeg"
    },
    {
        id: 19,
        clase: 'Ropa',
        modelo: 'Camisa',
        descripcion: 'Rombos, paleta verde-amarillo',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/camisa3.jpeg"
    },
    {
        id: 20,
        clase: 'Ropa',
        modelo: 'Sueter infante',
        descripcion: 'Estilo dragón azul',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/dinosaco.jpeg"
    },
    {
        id: 21,
        clase: 'Ropa',
        modelo: 'Conjunto',
        descripcion: 'Rosa floreado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/conjuntoRosa.jpeg"
    },
    {
        id: 22,
        clase: 'Ropa',
        modelo: 'Pantalón',
        descripcion: 'Morado',
        precio: 300,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/pantalon.jpeg"
    },
    {
        id: 23,
        clase: 'Ropa',
        modelo: 'Conjunto',
        descripcion: 'Negro floreado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/conjuntoNegro.jpeg"
    },
    {
        id: 24,
        clase: 'Ropa',
        modelo: 'Pollito bebé',
        descripcion: 'Overol amarillo con gorro',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/polloBebe.jpeg"
    },
    {
        id: 25,
        clase: 'Ropa',
        modelo: 'Winnie Pooh bebé',
        descripcion: 'Pañalero, gorro y botas',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/poohBebe.jpeg"
    },
    {
        id: 26,
        clase: 'Ropa',
        modelo: 'Calabaza bebé',
        descripcion: 'Sombrero, calabaza y zapatos',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/calbazaBebe.jpeg"
    },
    {
        id: 27,
        clase: 'Ropa',
        modelo: 'Sueter',
        descripcion: 'Noche estrellada Unisex',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/nocheEstrelladaSueter.jpeg"
    },
    {
        id: 28,
        clase: 'Ropa',
        modelo: 'Conjunto de moda',
        descripcion: 'Estilo 70s',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/conjunto70.jpeg"
    },
    {
        id: 29,
        clase: 'Ropa',
        modelo: 'Sueter',
        descripcion: 'Rosa a cuadros',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/sueterRosa.jpeg"
    },
    {
        id: 30,
        clase: 'Ropa',
        modelo: 'Cobija',
        descripcion: 'Corazones coloridos',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/cobija.jpeg"
    },
    {
        id: 31,
        clase: 'Accesorio',
        modelo: 'Gorrito',
        descripcion: 'Lila caritas felices',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/gorroSonrisa.jpeg"
    },
    {
        id: 32,
        clase: 'Accesorio',
        modelo: 'Bolsa Furby',
        descripcion: 'Morado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/bolsaFurby.jpeg"
    },
    {
        id: 33,
        clase: 'Accesorio',
        modelo: 'Dino Aretes',
        descripcion: 'Verdes',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/dinoAretes.jpeg"
    },
    {
        id: 34,
        clase: 'Accesorio',
        modelo: 'Bufanda',
        descripcion: 'Colores',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/bufanda.jpeg"
    },
    {
        id: 35,
        clase: 'Accesorio',
        modelo: 'Gorrito Jirafa',
        descripcion: 'Tonalidad amarillo-anaranjado',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/gorroJirafa.jpeg"
    },
    {
        id: 36,
        clase: 'Accesorio',
        modelo: 'Aretes fresa',
        descripcion: 'Aretes medianos',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/aretesFresa.jpeg"
    },
    {
        id: 37,
        clase: 'Accesorio',
        modelo: 'Mood Gorrito',
        descripcion: 'Verde y amarillo, doble vista',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/gorroEmoji.jpeg"
    },
    {
        id: 38,
        clase: 'Accesorio',
        modelo: 'Llavero de cerezas',
        descripcion: 'Petite, de bolsillo',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/llaveroCerezas.jpeg"
    },
    {
        id: 39,
        clase: 'Accesorio',
        modelo: 'Gorrito de vaca',
        descripcion: 'Blanco y negro',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/sombreroVaca.jpeg"
    },
    {
        id: 40,
        clase: 'Accesorio',
        modelo: 'Aretes flores',
        descripcion: 'Margaritas blancas',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/aretesFlor.jpeg"
    },
    {
        id: 41,
        clase: 'Accesorio',
        modelo: 'Mochila Hongo',
        descripcion: 'Verde y amarilla',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/hongoBolsa.jpeg"
    },
    {
        id: 42,
        clase: 'Accesorio',
        modelo: 'Mochila cámara',
        descripcion: 'Aqua, petite',
        precio: 120,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/camaraBolsa.jpeg"
    },
    {
        id: 43,
        clase: 'Accesorio',
        modelo: 'Sombrero de oso',
        descripcion: 'Café',
        precio: 145,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/sombreroOso.jpeg"
    },
    {
        id: 44,
        clase: 'Accesorio',
        modelo: 'Mochila Videojuego',
        descripcion: 'Azul',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/mochilaVideojuego.jpeg"
    },
    {
        id: 45,
        clase: 'Accesorio',
        modelo: 'Mochila rebanada de pan',
        descripcion: 'Café, mediana',
        precio: 150,
        cantidad: 3,
        cantidadacomprar: 1,
        imagen: "../resources/logo/bolsaPan.jpeg"
    }

];

export default baseDeDatos;