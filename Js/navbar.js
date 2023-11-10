document.addEventListener("DOMContentLoaded", function(){
    const btnUser= document.getElementById("btnUser");

    btnUser.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../views/paginaUsuario.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const btnUser= document.getElementById("btnUser");

    btnUser.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../views/paginaUsuario.html";
        }else{
            window.location.href="../views/listaDeseos.html";
        }
    })
})


//////////////////////////////////////////////////////////////////

document.getElementById('searchButton').addEventListener('click', function() {

    searchTerm = document.getElementById('searchInput').value.toLowerCase();


   switch (searchTerm) {
       case 'catalogo':
           window.location.href = 'catalogo.html'; 
           break;
       case 'carrito':
           window.location.href = 'carritoCompra.html'; 
           break;
       case 'favoritos':
           window.location.href = 'listaDeseos.html'; 
           break;
        case 'inicio':
            window.location.href = 'paginaPrincipal.html'; 
           break;

       default:
   
           //console.log("no termino");
           break;
   }
});