let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero es menor');
        }else{
            asignarTextoElemento('p', 'el numero es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', 'Escoge un numero del 1 al '+numeroMaximo);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}
function reiniciarJuego(){
    limpiar();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();