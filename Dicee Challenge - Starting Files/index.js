var rutasImagenes = 
["images/dice1.png",
 "images/dice2.png", 
 "images/dice3.png",
 "images/dice4.png",
 "images/dice5.png",
 "images/dice6.png"
]
var ruta1;
var ruta2;
var valorDado1;
var valorDado2;

function jugar(){
    var indice1 = obtenerValorRandom(5);
    var indice2 = obtenerValorRandom(5);
    ruta1 = obtenerRuta(indice1);
    ruta2 = obtenerRuta(indice2);
    valorDado1 = indice1 + 1;
    valorDado2 = indice2 + 1;
    actualizar();
}

function obtenerRuta(indice) {
    return rutasImagenes[indice];
}

function obtenerValorRandom(valorMax) {
    return Math.floor((Math.random() * valorMax)) + 1;
}

function actualizar() {
    actualizarImagen();
    actualizarTexto();
}
function actualizarImagen(){
    document.querySelector(".img1").setAttribute("src", ruta1);
    document.querySelector(".img2").setAttribute("src", ruta2);
}

function actualizarTexto(){
    if (valorDado1  === valorDado2){
        document.querySelector("h1").innerHTML="Draw";
    } else if (valorDado1 > valorDado2) {
        document.querySelector("h1").innerHTML="Player 1 wins 🚩";
    } else {
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    }
}
