/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :

- El número debe ser entre 0 y 99999999
- Si lo introducido no es un número deberá indi carse con un alert y volver a preguntar.
- Debemos calcular el resto de la división entera entre el número y el número 23.
- Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
- Deberá de repetirse (bucle) el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’
*/

while(true){
let numero = prompt('Ingrese su número de DNI'); //devuelve string o null

if (numero === null){
    // CANCELAR - SALIR
    break;
}

let numeroInt = Number(numero);

// Verificamos rango Y que sea un número
if (isNaN(numero) || numero < 0 || numero > 99999999){
    // Rango no válido
    alert('Ingrese un número válido');
    continue;
}

// SI LLEGAMOS HASTA ACÁ SIGNIFICA QUE EL DNI ES VÁLIDO
let resto = numeroInt % 23; // 0 - 22  (0 y 1 número menos del resto)
const letras= 'TRWAGMYFPDXBNJZSQVHLCKE';

const letraDNI= letras.at(resto)
alert(`La letra para el DNI ${numero} es ${letraDNI}`);
}
