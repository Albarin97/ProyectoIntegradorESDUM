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
})
