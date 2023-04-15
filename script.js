let a= document.querySelector(".input");
let texto=document.querySelector(".texto");

let b = document.createElement("P");
let mensajeVacio=document.createElement("P");
mensajeVacio.textContent="No se encontro mensaje";
mensajeVacio.classList.add("prueba");

b.textContent="Hola";

a.appendChild(b);

let input= document.querySelector(".texto-ingreso");
let palabra="";
input.addEventListener('input',e=>{
    palabra=e.target.value
    if (palabra==""){
        texto.appendChild(mensajeVacio);
    } else{
        mensajeVacio.remove();

    }
    
})
texto.appendChild(mensajeVacio);

