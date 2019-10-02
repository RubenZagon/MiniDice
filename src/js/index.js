//Guardamos en variables los selectores
let dado = document.querySelector('#dado');
let btnLanzar = document.getElementById('lanzar');
let tblRecord = document.querySelector('.record');

//Creamos la funcion que añadirá un número aleatorio redondeado hacia abajo al selector dado
function aleatorio(min = 1, max = 6) {

    return min + Math.floor(Math.random() * max);

}

function lanzarDado() {

    //Guardamos el resultado en al variable resultado a la vez que generamos un número y lo añadimos al dado.
    var resultado = dado.textContent = aleatorio();

    //Añadimos aquí el resultado.
    tblRecord.textContent = resultado;

    //Creo que hay que hacer un
    // return array.add    - o algo así para que vaya añadiendo elementos al array
}


// Esperamos al evento del click en el botón con el Listener  y entonces que ejecute la funcion lanzarDado que lo que hará será añadir el texto en el div del dado
btnLanzar.addEventListener('click', lanzarDado);


/// ------------   Record    --------------------
