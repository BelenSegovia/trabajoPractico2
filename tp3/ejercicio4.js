/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

let numero= prompt("Coloca un número entero: ");

function parImpar(numero){
    if (numero % 2 === 0) {
        alert("El número indicado es PAR");
    } else {
        alert("El número indicado es IMPAR");
    }
}

parImpar(numero);