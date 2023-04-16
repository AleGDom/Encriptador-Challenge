
let texto=document.querySelector(".texto");
let botonen=document.querySelector('.boton-en');
let botondes=document.querySelector('.boton-de');
let mensajeVacio=document.createElement("P");
let input= document.querySelector(".texto-ingreso");
let palabra="";
//Mensaje Vacio
let imagen=document.createElement("PICTURE");
imagen.innerHTML=`<img src="/images/Muñeco.png" alt="No-mensaje" class="img-muneco">`;
mensajeVacio.textContent="No se encontro mensaje";
texto.appendChild(imagen);
texto.appendChild(mensajeVacio);


//Detectar el texto ingresado
input.addEventListener('input',e=>{
    palabra=e.target.value;
    if (palabra==""){
        texto.appendChild(imagen)
        texto.appendChild(mensajeVacio);
    } else{
        imagen.remove();
        mensajeVacio.remove();

    }
    
})

botonen.addEventListener('click',function(){
    if(palabra!=""){
        let prepalabra=palabra.split('');
        for(i=0;i<prepalabra.length;i++){
            switch(prepalabra[i]){
                case 'a': 
                    prepalabra[i]="ai";
                    break;
                case 'e':
                    prepalabra[i]='enter';
                    break;
                case 'i':
                    prepalabra[i]='imes';
                    break;
                case 'o':
                    prepalabra[i]='ober';
                    break;
                case 'u':
                    prepalabra[i]='ufat';
                    break;
                default: 
                    break;      

            }
            
        }
        let textoEncriptado=prepalabra.join('');
        console.log(prepalabra);
        console.log(textoEncriptado);
    }
    
})

botondes.addEventListener('click',function(){
    if(palabra!=""){
        let palabras=palabra.split(" ");
        for(let i=0;i<palabras.length;i++){
            for(let j=1;j<=5;j++){
                palabras[i]=palabras[i].replace('ai','a')
                .replace('enter','e')
                .replace('imes','i')
                .replace('ober','o')
                .replace('ufat','u');
            }
        }

        
        let textoDes=palabras.join(" ");
        console.log(textoDes);
    }
})

