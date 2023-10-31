let datosGuardados= localStorage.getItem("datosRegistro");

if(datosGuardados) {
    var datos=JSON.parse(datosGuardados);
} else {

}
console.log(JSON.stringify(datos));