//Este es un comentario
/**
 esta es otra forma de usar un comentario
 */
let numeroSecreto = 6;
let numeroUsuario = prompt('Me indicas el número porfavor:');
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto){
    //Acertamos
    alert(`Acertaste el número secreto es6: ${numeroUsuario}`)
} else {
    //No se pudo acertar aun
    alert('No acertaste el número');
}