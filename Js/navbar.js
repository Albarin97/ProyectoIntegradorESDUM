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
