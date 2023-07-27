/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad= parseInt(prompt("Indique su edad:"));
if (isNaN(edad)){
    console.warn("No es un número válido");
} else if (edad >= 18) {
    alert("Es mayor de 18 años, ya puede conducir");
} else {
    alert("Es menor de 18, aún no puede conducir");
}