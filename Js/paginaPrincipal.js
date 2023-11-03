// Se reconoce evento en botones de categorías 

//Función que redireige a la página catálogo
function eventoBoton(idBtn,checkboxSeleccionado) {
    let boton = document.getElementById(idBtn);
    if (boton) {
        boton.addEventListener('click', function() {
          window.location.href = `../views/catalogo.html?seleccionarCheckbox=${checkboxSeleccionado}` ;
        });
      }
    }

 //Se llama la función por cada botón 
 eventoBoton("amigurumiBtn","flexCheckAmigurumis");
 eventoBoton("ropaBtn","flexCheckRopa");
 eventoBoton("accesoriosBtn","flexCheckAccesorios");






  