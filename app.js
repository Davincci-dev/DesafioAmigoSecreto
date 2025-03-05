// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = "";
let listaAmigos =[];
function asignarTextoElemento(elemento,texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
asignarTextoElemento("p","Sortear amigo");
//Creamos la lista de amigos desde los amigos que introduce el usuario
function agregarAmigo(){
    let amigoDeUsuario = document.getElementById("amigo").value;
    listaAmigos.push(amigoDeUsuario);
    console.log(listaAmigos);
    limpiarCaja();
}

//Sorteamos un nombre de la lista de amigos
function sortearAmigo(amigo){
    amigo = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
    console.log(amigo);
    asignarTextoElemento("p",`Tu Amigo secreto es: ${amigo}`);
}

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}
