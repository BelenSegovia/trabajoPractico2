/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

const texto = prompt("escribe un texto");

let cantidadDeVocales = 0;

for (let i = 0; i < texto.length; i += 1) {
  const letra = texto.charAt(i).toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u" ||
    letra === "á" ||
    letra === "é" ||
    letra === "í" ||
    letra === "ó" ||
    letra === "ú"
  ) {
    cantidadDeVocales += 1;
  }
}
console.log(cantidadDeVocales);