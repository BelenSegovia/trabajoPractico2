"use strict";
/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generaDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  // GENERACIONES
  mostrarGeneracion() {
    let generacion = "";
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation(Niños de la posguerra)";
      console.log(`${this.nombre} pertenece a la ${generacion}`);
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      console.log(`${this.nombre} pertenece a la ${generacion}`);
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      console.log(`${this.nombre} pertenece a la ${generacion}`);
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      console.log(`${this.nombre} pertenece a la ${generacion}`);
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      console.log(`${this.nombre} pertenece a la ${generacion}`);
    } else {
      console.log("El año ingresado es inválido");
    }
  }
  //MAYOR DE EDAD
  esMayorDeEdad() {
    return this.edad >= 18;
  }
  // DATOS DE LA PERSONA
  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Masculino/Femenino: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
  }
  // DNI GENERADO
  generaDNI() {
    return Math.floor(Math.random() * 100000000);
  }
}

const persona1 = new Persona("Lucia", 26, "Fem", 57, "1,63", 1997);
const persona2 = new Persona("Nicolas", 62, "Masc", 83, "1,70", 1961);

persona1.mostrarGeneracion();
persona1.mostrarDatos();
