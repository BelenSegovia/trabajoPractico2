"use strict";

/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó 
*/

const auto = {
  marca: "Fiat",
  modelo: "Cronos",
  anio: "2019",
  color: "Blanco",
  encenderAuto() {
    console.log("El auto está encendido");
  },
  apagarAuto() {
    console.log("El auto está apagado");
  },
  tocarVocina() {
    console.log("La vocina está sonando");
  },
};

console.log(auto);
auto.encenderAuto();
auto.apagarAuto();
auto.tocarVocina();
