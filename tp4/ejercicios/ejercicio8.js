'use strict'
/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona{
    constructor(nombre, edad, profesion){
        this.nombre= nombre;
        this.edad= edad;
        this.profesion= profesion;
    };
    mostrarPersona(){
        console.log(`Nombre: ${this.nombre} || Edad: ${this.edad} || Profesion: ${this.profesion}`);
    };
    saludar(){
        console.log(`Hola ${this.nombre}. Qué gusto verte`);
    };
    despedirse(){
        console.log(`Adiós ${this.nombre}. Vuelve pronto`);
    }
}

const persona1= new Persona('Arturo', 27, 'Profesor');
const persona2= new Persona('Monica', 30, 'Arquitecta');

persona1.mostrarPersona();
persona1.saludar();
persona2.mostrarPersona();
persona2.despedirse();