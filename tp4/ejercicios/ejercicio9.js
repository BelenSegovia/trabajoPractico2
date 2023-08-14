"use strict";
/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
 */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {
    console.log("Todos los animales emiten un sonido particular");
  }
  mostrarAnimal() {
    console.log(`Nombre: ${this.nombre} || Edad: ${this.edad}`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido() {
    console.log("El perro hace ¡GUAU, GUAU!");
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido() {
    console.log("El gato hace ¡MIAAAAU!");
  }
}

const perro = new Perro("Palta", 1);
const gato = new Gato("Tana", 3);

perro.mostrarAnimal();
perro.emitirSonido();
gato.mostrarAnimal();
gato.emitirSonido();
