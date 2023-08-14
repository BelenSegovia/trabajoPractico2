"use strict";

/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulo {
  constructor(alto, ancho) {
    //Propiedades alto y ancho
    this.alto = alto;
    this.ancho = ancho;
  }
  //Modificar propiedades
  altoNuevo(altoIngresado) {
    if (altoIngresado > 0) {
      this.alto = altoIngresado;
    } else {
      console.log("El alto ingresado debe ser mayor a 0.");
    }
  }
  anchoNuevo(anchoIngresado) {
    if (anchoIngresado > 0) {
      this.ancho = anchoIngresado;
    } else {
      console.log("El ancho ingresado debe ser mayor a 0.");
    }
  }
  // Mostrar: Valores, perímetro y ancho
  mostrarValores() {
    console.log(
      `El alto ingresado es ${this.alto}. Mientras qué el ancho ingresado es ${this.ancho}`
    );
  }
  perimetroRectangulo() {
    return 2 * (this.alto + this.ancho);
  }
  areaRectangulo() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangulo(18, 25);
const rectangulo2 = new Rectangulo(11, 13);

//Mostrar Valores
console.log("Valores del rectángulo 1:");
rectangulo1.mostrarValores();
console.log("Valores del rectángulo 2:");
rectangulo2.mostrarValores();

// Modificar
rectangulo1.altoNuevo(15);
rectangulo1.anchoNuevo(0);
rectangulo1.mostrarValores();

//Perímetro y área rectángulo 2
console.log(
  `El perímetro del rectángulo número 2 es: `,
  rectangulo2.perimetroRectangulo()
);
console.log(
  `El área del rectángulo número 2 es: `,
  rectangulo2.areaRectangulo()
);
