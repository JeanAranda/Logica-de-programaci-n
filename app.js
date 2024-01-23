//Este es un comentario
/**
 esta es otra forma de usar un comentario
 */
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
//let palabaraVeces = 'vez';
let maximosIntentos = 3;
while (numeroUsuario !=  numeroSecreto) {
    numeroUsuario = prompt('Me indicas el número porfavor:');
    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto){
        //Acertamos
        alert(`Acertaste el número secreto es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //Se incrementa el contador en uno cuando no se acierta
        //intentos = intentos + 1;
        //palabaraVeces = 'veces';
        intentos ++;
        if (intentos > maximosIntentos){
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
        //No se pudo acertar aun
        //alert('No acertaste el número');
    }
}