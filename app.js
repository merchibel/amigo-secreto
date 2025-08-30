// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/************
* VARIABLES *
*************/
let listaAmigos = [];
let amigoIngresado = ""; 
let listaHTML = document.querySelector('#listaAmigos');
let sorteado = document.querySelector('#resultado');

/*************
 * FUNCIONES *
 *************/
function agregarAmigo(){
    amigoIngresado = document.getElementById('amigo').value;
    if(amigoIngresado == ''){
        alert('Debe ingresar un nombre');
    }else{
        sorteado.innerHTML = "";
        listaAmigos.push(amigoIngresado);
        limpiarCaja();
        listarAmigos();
    }
}

function sortearAmigo(){
    //obtener nro random entre 0 y el largo de la lista
    if(listaAmigos.length == 0){
        alert('Debe ingresar amigos antes de sortear');
        return;
    }else{
        let nroRandom =  Math.floor(Math.random()*listaAmigos.length);
        sorteado.innerHTML = "El amigo sorteado es: " + listaAmigos[nroRandom];
        listaHTML.innerHTML = "";
        listaAmigos = [];
    }

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function listarAmigos(){
    //limpiar listado visual
    listaHTML.innerHTML = "";
    for(let i=0; i< listaAmigos.length; i++){
        let elementoLi = document.createElement( 'li' );
        elementoLi.innerHTML = listaAmigos[i];
        listaHTML.appendChild( elementoLi );
    }    
    return;
}