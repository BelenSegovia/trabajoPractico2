"use strict";
/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(
        `Se ingresaron ${cantidad} a la cuenta. Su saldo es de ${this.saldo}`
      );
    } else {
      console.log("La cantidad ingresada debe ser mayor a 0");
    }
  },
  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Se retiraron ${cantidad} de la cuenta. Su saldo es de ${this.saldo}`
      );
    } else {
      console.log(
        "La cantidad ingresada es inválida o excede el saldo de la cuenta."
      );
    }
  },
  informar() {
    console.log(
      `La cuenta de ${this.titular} tiene un saldo de: ${this.saldo}`
    );
  },
};

//Inicio
console.log(cuenta);
cuenta.informar();
//Ingreso
cuenta.ingresar(1500);
cuenta.informar();
//Extración
cuenta.extraer(720);
cuenta.informar();
