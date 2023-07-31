/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */


let edad1= parseInt(prompt("Indica la edad de persona 1"));
let edad2= parseInt(prompt("Indica la edad de persona 2"));
let edad3= parseInt(prompt("Indica la edad de persona 3"));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)){
    alert("Una de las edades no tiene un carácter válido de edad");
} else if (Math.max(edad1,edad2,edad3) === edad1) {
    console.log("La persona 1 es el más grande de los 3")
} else if (Math.max(edad1,edad2,edad3) === edad2) {
    console.log("La persona 2 es el más grande de los 3")
} else if (Math.max(edad1,edad2,edad3) === edad3) {
    console.log("La persona 3 es el más grande de los 3")
} 

console.log("Edades ingresadas: " + edad1 + " - " + edad2 + " - " + edad3)