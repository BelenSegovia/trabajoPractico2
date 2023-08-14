"use strict";
/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    console.log(
      `Valores del producto: Codigo: ${this.codigo} || Nombre: ${this.nombre} || Precio: ${this.precio}`
    );
  }
}

const producto1 = new Producto(1, "Leche", "$150");
const producto2 = new Producto(2, "Manteca", "$200");
const producto3 = new Producto(3, "Arroz", "$300");

const productos = [producto1, producto2, producto3];

console.log("Productos ingresados:");
console.log(productos.length);
let i = 0;
while (i < productos.length) {
  productos[i].imprimeDatos();
  i += 1;
}
