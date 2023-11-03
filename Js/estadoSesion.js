document.addEventListener("DOMContentLoaded", function () {
    var sesionIniciada = localStorage.getItem("sesionIniciada");
    if (sesionIniciada === "true") {
        console.log("Sesión iniciada");
    } else {
        console.log("Sesion inactiva");
    }
});

document.addEventListener("DOMContentLoaded", function () {
let datosGuardados= localStorage.getItem("datosRegistro");

if(datosGuardados) {
    var datos=JSON.parse(datosGuardados);
} else {

}
console.log(JSON.stringify(datos));
});

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
});

document.addEventListener("DOMContentLoaded", function(){
    const btnCorazon= document.getElementById("btnCorazon");

    btnCorazon.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../views/listaDeseos.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
});

document.addEventListener("DOMContentLoaded", function(){
    const btnCarrito= document.getElementById("btnCarrito");

    btnCarrito.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../carritoCompra.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
});

document.addEventListener("DOMContentLoaded", function(){
    const btnPerfil= document.getElementById("btnPerfil");

    btnPerfil.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../views/paginaUsuario.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
});

document.addEventListener("DOMContentLoaded", function(){
    const btnDeseos= document.getElementById("btnDeseos");

    btnDeseos.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../views/listaDeseos.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
});

document.addEventListener("DOMContentLoaded", function(){
    const btnCompras= document.getElementById("btnCompras");

    btnCompras.addEventListener("click", function(){
        const sesionIniciada= localStorage.getItem("sesionIniciada");

        if(sesionIniciada==="true"){
            window.location.href= "../carritoCompra.html";
        }else{
            window.location.href="../views/inicioSesion.html";
        }
    })
});