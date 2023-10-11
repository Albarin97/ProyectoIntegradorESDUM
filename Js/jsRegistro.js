const nombre= document.getElementById("nombreUsuario")
const email= document.getElementById("correo")
const emailConfirmacion= document.getElementById("correoConfirmacion")
const password= document.getElementById("contraseña")
const codPos= document.getElementById("codigoPostal")
const form= document.getElementById("form")
const parrafo= document.getElementById("advertencias")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let advertencias= ""
    let entrar=false
    let registroEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let registroEmailConfirmacion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    parrafo.innerHTML= ""
    if(nombre.value.length <6){
        advertencias += `El nombre no es valido <br>`
        entrar=true
    }

    if(!registroEmail.test(email.value)){
        advertencias += `El email no es valido <br>`
        entrar=true
    }

    if(!registroEmailConfirmacion.test(emailConfirmacion.value)){
        advertencias += `El email no es valido <br>`
        entrar=true
    }

    if(!(email.value == emailConfirmacion.value)){
        advertencias += `El email no coincide <br>`
        entrar=true
    }

    if(password.value.length <8){
        advertencias += `La contraseña no es valida <br>`
        entrar=true
    }

    if(codPos.value.length !==5){
        advertencias += `Codigo postal no valido <br>`
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML= advertencias
    }else{
        parrafo.innerHTML= "Registro completado"
        console.log(nombre.value, address.value, email.value, emailConfirmacion.value, password.value)
    }
})