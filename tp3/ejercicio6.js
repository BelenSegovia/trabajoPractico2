/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
 */

let alto= parseInt(prompt("Indique la altura del rectángulo"));
let ancho= parseInt(prompt("Indique el ancho del rectángulo"));

const rectangulo = (a, b) => {
  const perimetro = 2*(a+b);
  return perimetro;
}

const res= rectangulo(alto, ancho);
console.log("El perimetro del rectángulo es " + res);